import mysql.connector
from mysql.connector import Error
from model.Review import *

class adminReview:
    def addReview(review,connection,cursor):
        try: 
            sql = "INSERT INTO review (idUser, comment, stars, date, active) VALUES (%s, %s, %s, %s,1)"
            val = (review.idUser,review.comment,review.stars,review.date)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
            
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        
    def readReview(connection,cursor):
        try:
            sql = "SELECT * FROM review  INNER JOIN user ON review.idUser = user.idUser WHERE review.active = 1"
            cursor.execute(sql)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        
    def deleteReview(review,connection,cursor):
        try:
            sql = "UPDATE review SET active = 0 WHERE idReview = %s"
            val = (review.idReview,)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False