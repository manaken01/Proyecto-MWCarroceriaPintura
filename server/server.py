#.\env\Scripts\activate
#python .\server.py    
#python -m pip install mysql-connector-python
from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error
from mainController import *
from model.Brand import *
from model.CarPart import *

app = Flask(__name__)
CORS(app)

connection = mysql.connector.connect(user='root', password='12345',host='localhost',database='mydb',port='3306')
cursor = connection.cursor()

#Brand
@app.route("/brand",methods=['POST'])
def createBrand():
    data = request.get_json()
    name = data['name']
    brand = Brand(name=name)
    result = mainController.createBrand(brand,connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/brand",methods=['GET'])
def readBrand():
    result = mainController.readBrand(cursor)
    print(result)
    return jsonify({
        'Result': result
    })
#CarPart
@app.route("/carPart",methods=['POST'])
def createCarPart():
    data = request.get_json()
    name = data['name']
    car = data['car']
    category = data['category']
    stock = data['stock']
    bodyShape = data['bodyShape']
    version = data['version']
    generation = data['generation']
    brand = data['brand']
    photos = data['photos']

    CarPart = CarPart(name=name, car= car, category= category, stock= stock, bodyShape= bodyShape, version=version, generation=generation, brand=brand, photos = photos)
    
    result = mainController.createCarPart(CarPart,connection,cursor)
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
    email = request.args.get('email')
    password = request.args.get('password')
    result = mainController.logIn(email,password,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/email",methods=['GET'])
def getEmails():
    result = mainController.getEmails(cursor)
    print(result)
    return jsonify({
        'Result': result
    })

@app.route("/cellphone",methods=['GET'])
def getCellphones():
    result = mainController.getEmails(cursor)
    print(result)
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