import mysql.connector
from mysql.connector import Error
from model.CarSell import *

class AdminCarSell:

    def createCarSell(carSell, connection, cursor):
        try:
            sql = "INSERT INTO carSell (year, color, transmission, licensePlate, bodyShape, version, passangers, model, price, active, idBrand) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            val = (carSell.year, carSell.color, carSell.transmission, carSell.plate, carSell.bodyShape, carSell.version, carSell.passengers, carSell.model, carSell.price, 1, carSell.idBrand)
            cursor.execute(sql, val)
            connection.commit()
            
            print(cursor.rowcount, "record inserted.")

            # Fetch the last inserted ID
            lastInsertedId = cursor.lastrowid
            for photo in carSell.photos:
                sql = "INSERT INTO carPhoto (photo, idCarSell) VALUES (%s, %s)"
                val = (photo['base64'], lastInsertedId)
                cursor.execute(sql, val)
                connection.commit()
                
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False

    def readCarSell(carSellId, connection, cursor):
        try:
            sql = "SELECT * FROM carSell WHERE idCarSell = %s"
            val = (carSellId,)
            cursor.execute(sql, val)
            result = cursor.fetchone()
            
            if result is not None:
                carSell = CarSell(result[0], result[1], result[2], result[3], result[4], result[5], result[6], result[7], result[8], result[9], result[10])
                return carSell
            else:
                return None
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return None

    def updateCarSell(carSell, connection, cursor):
        try:
            sql = "UPDATE carSell SET year = %s, color = %s, transmission = %s, licensePlate = %s, bodyShape = %s, version = %s, passangers = %s, model = %s, price = %s, active = %s, idBrand = %s WHERE idCarSell = %s"
            val = (carSell.year, carSell.color, carSell.transmission, carSell.plate, carSell.bodyShape, carSell.version, carSell.passengers, carSell.model, carSell.price, 1, carSell.idBrand, carSell.idCarSell)
            cursor.execute(sql, val)
            connection.commit()
            
            print(cursor.rowcount, "record(s) updated.")
            
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False

    def deleteCarSell(carSellId, connection, cursor):
        try:
            sql = "DELETE FROM carSell WHERE idCarSell = %s"
            val = (carSellId,)
            cursor.execute(sql, val)
            connection.commit()
            
            print(cursor.rowcount, "record(s) deleted.")
            
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False