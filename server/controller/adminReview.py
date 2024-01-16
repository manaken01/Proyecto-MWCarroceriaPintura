import mysql.connector
from mysql.connector import Error
from model.Review import *

class adminReview:
    def addReview(review,connection,cursor):
        try: 
            sql = "INSERT INTO review (idUser, comment, stars, date) VALUES (%s, %s, %s, %s)"
            val = (review.idUser,review.comment,review.stars,review.date)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
            
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False