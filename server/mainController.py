from controller.adminBrand import *
from model.Brand import *

class mainController:
    #Brand
    def createBrand(brand,connection,cursor):
        return (adminBrand.createBrand(brand,connection,cursor))
    
    def readBrand(brand,connection,cursor):
        return (adminBrand.readBrand(connection,cursor))
        