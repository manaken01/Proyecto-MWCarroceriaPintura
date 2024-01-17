import mysql.connector
from mysql.connector import Error
from model.Service import *

class adminService:

    """
    Function: create a service in mysql
    Params:
    -service: object service
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """
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
    
    """
    Function: read of the services in mysql
    Params:
    -cursor: cursor mysql
    Return: json
    """
    async def readServices(cursor):
        try: #recupera solo las del usuario
            sql = "SELECT * FROM service WHERE active = 1" 
            cursor.execute(sql)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    """
    Function: update a service in mysql
    Params:
    -service: object service
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """
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
    
    """
    Function: delete a service in mysql
    Params:
    -service: object service
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """
    def deleteService(idService, cursor,connection):
        try: #recupera solo las del usuario
            sql = "UPDATE service SET active = %s WHERE idService = %s"
            val = (0,idService)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record deleted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        