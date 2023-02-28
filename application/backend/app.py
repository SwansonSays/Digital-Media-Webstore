'''
Author : Josef
Purpose : Create Flask app object, set up logging, create Flask blueprints, start Flask app
'''

import logging
import os
import datetime
from flask import Flask
from flask_cors import CORS
from database import connect_to_database
import routes_1
import routes_2

app = Flask(__name__)
CORS(app)

# Create a dynamic log file name
app_dir = os.path.dirname(os.path.abspath(__file__))
timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S-%f")
log_filename = os.path.join(app_dir, f'logs/app_{timestamp}.log')

# Configure the logging to the file
logging.basicConfig(filename=log_filename, level=logging.DEBUG,
                    format='%(asctime)s %(levelname)s %(message)s')

# Configure the logging to the console
console = logging.StreamHandler()
console.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
console.setFormatter(formatter)
logging.getLogger('').addHandler(console)

# Connect to the database
connect_to_database(app)

# Register the routes
app.register_blueprint(routes_1.bp)
app.register_blueprint(routes_2.bp)

if __name__ == '__main__':
    app.run(host="0.0.0.0")
