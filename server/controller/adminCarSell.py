import mysql.connector
from mysql.connector import Error
from model.CarSell import *
import base64

class AdminCarSell:

    """
    Function: Add a car in mysql
    Params:
    -carSell: object carsell
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """
    def createCarSell(carSell, connection, cursor):
        try:
            sql = "INSERT INTO carSell (year, color, transmission, licensePlate, bodyShape, version, passangers, model, price, active, idBrand) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            val = (carSell.year, carSell.color, carSell.transmission, carSell.plate, carSell.bodyShape, carSell.version, carSell.passengers, carSell.model, carSell.price, 1 , carSell.idBrand)
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


    """
    Function: Get all cars in mysql
    Params:
    -connection: connection mysql
    -cursor: cursor mysql
    Return: List of cars
    """
    def getCarSell(connection, cursor):
        try:
            sql = "SELECT * FROM carSell INNER JOIN brand ON carSell.idBrand = brand.idBrand INNER JOIN carPhoto ON carSell.idCarSell = carPhoto.idCarSell WHERE carSell.active = 1"
            cursor.execute(sql)
            result = cursor.fetchall()
            cars = {}
            if result is not None:
                for row in result:

                    if row['idCarSell'] not in cars:
                        cars[row['idCarSell']] = {
                            'carSell': {key: value for key, value in row.items() if key != 'photo'},
                            'photos': []
                        }

                    if 'photo' in row and isinstance(row['photo'], bytes):
                        # Decode bytes (BLOB) to string
                        base64_string = row['photo'].decode('utf-8')
                        cars[row['idCarSell']]['photos'].append(base64_string)

                cars = list(cars.values())

                return cars
            else:
                return None
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return None
    

    """
    Function: update a car in mysql by id
    Params:
    -carSell: object carsell
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """
    def updateCarSell(carSell, connection, cursor):
        try:
            sql = "UPDATE carSell SET year = %s, color = %s, transmission = %s, licensePlate = %s, bodyShape = %s, version = %s, passangers = %s, model = %s, price = %s, active = %s, idBrand = %s WHERE idCarSell = %s"
            val = (carSell.year, carSell.color, carSell.transmission, carSell.plate, carSell.bodyShape, carSell.version, carSell.passengers, carSell.model, carSell.price, 1, carSell.idBrand, carSell.idCarSell)
            cursor.execute(sql, val)
            connection.commit()
            
            print(cursor.rowcount, "record(s) updated.")

            # Fetch the last inserted ID
            #print(carSell.photos)

            if carSell.photos != []:
                sql = "DELETE FROM carPhoto WHERE idCarSell = %s"
                val = (carSell.idCarSell,)
                cursor.execute(sql, val)
                connection.commit()
                for photo in carSell.photos:
                    sql = "INSERT INTO carPhoto (photo, idCarSell) VALUES (%s, %s)"
                    val = (photo['base64'], carSell.idCarSell)
                    cursor.execute(sql, val)
                    connection.commit()
            
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False

    """
    Function: delete a car in mysql by id
    Params:
    -idCarSell: id car
    -connection: connection mysql
    -cursor: cursor mysql
    """
    def deleteCarSell(idCarSell, connection, cursor):
        try:
            sql = "UPDATE carSell SET active = 0 WHERE idCarSell = %s"
            val = (idCarSell,)
            cursor.execute(sql, val)
            connection.commit()
            
            print(cursor.rowcount, "record(s) deleted.")
            
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False