import mysql.connector
from mysql.connector import Error
from model.User import *
from model.UserType import *
import smtplib
import random, string
import hashlib
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
            #print(result)
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
            #print(result)
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
            #print(result)
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
            if len(result) != 0:
                return False
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        
    def getUsers(connection, cursor):
        try: 
            sql = "Select * FROM user INNER JOIN userType ON user.idUserType = userType.idUserType WHERE active = 1"
            cursor.execute(sql)
            result = cursor.fetchall()
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
        
    def changePassword(oldPassword, newPassword, idUser, connection, cursor):
        try:
            sql = "SELECT * FROM user WHERE idUser = %s AND password = %s"
            val = (idUser, oldPassword)
            cursor.execute(sql, val)
            result = cursor.fetchall()
            if len(result) == 0:
                return False
            sql = "UPDATE user SET password = %s WHERE idUser = %s AND password = %s"
            val = (newPassword, idUser, oldPassword)
            cursor.execute(sql, val)
            connection.commit()
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        
    def resetPassword(email, connection, cursor):
        try:

            sql = "SELECT * FROM user WHERE email = %s"
            val = (email,)
            cursor.execute(sql, val)
            result = cursor.fetchall()
            if len(result) == 0:
                return False
            
            randomPassword = ''.join(random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(16))
            #print(randomPassword)
            smtp_server = 'smtp.gmail.com'
            smtp_port = 587
            smtp_username = 'rsismosmad@gmail.com'
            smtp_password = 'docr ewae ezhr simq'

            from_email = 'rsismosmad@gmail.com'
            to_email = email
            subject = 'MW Contraseña temporal.'
            body = 'La contraseña temporal es: ' + randomPassword

            message = f'Subject: {subject}\n\n{body}'
            message = message.encode('utf-8')

            with smtplib.SMTP(smtp_server, smtp_port) as smtp:
                smtp.starttls()
                smtp.login(smtp_username, smtp_password)
                smtp.sendmail(from_email, to_email, message)

            hashedPassword = hashlib.sha256(randomPassword.encode('utf-8')).hexdigest()
            sql = "UPDATE user SET password = %s WHERE email = %s"
            val = (hashedPassword, email)
            cursor.execute(sql, val)
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False    