from controller.adminBrand import *
from controller.adminUser import *
from model.Brand import *
from controller.adminCarPart import *
from controller.adminCarUser import *

class mainController:
    #Brand
    def createBrand(brand,connection,cursor):
        return (adminBrand.createBrand(brand,connection,cursor))
    
    def readBrand(cursor):
        return (adminBrand.readBrand(cursor))
    
    #CarPart
    def createCarPart(CarPart,connection,cursor):
        return (adminCarPart.createCarPart(CarPart,connection,cursor))
    
    #User
    def createUser(user,connection,cursor):
        return (adminUser.registerUser(user,connection,cursor))
    
    def getUserTypes(cursor):
        return (adminUser.getUserTypes(cursor))
    
    def logIn(email,password,cursor):
        return (adminUser.logIn(email,password, cursor))
    
    async def getEmails(emails,cursor):
        return (await adminUser.getEmails(emails,cursor))

    async def getCellphones(cellphone,cursor):
        return (await adminUser.getCellphones(cellphone,cursor))
    
    async def getUserNames(userName,cursor):
        return (await adminUser.getUserNames(userName,cursor))
    
    #CarUser
    def createCarUser(carUser,connection,cursor):
        return (adminCarUser.createCarUser(carUser,connection,cursor))
    
    def readCarUser(idUser,cursor):
        return (adminCarUser.readCarUser(idUser,cursor))
        