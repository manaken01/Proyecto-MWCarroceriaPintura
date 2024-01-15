import mysql.connector
from mysql.connector import Error
from model.CarPart import *

class adminCarPart:

    def createCarPart(CarPart,connection,cursor):
        try:
            sql = "INSERT INTO part (name, car,price, category, stock, bodyShape, version, generation, active, idBrand) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,1,%s)"
            val = (CarPart.name, CarPart.car,CarPart.price, CarPart.category, CarPart.stock, CarPart.bodyShape, CarPart.version, CarPart.generation, CarPart.idBrand)
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
        
    def deleteCarPart(CarPart,connection,cursor):
        try:
            sql = "UPDATE part SET active = 0 WHERE idPart = %s"
            val = (CarPart.idCarPart,)
            cursor.execute(sql, val)
            connection.commit()
            
            print(cursor.rowcount, "record(s) deleted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        
    def getCarPart(connection, cursor):
        try:
            sql = "SELECT * FROM part INNER JOIN brand ON part.idBrand = brand.idBrand INNER JOIN partphoto ON part.idPart = partphoto.idPart WHERE part.active = 1"
            cursor.execute(sql)
            result = cursor.fetchall()
            parts = {}
            if result is not None:
                for row in result:

                    if row['idPart'] not in parts:
                        parts[row['idPart']] = {
                            'parts': {key: value for key, value in row.items() if key != 'photo'},
                            'photos': []
                        }

                    if 'photo' in row and isinstance(row['photo'], bytes):
                        # Decode bytes (BLOB) to string
                        base64_string = row['photo'].decode('utf-8')
                        parts[row['idPart']]['photos'].append(base64_string)

                parts = list(parts.values())
                connection.commit()
                return parts
            else:
                return None
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return None
    def updateCarPart(CarPart,connection,cursor):
        try:
            sql = "UPDATE part SET name = %s, car = %s, price = %s, category = %s, stock = %s, bodyShape = %s, version = %s, generation = %s, active = %s, idBrand = %s WHERE idPart = %s"
            val = (CarPart.name, CarPart.car,CarPart.price, CarPart.category, CarPart.stock, CarPart.bodyShape, CarPart.version, CarPart.generation, 1, CarPart.idBrand, CarPart.idCarPart)
            cursor.execute(sql, val)
            connection.commit()
            
            print(cursor.rowcount, "record(s) affected")
            if CarPart.photos != []:
                sql = "DELETE FROM partphoto WHERE idPart = %s"
                val = (CarPart.idCarPart,)
                cursor.execute(sql, val)
                connection.commit()
                for photo in CarPart.photos:
                    sql = "INSERT INTO partphoto (photo, idPart) VALUES (%s, %s)"
                    val = (photo['base64'], CarPart.idCarPart)
                    cursor.execute(sql, val)
                    connection.commit()
            
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        