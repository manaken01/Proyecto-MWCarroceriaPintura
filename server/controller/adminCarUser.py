import mysql.connector
from mysql.connector import Error
from model.CarUser import *

class adminCarUser:

    """
    Function: create a carUser in mysql
    Params:
    -carUser: object carUser
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """
    def createCarUser(carUser,connection,cursor):
        try: 
            sql = "INSERT INTO carUser (year, licensePlate, active, idBrand, User_idUser) VALUES (%s, %s, %s, %s, %s)"
            val = (carUser.year,carUser.licensePlate,1,carUser.idBrand,carUser.idUser)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    """
    Function: read all of carUser JOIN brand 
    Params:
    -idUser: id of user
    -cursor: cursor mysql
    Return: json
    """
    async def readCarUser(idUser, cursor):
        try: #recupera solo las del usuario
            sql = "SELECT carUser.idCarUser, carUser.year, carUser.licensePlate, brand.nameBrand FROM carUser INNER JOIN brand ON carUser.idBrand = brand.idBrand WHERE carUser.User_idUser = %s and carUser.active = 1" 
            val = (idUser,)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    """
    Function: update a carUser
    Params:
    -carUser: object carUser
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """
    def updateCarUser(carUser, cursor,connection):
        try: #recupera solo las del usuario
            sql = "UPDATE carUser SET year = %s, licensePlate = %s, idBrand = %s WHERE User_idUser = %s and idCarUser = %s" 
            val = (carUser.year,carUser.licensePlate,carUser.idBrand,carUser.idUser,carUser.id)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record updated.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    """
    Function: delete a carUser
    Params:
    -carUser: object carUser
    -cursor: cursor mysql
    -connection: connection mysql
    Return: Boolean
    """
    def deleteCarUser(carUser, cursor,connection):
        try: #recupera solo las del usuario
            sql = "UPDATE carUser SET active = %s WHERE User_idUser = %s and idCarUser = %s" 
            val = (0,carUser.idUser,carUser.id)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record deleted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    """
    Function: get a carUser based on a licensePlate
    Params:
    -licensePlate: licensePlate of an car
    -cursor: cursor mysql
    Return: Boolean
    """
    async def getPlate(licensePlate,cursor):
        try: 
            sql = "Select * FROM carUser WHERE licensePlate = %s"
            val = (licensePlate,)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            if len(result) != 0:
                return False
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    """
    Function: get a carUser based on a licensePlate
    Params:
    -licensePlate: licensePlate of an car
    -cursor: cursor mysql
    Return: Boolean
    """
    async def getPlateId(licensePlate,cursor):
        try: 
            sql = "Select * FROM carUser WHERE licensePlate = %s"
            val = (licensePlate,)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        
        
        