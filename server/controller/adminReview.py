import mysql.connector
from mysql.connector import Error
from model.Review import *

class adminReview:
    """
    Function: add a review in mysql
    Params:
    -review: object review
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """
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
    """
    Function: read all review
    Params:
    -connection: connection mysql
    -cursor: cursor mysql
    Return: json
    """
    def readReview(connection,cursor):
        try:
            sql = "SELECT * FROM review  INNER JOIN user ON review.idUser = user.idUser WHERE review.active = 1"
            cursor.execute(sql)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    """
    Function: delete a review in mysql (set active to 0)
    Params:
    -review: object review
    -connection: connection mysql
    -cursor: cursor mysql
    Return: Boolean
    """    
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