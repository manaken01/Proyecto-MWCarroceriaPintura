import mysql.connector
from mysql.connector import Error
from model.UserType import *
import json 

class adminUserType:
    def getUserTypes(connection,cursor):
        try: 
            cursor = connection.cursor(dictionary=True)
            sql = "Select * FROM userType"
            cursor.execute(sql)
            result = cursor.fetchall()
            cursor.close()
            cursor = connection.cursor(dictionary=True)
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False