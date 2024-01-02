import mysql.connector
from mysql.connector import Error
from model.User import *
from model.UserType import *

class adminUser:

    def registerUser(user,connection,cursor):
        try: 
            sql = "INSERT INTO user (username, email, password, cellphone, active, idUserType) VALUES (%s, %s)"
            val = (user.userName, user.email, user.password, user.cellphone, user.active, user.userType)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def getUserTypes(cursor):
        try: 
            sql = "Select * FROM userType"
            cursor.execute(sql)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        