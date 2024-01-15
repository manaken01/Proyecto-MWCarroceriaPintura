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
from model.CarSell import *
from model.Favorite import *

app = Flask(__name__)
CORS(app)

connection = mysql.connector.connect(user='root', password='12345',host='localhost',database='mydb',port='3306')
cursor = connection.cursor(dictionary=True)
connection.autocommit = True

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

@app.route("/brand/<int:idBrand>", methods=['DELETE'])
def deleteBrand(idBrand):
    brand = Brand(idBrand=idBrand)
    result = mainController.deleteBrand(brand,connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/brand",methods=['PUT'])
def updateBrand():
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
    price = data['price']
    category = data['category']
    stock = data['stock']
    bodyShape = data['bodyShape']
    version = data['version']
    generation = data['generation']
    idBrand = data['idBrand']
    photos = data['photos']

    carPart = CarPart(name=name, car= car,price=price, category= category, stock= stock, bodyShape= bodyShape, version=version, generation=generation, idBrand=idBrand, photos = photos)
    
    result = mainController.createCarPart(carPart,connection,cursor)
    return jsonify({
        'Result': result
    })


@app.route("/carPart/<int:idCarPart>",methods=['DELETE'])
def deleteCarPart(idCarPart):
    carPart = CarPart(idCarPart=idCarPart)
    result = mainController.deleteCarPart(carPart,connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/carPart",methods=['PUT'])
def updateCarPart():
    data = request.get_json()
    name = data['name']
    car = data['car']
    price = data['price']
    category = data['category']
    stock = data['stock']
    bodyShape = data['bodyShape']
    version = data['version']
    generation = data['generation']
    idBrand = data['idBrand']
    photos = data['photos']
    idCarPart = data['idCarPart']

    carPart = CarPart(idCarPart=idCarPart, name=name, car= car,price=price, category= category, stock= stock, bodyShape= bodyShape, version=version, generation=generation, idBrand=idBrand, photos = photos)
    
    result = mainController.updateCarPart(carPart,connection,cursor)
    return jsonify({
        'Result': result
    })
@app.route("/carPart",methods=['GET'])
def getCarPart():
    result = mainController.getCarPart(connection,cursor)
    return jsonify({
        'Result': result
    })


#CarSell
@app.route("/carSell",methods=['POST'])
def createCarSell():
    data = request.get_json()
    model = data['model']
    year = data['year']
    color = data['color']
    plate = data['plate']
    transmission = data['transmission']
    passengers = data['passengers']
    idBrand = data['idBrand']
    price = data['price']
    bodyShape = data['bodyShape']
    version = data['version']
    photos = data['photos']

    carSell= CarSell(model=model, year=year, color=color, plate=plate, transmission=transmission, passengers=passengers, idBrand=idBrand, price=price, bodyShape=bodyShape, version=version, photos=photos)
    
    result = mainController.createCarSell(carSell,connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/carSell",methods=['GET'])
def getCarSell():
    result = mainController.getCarSell(connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/carSell",methods=['PUT'])
def updateCarSell():
    data = request.get_json()
    model = data['model']
    year = data['year']
    color = data['color']
    plate = data['plate']
    transmission = data['transmission']
    passengers = data['passengers']
    idBrand = data['idBrand']
    price = data['price']
    bodyShape = data['bodyShape']
    version = data['version']
    photos = data['photos']
    idCarSell = data['idCarSell']

    carSell= CarSell(model=model, year=year, color=color, plate=plate, transmission=transmission, passengers=passengers, idBrand=idBrand, price=price, bodyShape=bodyShape, version=version, photos=photos, idCarSell=idCarSell)
    
    result = mainController.updateCarSell(carSell,connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/carSell/<int:idCarSell>",methods=['DELETE'])
def deleteCarSell(idCarSell):
    result = mainController.deleteCarSell(idCarSell,connection,cursor)
    return jsonify({
        'Result': result
    })

#User
@app.route("/user",methods=['GET'])
def getUsers():
    result = mainController.getUsers(connection,cursor)
    return jsonify({
        'Result': result
    })
@app.route("/user/<int:idUser>",methods=['DELETE'])
def deleteUser(idUser):
    result = mainController.deleteUser(idUser,connection,cursor)
    return jsonify({
        'Result': result
    })


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

@app.route("/user",methods=['PUT'])
def updateUser():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    userName = data['name']
    email = data['email']
    cellphone = data['phone']
    userType = data['type']
    idUser = data['id']
    user = User(userName=userName, email=email, cellphone=cellphone,userType=userType,idUser=idUser)
    result = mainController.updateUser(user,connection,cursor)
    return jsonify({
        'Result': result
    })


@app.route("/login",methods=['GET'])
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


#UserType
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
async def readCarUser():
    cursor = connection.cursor(dictionary=True)
    idUser = request.args.get('idUser')
    result = await mainController.readCarUser(idUser,cursor)
    print(result)
    cursor.close()
    return jsonify({
        'Result': result
    })

@app.route("/carUser",methods=['PUT'])
def updateCarUser():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    id = data['idCar']
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

@app.route("/plate",methods=['GET'])
async def getPlate():
    cursor = connection.cursor(dictionary=True)
    licensePlate = request.args.get('licensePlate')
    result = await mainController.getPlate(licensePlate,cursor)
    cursor.close()
    return jsonify({
        'Result': result
    })

@app.route("/plateId",methods=['GET'])
async def getPlateId():
    cursor = connection.cursor(dictionary=True)
    licensePlate = request.args.get('licensePlate')
    result = await mainController.getPlateId(licensePlate,cursor)
    cursor.close()
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
async def readServices():
    result = await mainController.readServices(cursor)
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
    cursor.close()
    return jsonify({
        'Result': result
    })

@app.route("/service/<int:idService>",methods=['DELETE'])
def deleteService(idService):
    cursor = connection.cursor(dictionary=True)
    result = mainController.deleteService(idService,cursor,connection)
    return jsonify({
        'Result': result
    })

#appointment
@app.route("/appointment",methods=['POST'])
def createAppointment():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    date = data['date']
    hour = data['hour']
    idCarUser = data['idCarUser']
    idUser = data['idUser']
    idService = data['idService']
    appointment = Appointment(date=date,hour=hour,idCarUser=idCarUser,idUser=idUser,idService=idService)
    result = mainController.createAppointment(appointment,connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/appointment",methods=['GET'])
def readAppointment():
    idUser = request.args.get('idUser')
    result = mainController.readAppointment(idUser,cursor)
    print(result)
    return jsonify({
        'Result': result
    })

@app.route("/appointment",methods=['PUT'])
def updateAppointment():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    date = data['date']
    hour = data['hour']
    idCarUser = data['idCarUser']
    idUser = data['idUser']
    idService = data['idService']
    id = data['idAppointment']
    appointment = Appointment(id=id,date=date,hour=hour,idCarUser=idCarUser,idUser=idUser,idService=idService)
    result = mainController.updateAppointment(appointment,cursor,connection)
    return jsonify({
        'Result': result
    })

@app.route("/appointment",methods=['DELETE'])
def deleteAppointment():
    cursor = connection.cursor(dictionary=True)
    data = request.get_json()
    id = data['idAppointment']
    appointment = Appointment(id=id)
    result = mainController.deleteAppointment(appointment,cursor,connection)
    return jsonify({
        'Result': result
    })

@app.route("/appointmentID",methods=['GET'])
def getAppointmentId():
    date = request.args.get('date')
    hour = request.args.get('hour')
    idUser = request.args.get('idUser')
    result = mainController.getAppointmentId(date,hour,idUser,cursor)
    print(result)
    return jsonify({
        'Result': result
    })

@app.route("/appointmentAdmin",methods=['GET'])
def readAppointmentAdmin():
    result = mainController.readAppointmentAdmin(cursor)
    print(result)
    return jsonify({
        'Result': result
    })

@app.route("/appointmentForm",methods=['GET'])
def readAppointmentForm():
    idUser = request.args.get('idUser')
    result = mainController.readAppointmentForm(idUser,cursor)
    print(result)
    return jsonify({
        'Result': result
    })
    
#favorite
@app.route("/favorites",methods=['POST'])
def addFavorite():
    data = request.get_json()
    idUser = data['idUser']
    idProduct = data['idProduct']
    status = data['status']
    #print('hola')
    favorite = Favorite(idUser=idUser,idProduct=idProduct, status=status)
    result = mainController.addFavorite(favorite,connection,cursor)
    
    return jsonify({
        'Result': result
    })

@app.route("/favorites",methods=['GET'])
def readFavorite():
    idUser = int(request.args.get('idUser'))
    status = int(request.args.get('status'))
    
    favorite = Favorite(idUser=idUser, status=status)
    result = mainController.readFavorite(connection,favorite,cursor)
    #print(result)
    return jsonify({
        'Result': result
    })
@app.route("/favorites/<int:idUser>/<int:idProduct>/<int:status>",methods=['DELETE'])
def deleteFavorite(idUser,idProduct,status):
    favorite = Favorite(idUser=idUser,idProduct=idProduct, status=status)
    result = mainController.deleteFavorite(favorite,connection,cursor)
    return jsonify({
        'Result': result
    })

@app.route("/Userfavorites",methods=['GET'])
def getfavoritesPart():
    idUser = int(request.args.get('idUser'))
    status = int(request.args.get('status'))
    
    favorite = Favorite(idUser=idUser, status=status)
    result = mainController.getfavoritesPart(connection,favorite,cursor)
    #print(result)
    return jsonify({
        'Result': result
    })
if __name__ == "__main__":
    app.run(debug=True, port = 8080)