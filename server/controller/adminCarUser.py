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
        try: #recupera solo las activas
            sql = "SELECT * FROM carUser WHERE User_idUser = %s" 
            val = (idUser,)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        