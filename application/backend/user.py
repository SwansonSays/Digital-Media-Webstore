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
    json = request.json
    conn = mysql.connect()
    cursor = conn.cursor()

    email = json["email"]
    password = json["password"]
    callToSQL = f'SELECT * FROM user_records WHERE email = "{email}" AND password = "{hashlib.md5(password.encode()).hexdigest()}"'

    cursor.execute(callToSQL)
    account = cursor.fetchone()
    # closing database connection.
    cursor.close()
    conn.close()

    if account:
        return 'OK'
    else:
        return 'Not OK'

#endpoint for Sgin Up page
@user.route('/signup', methods=['POST'])
def signup():
    from library import mysql
    try:
        json = request.json
        conn = mysql.connect()
        cursor = conn.cursor()

        email = json["email"]
        password = json["password"]
        username = json["id"]
        first_name = json["firstname"]
        last_name = json["lastname"]
        callToSQL = f'INSERT INTO user_records (user_type,user_username,user_first_name,user_last_name,' \
                    f'email,password) VALUES ("registered_user","{username}","{first_name}","{last_name}",' \
                    f'"{email}","{hashlib.md5(password.encode()).hexdigest()}");'
        cursor.execute(callToSQL)
        conn.commit()
        return 'OK'

    except conn.Error as error:
        #print("Failed to update record to database rollback: {}".format(error))
        return 'Not OK'

    finally:
        # closing database connection.
        cursor.close()
        conn.close()
