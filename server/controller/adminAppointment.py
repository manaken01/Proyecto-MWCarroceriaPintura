import mysql.connector
from mysql.connector import Error
from model.Appointment import *
from datetime import datetime

class adminAppointment:

    def createAppointment(appointment,connection,cursor):
        try: 
            sql = "INSERT INTO appointment (date, hour, active, idCarUser, User_idUser, idService) VALUES (%s, %s, %s, %s, %s,%s)"
            print("FECHA:"+str(appointment.date))
            # Convertir el string a un objeto datetime
            date_obj = datetime.strptime(appointment.date, "%d/%m/%Y")
            val = (date_obj,appointment.hour,1,appointment.idCarUser,appointment.idUser, appointment.idService)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record inserted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def readAppointment(idUser, cursor):
        try: #recupera solo las del usuario
            sql = "SELECT appointment.idAppointment, appointment.date, appointment.hour, service.service, carUser.licensePlate FROM ((appointment INNER JOIN service  ON appointment.idService = service.idService)  INNER JOIN carUser ON appointment.idCarUser = carUser.idCarUser) WHERE appointment.date >= %s and appointment.User_idUser = %s and appointment.active = 1" 
            now = datetime.now()
            formatted_date = now.strftime('%Y-%m-%d')
            print(formatted_date)
            val = (formatted_date,idUser)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def updateAppointment(appointment, cursor,connection):
        try: #recupera solo las del usuario
            sql = "UPDATE appointment SET date = %s, hour = %s, idCarUser =%s, idService WHERE User_idUser = %s and idAppointment = %s" 
            val = (appointment.date,appointment.hour,appointment.idCarUser,appointment.idService,appointment.idUser, appointment.id)
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
        