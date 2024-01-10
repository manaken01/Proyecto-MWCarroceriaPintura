from controller.adminBrand import *
from controller.adminUser import *
from model.Brand import *
from controller.adminCarPart import *
from controller.adminCarUser import *
from controller.adminService import *
from controller.adminAppointment import *
from controller.adminCarSell import *

class mainController:
    #Brand
    def createBrand(brand,connection,cursor):
        return (adminBrand.createBrand(brand,connection,cursor))
    
    def readBrand(cursor):
        return (adminBrand.readBrand(cursor))
    
    def deleteBrand(brand, connection, cursor):
        return (adminBrand.deleteBrand(brand, connection, cursor))
    
    def updateBrand(brand, cursor, connection):
        return (adminBrand.updateBrand(brand, cursor, connection))

    #CarPart
    def createCarPart(CarPart,connection,cursor):
        return (adminCarPart.createCarPart(CarPart,connection,cursor))
    
    #CarSell
    def createCarSell(carSell,connection,cursor):
        return (AdminCarSell.createCarSell(carSell,connection,cursor))

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
    
    def updateCarUser(carUser,cursor,connection):
        return (adminCarUser.updateCarUser(carUser,cursor,connection))
    
    def deleteCarUser(carUser,cursor,connection):
        return (adminCarUser.deleteCarUser(carUser,cursor,connection))
    
    #services
    def createService(service,connection,cursor):
        return (adminService.createService(service,connection,cursor))
    
    def readServices(cursor):
        return (adminService.readServices(cursor))
    
    def updateService(service,cursor,connection):
        return (adminService.updateService(service,cursor,connection))
    
    def deleteService(service,cursor,connection):
        return (adminService.deleteService(service,cursor,connection))
    
    #appointment
    def createAppointment(appointment,connection,cursor):
        return (adminAppointment.createAppointment(appointment,connection,cursor))
    
    def readAppointment(idUser,cursor):
        return (adminAppointment.readAppointment(idUser,cursor))
    
    def updateAppointment(appointment,cursor,connection):
        return (adminAppointment.updateAppointment(appointment,cursor,connection))
    
    def deleteAppointment(appointment,cursor,connection):
        return (adminAppointment.deleteAppointment(appointment,cursor,connection))