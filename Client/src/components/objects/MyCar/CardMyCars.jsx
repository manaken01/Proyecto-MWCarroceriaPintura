import React from 'react';
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from '../../decoration/Divider';
import MyCarFormModified from '../../forms/MyCarFormModified';
import axios from 'axios';
import UserProfile from '../../resources/UserProfile';

function CardMyCars({idCarUser,car,year,plate}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleMyCarsDelete = async () => {
        const confirmDelete = window.confirm("¿Seguro que deseas eliminar este carro?");
        if (confirmDelete) {


            const getData = async () => {
                try {
                    const response = await axios.delete('http://localhost:8080/carUser', {
                        data: {
                            id: idCarUser,
                            idUser: UserProfile.getId()
                        }
                    });
                 
                    alert('Se ha eliminado el carro de forma correcta');

                } catch (error) {
                    console.error('Error al realizar la solicitud:', error);
                }
            };

            getData();

        } else {
            alert('La marca no ha sido eliminada');
        }
    }
    
    return (
    <div>
        <div className="card mb-3" style={{ maxWidth: '100%'}}>
            <div className="row g-0">
                <div className="col-md-12">
                    <div className="card-body" style={{textAlign: 'center'}}>
                        <p className="card-text" style={{ fontSize: '1.1em', marginBottom: '0', color: '#000000'}}><strong>{car}</strong></p>
                        <Divider/>
                        <p className="card-text" style={{ fontSize: '1.1em', marginBottom: '0', marginTop: '5%', color: '#000000' }}><strong>Año: {year}</strong></p>
                        <p className="card-text" style={{ fontSize: '1.1em', marginBottom: '0', marginTop: '5%', color: '#000000' }}><strong>Placa: {plate}</strong></p>
                        <button type="button" className="btn btn-danger" onClick={handleShow} style={{ marginTop: '5%', backgroundColor: '#C80B16' }}>Modificar</button>
                        <button type="button" className="btn btn-danger" onClick={handleMyCarsDelete} style={{ marginTop: '5%', marginLeft: '21%', backgroundColor: '#C80B16' }}>Eliminar</button>
                    </div>
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
            </div>
        </div>
    </div>
    ) 
}


export default CardMyCars;