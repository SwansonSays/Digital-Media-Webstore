'''
Created on : Nov 10, 2022
Author : Josef
Purpose : backend apis for basic user needs (sign up, login, dashhboard)
'''

from flask import Blueprint, request
import hashlib

user = Blueprint('user', __name__)

#endpoint for Login page
@user.route('/login', methods=['POST'])
def login():
    from library import mysql
    conn = mysql.connect()
    cursor = conn.cursor()
    json = request.json

    email = json["email"]
    password = json["password"]
    callToSQL = f'SELECT * FROM user_records WHERE user_email = "{email}" AND user_password = "{hashlib.md5(password.encode()).hexdigest()}"'

    cursor.execute(callToSQL)
    account = cursor.fetchone()
    # closing database connection.
    cursor.close()
    conn.close()

    if account:
        return 'success'
    else:
        return 'failure'

#endpoint for Sgin Up page
@user.route('/signup', methods=['POST'])
def signup():
    try:
        from library import mysql
        conn = mysql.connect()
        cursor = conn.cursor()
        json = request.json

        email = json["email"]
        password = json["password"]
        username = json["id"]
        first_name = json["firstname"]
        last_name = json["lastname"]
        callToSQL = f'INSERT INTO user_records (user_type,user_username,user_first_name,user_last_name,' \
                    f'user_email,user_password) VALUES ("registered_user","{username}","{first_name}","{last_name}",' \
                    f'"{email}","{hashlib.md5(password.encode()).hexdigest()}");'
        cursor.execute(callToSQL)
        conn.commit()
        return 'success'

    except conn.Error as error:
        #print("Failed to update record to database rollback: {}".format(error))
        return 'failure'

    finally:
        # closing database connection.
        cursor.close()
        conn.close()

#endpoint for profile on dashboard
@user.route('/dashboard_profile', methods=['POST'])
def dashboard_profile():
    try:
        from library import mysql
        conn = mysql.connect()
        cursor = conn.cursor()
        json = request.json
        email = json["email"]

        callToSQL = f'SELECT user_first_name, user_last_name FROM user_records WHERE user_email = "{email}"'
        cursor.execute(callToSQL)
        values = cursor.fetchall()
        headers = cursor.description
        dict_to_json = dict(zip((headers[0][0], headers[1][0]), (values[0][0], values[0][1])))

        return json.dumps(dict_to_json)

    except:
        return 'failure'

    finally:
        # closing database connection.
        cursor.close()
        conn.close()