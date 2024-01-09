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
from model.CarUser import *
from model.Service import *
from model.Appointment import *

app = Flask(__name__)
CORS(app)

connection = mysql.connector.connect(user='root', password='12345',host='localhost',database='mydb',port='3306')
cursor = connection.cursor(dictionary=True)
connection.autocommit = True

#Brand
@app.route("/brand",methods=['POST'])
def createBrand():
    cursor = connection.cursor(dictionary=True)
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

@app.route("/brand/<int:idBrand>", methods=['DELETE'])
def deleteBrand(idBrand):
    cursor = connection.cursor(dictionary=True)
    
    brand = Brand(idBrand=idBrand)
    result = mainController.deleteBrand(brand,connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/brand",methods=['PUT'])
def updateBrand():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    name = data['name']
    idBrand = data['idBrand']
    brand = Brand(idBrand=idBrand,name=name)
    result = mainController.updateBrand(brand,cursor,connection)
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
    idBrand = data['idBrand']
    photos = data['photos']

    carPart = CarPart(name=name, car= car, category= category, stock= stock, bodyShape= bodyShape, version=version, generation=generation, idBrand=idBrand, photos = photos)
    
    result = mainController.createCarPart(carPart,connection,cursor)
    return jsonify({
        'Result': result
    })


#User
@app.route("/user",methods=['POST'])
def createUser():
    cursor = connection.cursor(dictionary=True)
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
    cursor = connection.cursor(dictionary=True)
    email = request.args.get('email')
    password = request.args.get('password')
    result = mainController.logIn(email,password,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/email",methods=['GET'])
async def getEmails():
    cursor = connection.cursor(dictionary=True)
    email = request.args.get('email')
    result = await mainController.getEmails(email,cursor)
    cursor.close()
    return jsonify({
        'Result': result
    })

@app.route("/cellphone",methods=['GET'])
async def getCellphones():
    cursor = connection.cursor(dictionary=True)
    cellphone = request.args.get('cellphone')
    result = await mainController.getCellphones(cellphone,cursor)
    cursor.close()
    return jsonify({
        'Result': result
    })

@app.route("/userName",methods=['GET'])
async def getUserNames():
    cursor = connection.cursor(dictionary=True)
    cellphone = request.args.get('userName')
    result = await mainController.getUserNames(cellphone,cursor)
    cursor.close()
    return jsonify({
        'Result': result
    })

@app.route("/userType",methods=['GET'])
def getUserTypes():
    result = mainController.getUserTypes(connection,cursor)
    print(result)
    return jsonify({
        'Result': result
    })

#CarUser
@app.route("/carUser",methods=['POST'])
def createCarUser():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    year = data['year']
    licensePlate = data['licensePlate']
    idBrand = data['idBrand']
    idUser = data['idUser']
    carUser = CarUser(year=year,licensePlate=licensePlate,idBrand=idBrand,idUser=idUser)
    result = mainController.createCarUser(carUser,connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/carUser",methods=['GET'])
def readCarUser():
    idUser = request.args.get('idUser')
    result = mainController.readCarUser(idUser,cursor)
    print(result)
    return jsonify({
        'Result': result
    })

@app.route("/carUser",methods=['PUT'])
def updateCarUser():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    id = data['id']
    year = data['year']
    licensePlate = data['licensePlate']
    idBrand = data['idBrand']
    idUser = data['idUser']
    carUser = CarUser(id=id,year=year,licensePlate=licensePlate,idBrand=idBrand,idUser=idUser)
    result = mainController.updateCarUser(carUser,cursor,connection)
    return jsonify({
        'Result': result
    })

@app.route("/carUser",methods=['DELETE'])
def deleteCarUser():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    id = data['id']
    idUser = data['idUser']
    carUser = CarUser(id=id,idUser=idUser)
    result = mainController.deleteCarUser(carUser,cursor,connection)
    return jsonify({
        'Result': result
    })

#services
@app.route("/service",methods=['POST'])
def createService():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    service = data['service']
    serviceO = Service(service=service)
    result = mainController.createService(serviceO,connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/service",methods=['GET'])
def readServices():
    result = mainController.readServices(cursor)
    print(result)
    return jsonify({
        'Result': result
    })

@app.route("/service",methods=['PUT'])
def updateService():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    service = data['service']
    idService = data['idService']
    serviceO = Service(id=idService,service=service)
    result = mainController.updateService(serviceO,cursor,connection)
    return jsonify({
        'Result': result
    })

@app.route("/service",methods=['DELETE'])
def deleteService():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    idService = data['idService']
    service = Service(id=idService)
    result = mainController.deleteService(service,cursor,connection)
    return jsonify({
        'Result': result
    })

#appointment
@app.route("/appoinment",methods=['POST'])
def createAppointment():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    start = data['start']
    finish = data['finish']
    idCarUser = data['idCarUser']
    idUser = data['idUser']
    idService = data['idService']
    appointment = Appointment(start=start,finish=finish,idCarUser=idCarUser,idUser=idUser,idService=idService)
    result = mainController.createAppointment(appointment,connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/appoinment",methods=['GET'])
def readAppointment():
    idUser = request.args.get('idUser')
    result = mainController.readServices(idUser,cursor)
    print(result)
    return jsonify({
        'Result': result
    })

@app.route("/appoinment",methods=['PUT'])
def updateAppointment():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    start = data['start']
    finish = data['finish']
    idCarUser = data['idCarUser']
    idUser = data['idUser']
    idService = data['idService']
    id = data['idAppointment']
    appointment = Appointment(id=id,start=start,finish=finish,idCarUser=idCarUser,idUser=idUser,idService=idService)
    result = mainController.updateAppointment(appointment,cursor,connection)
    return jsonify({
        'Result': result
    })

@app.route("/appoinment",methods=['DELETE'])
def deleteAppointment():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    idUser = data['idUser']
    id = data['idAppointment']
    appointment = Appointment(id=id,idUser=idUser)
    result = mainController.deleteAppointment(appointment,cursor,connection)
    return jsonify({
        'Result': result
    })

if __name__ == "__main__":
    app.run(debug=True, port = 8080)