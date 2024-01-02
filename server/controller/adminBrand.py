import mysql.connector
from mysql.connector import Error
from model.Brand import *

class adminBrand:

    def createBrand(brand,connection,cursor):
        try: 
            sql = "INSERT INTO brand (name, active) VALUES (%s, 1)"
            val = (brand.name)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def readBrand(connection,cursor):
        try: 
            sql = "SELECT * FROM brand WHERE active = 1"
            cursor.execute(sql)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        