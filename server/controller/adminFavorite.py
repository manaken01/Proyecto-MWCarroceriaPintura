import mysql.connector
from mysql.connector import Error
from model.Favorite import *

class adminFavorite:
    """
    Function: add a favoritepart or favoritecar in mysql
    Params:
    -favorite: object favorite
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """
    def addFavorite(favorite,connection,cursor):
        try: 
            sql = ''
            if (favorite.status == 1):
                sql = "INSERT INTO favoritepart (idUser, idPart) VALUES (%s, %s)"
            else:    
                sql = "INSERT INTO favoritecar (idUser, idCarSell) VALUES (%s, %s)"

            val = (favorite.idUser,favorite.idProduct)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
            
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    """
    Function: get all favoritepart or favoritecar in mysql
    Params:
    -favorite: object favorite
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """  
    def readFavorite(connection,favorite,cursor):
        try:
            
            sql = ''
            if (favorite.status == 1):
                sql = "SELECT * FROM favoritepart WHERE idUser = %s"
            else:    
                sql = "SELECT * FROM favoritecar WHERE idUser = %s"
            val = (favorite.idUser,)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            print("Executed")
            connection.commit()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    """
    Function: delete a favoritepart or favoritecar in mysql
    Params:
    -favorite: object favorite
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """  
    def deleteFavorite(favorite,connection,cursor):
        try:
            sql = ''
            if (favorite.status == 1):
                sql = "DELETE FROM favoritepart WHERE idUser = %s AND idPart = %s"
            else:    
                sql = "DELETE FROM favoritecar WHERE idUser = %s AND idCarSell = %s"

            val = (favorite.idUser,favorite.idProduct)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record(s) deleted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    """
    Function: get all part or carSell that got a favorite in mysql, also get the photos
    Params:
    -favorite: object favorite
    -connection: connection mysql
    -cursor: cursor mysql
    Return: json
    """
    def getfavoritesPart(connection,favorite, cursor):
        try:
            sql = ''
            if (favorite.status == 1):
                sql = "SELECT * FROM favoritepart INNER JOIN part ON favoritepart.idPart = part.idPart INNER JOIN brand ON part.idBrand = brand.idBrand INNER JOIN partphoto ON part.idPart = partphoto.idPart WHERE part.active = 1 and favoritepart.idUser = %s"
                val = (favorite.idUser,)
                cursor.execute(sql,val)
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
            else:    
                sql = "SELECT * FROM favoritecar INNER JOIN carSell ON favoritecar.idCarSell = carSell.idCarSell INNER JOIN brand ON carSell.idBrand = brand.idBrand INNER JOIN carPhoto ON carSell.idCarSell = carPhoto.idCarSell WHERE carSell.active = 1 and favoritecar.idUser = %s"
                val = (favorite.idUser,)
                cursor.execute(sql,val)
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
            return False
        