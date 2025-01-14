import mysql.connector
from mysql.connector import Error
from model.CarUser import *

class adminCarUser:

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
    
    def readCarUser(idUser, cursor):
        try: #recupera solo las del usuario
            sql = "SELECT * FROM carUser WHERE User_idUser = %s and active = 1" 
            val = (idUser,)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def updateCarUser(carUser, cursor,connection):
        try: #recupera solo las del usuario
            sql = "UPDATE carUser SET year = %s, licensePlate = %s, idBrand =%s WHERE User_idUser = %s and idCarUser = %s" 
            val = (carUser.year,carUser.licensePlate,carUser.idBrand,carUser.idUser,carUser.id)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record updated.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
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
        