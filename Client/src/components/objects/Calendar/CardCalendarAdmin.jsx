import React from 'react';
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppointmentFormModified from '../../forms/AppointmentFormModified';
import axios from 'axios';
import UserProfile from '../../resources/UserProfile';

/**
 * Each card of an appointment admin
 * @param {*} 
 * date: date of the appointment
 * hour: hour of the appointment
 * reason: service of the appointment
 * car: brand of the car user of the appointment
 * appointmentID: id of the appointment
 * @returns component
 */
function CardCalendarAdmin({date,hour,reason,car,appointmentID}) {
    const formattedDate = new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric',timeZone: 'UTC' });

    const handleAppointmentDelete = async () => {
        const confirmDelete = window.confirm("¿Seguro que deseas eliminar esta cita?");
        if (confirmDelete) {

            const getData = async () => {
                try {
                    const response = await axios.delete('http://localhost:8080/appointment', {
                        data: {
                            idAppointment: appointmentID
                        }
                    });
                 
                    alert('Se ha eliminado la cita de forma correcta');
                    if (response.status === 200) {
                        window.location.reload();
                    }

                } catch (error) {
                    console.error('Error al realizar la solicitud:', error);
                }
            };

            getData();

        } else {
            alert('La cita no ha sido eliminada');
        }
    }

    return (

        <div className="list-group list-group-flush border-bottom scrollarea">
            <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1" style={{marginRight:'1%'}}>Hora: {hour}</strong>
                    <strong>{formattedDate}</strong>
                </div>
                <div className="col-10 mb-1 ">Razón: {reason}</div>
                <div className="col-10 mb-1 "><strong>Carro: {car}</strong></div>
                <button type="button" className="btn btn-danger" onClick={handleAppointmentDelete} style={{ backgroundColor: '#C80B16' }}>Eliminar</button>
            </a>
        </div>
    );
}


export default CardCalendarAdmin;