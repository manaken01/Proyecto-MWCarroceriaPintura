import mysql.connector
from mysql.connector import Error
from model.Service import *

class adminService:

    def createService(service,connection,cursor):
        try: 
            sql = "INSERT INTO service (service, active) VALUES (%s, %s)"
            val = (service.service,1)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def readServices(cursor):
        try: #recupera solo las del usuario
            sql = "SELECT * FROM service WHERE active = 1" 
            cursor.execute(sql)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def updateService(service, cursor,connection):
        try: #recupera solo las del usuario
            sql = "UPDATE service SET service = %s WHERE idService = %s" 
            val = (service.service,service.id)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record updated.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def deleteService(service, cursor,connection):
        try: #recupera solo las del usuario
            sql = "UPDATE service SET active = %s WHERE idService = %s"
            val = (0,service.id)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record deleted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        