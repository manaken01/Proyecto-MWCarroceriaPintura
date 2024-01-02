#.\env\Scripts\activate
#python .\server.py    
#python -m pip install mysql-connector-python
from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error
from mainController import *
from model.Brand import *

app = Flask(__name__)
CORS(app)

connection = mysql.connector.connect(user='root', password='12345',host='localhost',database='mydb',port='3306')
cursor = connection.cursor()

@app.route("/brand",methods=['POST'])
def createBrand():
    data = request.get_json()
    name = data['name']
    active = data['active']
    brand = Brand(name=name, active=active)
    result = mainController.createBrand(brand,connection,cursor)
    return jsonify({
        'Result': result
    })

#User
@app.route("/user",methods=['POST'])
def createUser():
    data = request.get_json()
    userName = data['userName']
    email = data['email']
    password = data['password']
    cellphone = data['cellphone']
    user = User(userName=userName, email=email, password=password,cellphone=cellphone,active=1,userType=1)
    result = mainController.createUser(user,connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/user",methods=['GET'])
def logIn():
    data = request.get_json()
    email = data['email']
    password = data['password']
    result = mainController.logIn(email,password,cursor)
    return jsonify({
        'Result': result
    })


@app.route("/userType",methods=['GET'])
def getUserTypes():
    result = mainController.getUserTypes(cursor)
    print(result)
    return jsonify({
        'Result': result
    })

if __name__ == "__main__":
    app.run(debug=True, port = 8080)