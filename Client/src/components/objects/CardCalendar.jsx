import React from 'react';
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from '../decoration/Divider';
import MyCarFormModified from '../forms/MyCarFormModified';
import esLocale from '@fullcalendar/core/locales/es';
import { formatDate } from '@fullcalendar/core';

function CardCalendar({date,hour,reason,car,plate}) {
    const [show, setShow] = useState(false);
    console.log(date)
    const formattedDate = new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <button type="button" className="btn btn-danger" style={{  marginLeft:'25%',backgroundColor: '#C80B16' }}>Eliminar</button>
            </a>
            <Modal show={show} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}> 
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                    <MyCarFormModified initialPlate={plate}/>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default CardCalendar;