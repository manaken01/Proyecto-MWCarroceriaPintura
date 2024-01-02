import mysql.connector
from mysql.connector import Error
from model.CarPart import *

class adminCarPart:

    def createCarPart(CarPart,connection,cursor):
        try:
            sql = "INSERT INTO part (name, car, category, stock, bodyShape, version, generation, active, idBrand) VALUES (%s,%s,%s,%s,%s,%s,%s,1,%s)"
            val = (CarPart.name, CarPart.car, CarPart.category, CarPart.stock, CarPart.bodyShape, CarPart.version, CarPart.generation, CarPart.idBrand)
            cursor.execute(sql, val)
            connection.commit()
            
            print(cursor.rowcount, "record inserted.")

            # Fetch the last inserted ID
            last_inserted_id = cursor.lastrowid
            for a in CarPart.photos:
                
                sql = "INSERT INTO partphoto (photo, idPart) VALUES (%s,%s)"
                
                val = (a['base64'], last_inserted_id)
                cursor.execute(sql, val)
                connection.commit()
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    