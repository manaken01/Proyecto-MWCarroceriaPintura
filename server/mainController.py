from controller.adminBrand import *
from controller.adminUser import *
from model.Brand import *

class mainController:

    def createBrand(brand,connection,cursor):
        return (adminBrand.createBrand(brand,connection,cursor))
    
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
    
    def getUserNames(userName,cursor):
        return (adminUser.getUserNames(userName,cursor))
        