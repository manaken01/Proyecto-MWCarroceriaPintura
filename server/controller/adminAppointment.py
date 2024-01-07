import mysql.connector
from mysql.connector import Error
from model.Appointment import *

class adminAppointment:

    def createAppointment(appointment,connection,cursor):
        try: 
            sql = "INSERT INTO appointment (start, finish, active, idCarUser, User_idUser, idService) VALUES (%s, %s, %s, %s, %s,%s)"
            val = (appointment.start,appointment.finish,1,appointment.idCarUser,appointment.idUser, appointment.idService)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def readAppointment(idUser, cursor):
        try: #recupera solo las del usuario
            sql = "SELECT * FROM appointment WHERE User_idUser = %s and active = 1" 
            val = (idUser,)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def updateAppointment(appointment, cursor,connection):
        try: #recupera solo las del usuario
            sql = "UPDATE appointment SET start = %s, finish = %s, idCarUser =%s, idService WHERE User_idUser = %s and idAppointment = %s" 
            val = (appointment.start,appointment.finish,appointment.idCarUser,appointment.idService,appointment.idUser, appointment.id)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record updated.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def deleteAppointment(appointment, cursor,connection):
        try: #recupera solo las del usuario
            sql = "UPDATE appointment SET active = %s WHERE User_idUser = %s and idAppointment = %s" 
            val = (0,appointment.idUser,appointment.id)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record deleted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        