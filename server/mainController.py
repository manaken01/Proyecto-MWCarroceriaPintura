from controller.adminBrand import *
from controller.adminUser import *
from model.Brand import *
from controller.adminCarPart import *
from controller.adminCarUser import *
from controller.adminService import *
from controller.adminAppointment import *
from controller.adminCarSell import *
from controller.adminUserType import *

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
    
    def deleteCarPart(CarPart,connection,cursor):
        return (adminCarPart.deleteCarPart(CarPart,connection,cursor))
    
    def updateCarPart(CarPart,connection,cursor):
        return (adminCarPart.updateCarPart(CarPart,connection,cursor))
    
    def getCarPart(connection,cursor):
        return (adminCarPart.getCarPart(connection,cursor))

    def readCarPart(cursor):
        return (adminCarPart.readCarPart(cursor))
    
    #CarSell
    def createCarSell(carSell,connection,cursor):
        return (AdminCarSell.createCarSell(carSell,connection,cursor))
    
    def getCarSell(connection,cursor):
        return (AdminCarSell.getCarSell(connection,cursor))

    def updateCarSell(carSell,connection,cursor):
        return (AdminCarSell.updateCarSell(carSell,connection,cursor))
    
    def deleteCarSell(idCarSell,connection,cursor):
        return (AdminCarSell.deleteCarSell(idCarSell,connection,cursor))

    #User
    def getUsers(connection, cursor):
        return (adminUser.getUsers(connection, cursor))
    
    def deleteUser(idUser,connection,cursor):
        return (adminUser.deleteUser(idUser,connection,cursor))
    
    def updateUser(user,connection,cursor):
        return (adminUser.updateUser(user,connection,cursor))

    def createUser(user,connection,cursor):
        return (adminUser.registerUser(user,connection,cursor))
    
    def logIn(email,password,cursor):
        return (adminUser.logIn(email,password, cursor))
    
    async def getEmails(emails,cursor):
        return (await adminUser.getEmails(emails,cursor))

    async def getCellphones(cellphone,cursor):
        return (await adminUser.getCellphones(cellphone,cursor))
    
    async def getUserNames(userName,cursor):
        return (await adminUser.getUserNames(userName,cursor))
    
    #UserType

    def getUserTypes(connection,cursor):
        return (adminUserType.getUserTypes(connection,cursor))
    #CarUser
    def createCarUser(carUser,connection,cursor):
        return (adminCarUser.createCarUser(carUser,connection,cursor))
    
    async def readCarUser(idUser,cursor):
        return (await adminCarUser.readCarUser(idUser,cursor))
    
    def updateCarUser(carUser,cursor,connection):
        return (adminCarUser.updateCarUser(carUser,cursor,connection))
    
    def deleteCarUser(carUser,cursor,connection):
        return (adminCarUser.deleteCarUser(carUser,cursor,connection))

    async def getPlate(licensePlate,cursor):
        return (await adminCarUser.getPlate(licensePlate,cursor))

    async def getPlateId(licensePlate,cursor):
        return (await adminCarUser.getPlateId(licensePlate,cursor))
    
    #services
    def createService(service,connection,cursor):
        return (adminService.createService(service,connection,cursor))
    
    async def readServices(cursor):
        return (await adminService.readServices(cursor))
    
    def updateService(service,cursor,connection):
        return (adminService.updateService(service,cursor,connection))
    
    def deleteService(idService,cursor,connection):
        return (adminService.deleteService(idService,cursor,connection))
    
    #appointment
    def createAppointment(appointment,connection,cursor):
        return (adminAppointment.createAppointment(appointment,connection,cursor))
    
    def readAppointment(idUser,cursor):
        return (adminAppointment.readAppointment(idUser,cursor))
    
    def updateAppointment(appointment,cursor,connection):
        return (adminAppointment.updateAppointment(appointment,cursor,connection))
    
    def deleteAppointment(appointment,cursor,connection):
        return (adminAppointment.deleteAppointment(appointment,cursor,connection))
    
    def getAppointmentId(date,hour,idUser,cursor):
        return (adminAppointment.getAppointmentId(date,hour,idUser,cursor))