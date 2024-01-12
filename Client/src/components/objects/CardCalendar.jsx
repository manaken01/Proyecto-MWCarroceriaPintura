import React from 'react';
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppointmentFormModified from '../forms/AppointmentFormModified';
import axios from 'axios';
import UserProfile from '../resources/UserProfile';

function CardCalendar({date,hour,reason,car}) {
    const [show, setShow] = useState(false);
    const formattedDate = new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric',timeZone: 'UTC' });
    const formattedDateForm = new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'numeric', day: 'numeric',timeZone: 'UTC' });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAppointmentDelete = async () => {
        const confirmDelete = window.confirm("¿Seguro que deseas eliminar esta cita?");
        if (confirmDelete) {

            const getAppointmentId = async () => {
                try {
    
                    const response = await axios.get('http://localhost:8080/appointmentID', {
                        params: {
                            date: formattedDateForm,
                            hour: hour,
                            idUser: UserProfile.getId()
                        }
                    });
                    return response.data
                } catch (error) {
                    console.error('Error al realizar la solicitud:', error);
                }
            };

            const [appointmentID] = await Promise.all([
                getAppointmentId(),
            ]);

            const getData = async () => {
                try {
                    const response = await axios.delete('http://localhost:8080/appointment', {
                        data: {
                            idAppointment: appointmentID.Result[0].idAppointment,
                            idUser: UserProfile.getId()
                        }
                    });
                 
                    alert('Se ha eliminado la cita de forma correcta');

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

        <div class="list-group list-group-flush border-bottom scrollarea">
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                <div class="d-flex w-100 align-items-center justify-content-between">
                    <strong class="mb-1" style={{marginRight:'1%'}}>Hora: {hour}</strong>
                    <strong>{formattedDate}</strong>
                </div>
                <div class="col-10 mb-1 ">Razón: {reason}</div>
                <div class="col-10 mb-1 "><strong>Carro: {car}</strong></div>
                <button type="button" className="btn btn-danger" onClick={handleShow} style={{backgroundColor: '#C80B16' }}>Modificar</button>
                <button type="button" className="btn btn-danger" onClick={handleAppointmentDelete} style={{  marginLeft:'25%',backgroundColor: '#C80B16' }}>Eliminar</button>
            </a>
            <Modal show={show} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}> 
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                    <AppointmentFormModified date={date} hourM={hour}/>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default CardCalendar;