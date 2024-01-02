from controller.adminBrand import *
from controller.adminUser import *
from model.Brand import *

class mainController:

    def createBrand(brand,connection,cursor):
        return (adminBrand.createBrand(brand,connection,cursor))
    
    def getUserTypes(cursor):
        return (adminUser.getUserTypes(cursor))
        