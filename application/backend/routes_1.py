'''
Author : Josef
Purpose : backend apis for user needs (sign up, login, dashhboard)
'''

import hashlib
import logging
from flask import request, Blueprint
from database import execute_query

bp = Blueprint('routes_1', __name__)

@bp.route('/login', methods=['POST'])
def login():
    """
    Handle user login
    :return: JSON response with either success message or failure message
    """
    # Get the user data from the request
    data = request.json
    email = data["email"]
    password = data["password"]

    # Get the user from the database
    query = f'SELECT * FROM user_records WHERE user_email = "{email}" AND ' \
            f'user_password = "{hashlib.md5(password.encode()).hexdigest()}"'
    result = execute_query(query)
    if not result:
        return 'failure', 400

    # Log the login
    logging.info('User logged in: email=%s', email)

    # Return the success message
    return 'success', 200

@bp.route('/signup', methods=['POST'])
def signup():
    """
    Handle user registration
    :return: JSON response with either success message or failure message
    """
    try:
        # Get the user data from the request
        data = request.json
        email = data["email"]
        password = data["password"]
        username = data["id"]
        first_name = data["firstname"]
        last_name = data["lastname"]

        # Check if the email is already registered
        query = f'SELECT * FROM users WHERE email = "{email}"'
        result = execute_query(query)
        if result:
            return 'failure', 400

        # Hash the password
        password_hash = hashlib.md5(password.encode()).hexdigest()

        # Register the user
        query = f'INSERT INTO user_records (user_type,user_username,user_first_name,user_last_name,' \
                f'user_email,user_password) VALUES ("registered_user","{username}","{first_name}","{last_name}",' \
                f'"{email}","{password_hash}");'
        execute_query(query)

        # Log the registration
        logging.info('User registered: username=%s, email=%s', username, email)

        # Return the success message
        return 'success', 200
    except:
        return 'failure', 400

@bp.route('/profile', methods=['POST'])
def profile():
    """
    Handle the profile information request
    :return: JSON response containing the user's first name and last name or failure message
    """
    try:
        # Get the user data from the request
        data = request.json
        email = data["email"]

        query = f'SELECT user_first_name, user_last_name FROM user_records WHERE user_email = "{email}"'
        values, headers = execute_query(query, descr=True)
        dict_to_json = dict(zip((headers[0][0], headers[1][0]), (values[0][0], values[0][1])))

        return dict_to_json, 200

    except:
        return 'failure', 400


@bp.route('/posts', methods=['POST'])
def posts():
    """
    Handle the posts request
    :return: JSON response containing the list of the user's posts or failure message
    """
    try:
        # Get the user data from the request
        data = request.json
        email = data["email"]

        query = f"""SELECT item_title, item_approved, item_created_date FROM item WHERE item_creator_id = (SELECT """ \
                f"""user_id FROM user_records WHERE user_email = "{email}")"""
        values, headers = execute_query(query, descr=True)
        list_of_dicts = []
        for message in values:
            list_of_dicts.append(dict(zip((headers[0][0], headers[1][0], headers[2][0]), (message[0], message[1],
                                                                                          message[2]))))
        return list_of_dicts, 200

    except:
        return 'failure', 400

@bp.route('/messages', methods=['POST'])
def messages():
    """
    Handle the messages request
    :return: JSON response containing the list of messages sent to the user or failure message
    """
    try:
        # Get the user data from the request
        data = request.json
        email = data["email"]

        query = f"""SELECT message_body_text, user_username, message_created_date FROM message JOIN """ \
                f"""user_records ON message_sender_id = user_id WHERE message_receiver_id = (SELECT user_id FROM user_records """ \
                f"""WHERE user_email = "{email}")"""
        values, headers = execute_query(query, descr=True)
        list_of_dicts = []
        for message in values:
            list_of_dicts.append(dict(zip((headers[0][0], headers[1][0], headers[2][0]), (message[0], message[1],
                                                                                          message[2]))))
        return list_of_dicts, 200

    except:
        return 'failure', 400