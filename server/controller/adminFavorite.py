import mysql.connector
from mysql.connector import Error
from model.Favorite import *

class adminFavorite:
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
            print("Failed to execute stored procedurekkkkk: {}".format(error))
            return False
        
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
    