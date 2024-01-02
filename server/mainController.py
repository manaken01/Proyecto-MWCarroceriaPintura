from controller.adminBrand import *
from controller.adminUser import *
from model.Brand import *
from controller.adminCarPart import *

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
        return (adminUser.logIn(email,cursor))
    
    def getEmails(cellphone,cursor):
        return (adminUser.getEmails(cellphone,cursor))

    def getCellphones(cellphone,cursor):
        return (adminUser.getCellphones(cellphone,cursor))
        