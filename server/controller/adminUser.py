import mysql.connector
from mysql.connector import Error
from model.User import *
from model.UserType import *
import json 

class adminUser:

    def registerUser(user,connection,cursor):
        try: 
            sql = "INSERT INTO user (username, email, password, cellphone, active, idUserType) VALUES (%s, %s, %s, %s, %s, %s)"
            val = (user.userName, user.email, user.password, user.cellphone, user.active, 2)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        
    def logIn(email,password,cursor):
        try: 
            sql = "Select * FROM user WHERE email = %s AND password = %s"
            val = (email,password)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            if len(result) == 0:
                return 0
            print(result)
            return {"email":result[0]['email'],"Username":result[0]['Username'],"idUser":result[0]['idUser'],"userType":result[0]['idUserType']}
        
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    async def getEmails(email,cursor):
        try: 
            sql = "Select * FROM user WHERE email = %s"
            val = (email,)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            print(result)
            if len(result) != 0:
                return False
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    async def getCellphones(cellphone,cursor):
        try: 
            sql = "Select * FROM user WHERE cellphone = %s"
            val = (cellphone)
            cursor.execute(sql,(val,))
            result = cursor.fetchall()
            print(result)
            if len(result) != 0:
                return False
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    async def getUserNames(userName,cursor):
        try: 
            sql = "Select * FROM user WHERE userName = %s"
            val = (userName)
            cursor.execute(sql,(val,))
            result = cursor.fetchall()
            print(result)
            if len(result) != 0:
                return False
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        
    def getUsers(connection, cursor):
        try: 
            cursor = connection.cursor(dictionary=True)
            sql = "Select * FROM user INNER JOIN userType ON user.idUserType = userType.idUserType WHERE active = 1"
            cursor.execute(sql)
            result = cursor.fetchall()
            cursor.close()
            cursor = connection.cursor(dictionary=True)
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False

    def updateUser(user, connection, cursor):
        try:
            sql = "UPDATE user SET userName = %s, email = %s, cellphone = %s, idUserType = %s WHERE idUser = %s"
            val = (user.userName, user.email, user.cellphone, user.userType, user.idUser)
            cursor.execute(sql, val)
            connection.commit()
            
            print(cursor.rowcount, "record(s) updated.")
            
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False

    def deleteUser(idUser, connection, cursor):
        try:
            sql = "UPDATE user SET active = 0 WHERE idUser = %s"
            val = (idUser,)
            cursor.execute(sql, val)
            connection.commit()
            
            print(cursor.rowcount, "record(s) deleted.")
            
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False