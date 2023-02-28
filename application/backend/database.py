'''
Author : Josef
Purpose : Module for connecting to a MySQL database and executing SQL queries
'''

import logging
import os
from flaskext.mysql import MySQL

mysql = MySQL()

def connect_to_database(app):
    """
    Connect to the database and store the connection in the app object
    :param app: Flask application object
    """
    # Read the database configurations from environment variables
    app.config['MYSQL_DATABASE_USER'] = os.environ['MYSQL_DATABASE_USER']
    app.config['MYSQL_DATABASE_PASSWORD'] = os.environ['MYSQL_DATABASE_PASSWORD']
    app.config['MYSQL_DATABASE_DB'] = os.environ['MYSQL_DATABASE_DB']
    app.config['MYSQL_DATABASE_HOST'] = os.environ['MYSQL_DATABASE_HOST']
    app.config['UPLOAD_FOLDER'] = os.environ['UPLOAD_FOLDER']

    # Initialize the MySQL connection with the Flask application
    mysql.init_app(app)

def execute_query(query, descr=False):
    """
    Execute a database query and return the result
    :param query: SQL query to be executed
    :param descr: Boolean value indicating whether to return the result description
    :return: Result of the query or None if an error occurs
    """
    try:
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute(query)
        result = cursor.fetchall()
        conn.commit()

        # Return the result and the result description if specifi
        if not descr:
            return result
        else:
            result_descr = cursor.description
            return result, result_descr
    except Exception as e:
        logging.error('Error executing query: %s', e)
        return None
    finally:
        cursor.close()
        conn.close()
