import mysql.connector
from mysql.connector import Error
from model.Appointment import *
from datetime import datetime

class adminAppointment:

    def createAppointment(appointment,connection,cursor):
        try: 
            sql = "INSERT INTO appointment (date, hour, active, idCarUser, User_idUser, idService) VALUES (%s, %s, %s, %s, %s,%s)"
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
            sql = "SELECT appointment.idAppointment, appointment.date, appointment.hour, service.service, carUser.licensePlate FROM ((appointment INNER JOIN service  ON appointment.idService = service.idService)  INNER JOIN carUser ON appointment.idCarUser = carUser.idCarUser) WHERE DATE(appointment.date) >= %s and appointment.User_idUser = %s and appointment.active = 1 ORDER BY appointment.date ASC;" 
            now = datetime.now()
            formatted_date = now.strftime('%Y-%m-%d')
            val = (formatted_date,idUser)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def readAppointmentAdmin(cursor):
        try: #recupera solo las del usuario
            sql = "SELECT appointment.idAppointment, appointment.date, appointment.hour, service.service, carUser.licensePlate FROM ((appointment INNER JOIN service  ON appointment.idService = service.idService)  INNER JOIN carUser ON appointment.idCarUser = carUser.idCarUser) WHERE DATE(appointment.date) >= %s and appointment.active = 1 ORDER BY appointment.date ASC;" 
            now = datetime.now()
            formatted_date = now.strftime('%Y-%m-%d')
            val = (formatted_date,)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def readAppointmentForm(idUser, cursor):
        try: #recupera solo las del usuario
            sql = "SELECT 'CarUser' AS tipo, idCarUser, licensePlate FROM carUser WHERE User_idUser = %s AND active = 1 UNION SELECT 'Service' AS active, idService, service FROM service WHERE active = 1;"
            val = (idUser,)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    
    def updateAppointment(appointment, cursor,connection):
        try: #recupera solo las del usuario
            sql = "UPDATE appointment SET hour = %s, idCarUser =%s, idService = %s WHERE User_idUser = %s and idAppointment = %s" 
            val = (appointment.hour,appointment.idCarUser,appointment.idService,appointment.idUser, appointment.id)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record updated.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
    def deleteAppointment(appointment, cursor,connection):
        try: #recupera solo las del usuario
            sql = "UPDATE appointment SET active = %s WHERE idAppointment = %s" 
            val = (0,appointment.id)
            cursor.execute(sql,val)
            connection.commit()
            print(cursor.rowcount, "record deleted.")
            return True
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
        
    def getAppointmentId(date,hour,idUser, cursor):
        try: #recupera solo las del usuario
            sql = "SELECT * FROM appointment WHERE DATE(date) >= %s and hour = %s" 
            print(date)
            now = datetime.now()
            formatted_date = now.strftime('%Y-%m-%d')
            val = (formatted_date,hour)
            cursor.execute(sql,val)
            result = cursor.fetchall()
            return result
        except mysql.connector.Error as error:
            print("Failed to execute stored procedure: {}".format(error))
            return False
    
        