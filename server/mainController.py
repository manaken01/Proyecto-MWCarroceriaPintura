from controller.adminBrand import *
from model.Brand import *

class mainController:
    def createBrand(brand,connection,cursor):
        return (adminBrand.createBrand(brand,connection,cursor))
        