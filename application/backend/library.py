
import base64
from flask import Flask, render_template, request, redirect
from flaskext.mysql import MySQL
from base64 import b64encode
from flask_cors import CORS
import json
from flask import Response


app = Flask(__name__)
CORS(app)

# setting configuration to connect to the DB
app.config['MYSQL_DATABASE_USER'] = 'db_admin'
app.config['MYSQL_DATABASE_PASSWORD'] = 'csc648dbpassword'
app.config['MYSQL_DATABASE_DB'] = 'mediastore'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'


mysql = MySQL()

# intialize the extension
mysql.init_app(app)


conn = mysql.connect()
cursor = conn.cursor()

@app.route('/')
def home():
    print("Here")
    return render_template('home.html')


@app.route('/donnovan')
def donnovan():
    return render_template('donnovan.html')

#endpoint for search
@app.route('/search', methods=['GET', 'POST'])
def search():
    print("Hello World")
    if request.method == "POST":
        print(request)
        # request user input from <input> with name="book"
        print(dir(request))
        print("########################")
        #request.json['book']
        #print(request.body)
        #book = request.form['book']
        book = request.get_json()
        print(request.get_json())
        print(book['book'])
        print("########################")
        
        if(book['book']=="" and book['Category'] == 'all' ):
            cursor.execute("SELECT item_title,item_description, item_author, item_path, item_price, item_category FROM item")
            conn.commit()
            data = cursor.fetchall()
            print(data)
            print(type(data))
            print("DATA : ", data)
            jsn=[]
            for tuple_item in data:
                jsn.append({"title": tuple_item[0], "description": tuple_item[1], "author": tuple_item[2], "path": str(tuple_item[3]), "price": tuple_item[4], "category": tuple_item[5] })
            #jsn = [ {"title": data[0][1], "description": data[0][2], "author": data[0][3], "path": str(data[0][4]), "price": data[0][5], "category": data[0][6] } ]     
            print(jsn)
            return Response(json.dumps(jsn),  mimetype='application/json')  
        
        elif(book['Category'] == 'all' and book['book']!=""):
            cursor.execute("SELECT item_title,item_description, item_author, item_path, item_price, item_category FROM item WHERE item_title LIKE %s ", ( '%' + book['book'] + '%'))
            conn.commit()
            data = cursor.fetchall()
            print(data)
            print(type(data))
            jsn=[]
            for tuple_item in data:
                jsn.append({"title": tuple_item[0], "description": tuple_item[1], "author": tuple_item[2], "path": str(tuple_item[3]), "price": tuple_item[4], "category": tuple_item[5] })
            #jsn = [ {"title": data[0][1], "description": data[0][2], "author": data[0][3], "path": str(data[0][4]), "price": data[0][5], "category": data[0][6] } ]     
            print(jsn)
            return Response(json.dumps(jsn),  mimetype='application/json')  
       
        elif (book['Category'] != 'all' and book['book']==""):
            cursor.execute("SELECT item_title,item_description, item_author, item_path, item_price, item_category FROM item WHERE item_category = %s", (book['Category']))
            conn.commit()
            data = cursor.fetchall()
            print(data)
            print(type(data))
            jsn=[]
            for tuple_item in data:
                jsn.append({"title": tuple_item[0], "description": tuple_item[1], "author": tuple_item[2], "path": str(tuple_item[3]), "price": tuple_item[4], "category": tuple_item[5] })
            #jsn = [ {"title": data[0][1], "description": data[0][2], "author": data[0][3], "path": str(data[0][4]), "price": data[0][5], "category": data[0][6] } ]     
            print(jsn)
            return Response(json.dumps(jsn),  mimetype='application/json')  

        
        elif(book['Category'] != 'all'):
            cursor.execute("SELECT item_title,item_description, item_author, item_path, item_price, item_category FROM item WHERE item_category = %s AND item_title LIKE %s ", (book['Category'], '%' + book['book'] + '%'))
            conn.commit()
            data = cursor.fetchall()
            print(data)
            print(type(data))
            jsn=[]
            for tuple_item in data:
                jsn.append({"title": tuple_item[0], "description": tuple_item[1], "author": tuple_item[2], "path": str(tuple_item[3]), "price": tuple_item[4], "category": tuple_item[5] })
            #jsn = [ {"title": data[0][1], "description": data[0][2], "author": data[0][3], "path": str(data[0][4]), "price": data[0][5], "category": data[0][6] } ]     
            print(jsn)
            return Response(json.dumps(jsn),  mimetype='application/json')  
        




        cursor.execute("SELECT * from item WHERE item_title LIKE %s", (book['book']))
        conn.commit()
        data = cursor.fetchall()

        jsn=[]
        for tuple_item in data:
                jsn.append({"title": tuple_item[0], "description": tuple_item[1], "author": tuple_item[2], "path": str(tuple_item[3]), "price": tuple_item[4], "category": tuple_item[5] })
            #jsn = [ {"title": data[0][1], "description": data[0][2], "author": data[0][3], "path": str(data[0][4]), "price": data[0][5], "category": data[0][6] } ]     
        print(jsn)    
        
      
        return Response(json.dumps(jsn),  mimetype='application/json')

if __name__=='__main__':
    app.debug = True 
    app.run()