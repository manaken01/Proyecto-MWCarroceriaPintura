import mysql.connector
from mysql.connector import Error
from model.Brand import *

class adminBrand:
    """
    Function: create a brand in mysql
    Params:
    -nameBrand: object brand
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """
    def createBrand(brand,connection,cursor):
        try: 
            sql = "INSERT INTO brand (nameBrand, active) VALUES (%s, 1)"
            val = (brand.name,)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    """
    Function: read all brands
    Params:
    -cursor: cursor mysql
    Return: json
    """
    def readBrand(cursor):
        try: #recupera solo las activas
            sql = "SELECT * FROM brand WHERE active = 1" 
            cursor.execute(sql)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    """
    Function: delete a brand in mysql (set active to 0)
    Params:
    -brand: object brand
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """    
    def deleteBrand(brand, connection, cursor):
        try:
            sql = "UPDATE brand SET active = 0 WHERE idBrand = %s"
            val = (brand.idBrand,)
            cursor.execute(sql, val)
            connection.commit()
            print(cursor.rowcount, "record updated.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    """
    Function: update a brand in mysql
    Params:
    -brand: object brand
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """
    def updateBrand(brand, cursor, connection):
        try:
            sql = "UPDATE brand SET nameBrand = %s WHERE idBrand = %s"
            val = (brand.name, brand.idBrand)
            cursor.execute(sql, val)
            connection.commit()
            print(cursor.rowcount, "record updated.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
