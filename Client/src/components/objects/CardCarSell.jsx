import React from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, Button, Modal } from 'react-bootstrap';
import whatsapp from '../../assets/whatsapp.png';
import HeartButton from '../decoration/HeartButton';
import Divider from '../decoration/Divider';
import CarSellUpdateForm from '../forms/CarSellUpdateForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function CardCarSell({ id, name, year, price, transmission, plate, bodyshape, version, passangers, brand, pic, color, idBrand }) {

    const allProps = { id, name, year, price, transmission, plate, bodyshape, version, passangers, brand, pic, color, idBrand };

    const [showCarModal, setShowCarModal] = useState(false);

    const handleClose = () => {
        setShowCarModal(false);
    };

    const handleShowCarModal = () => setShowCarModal(true);

    const handleDelete = () => {
        if (window.confirm('¿Está seguro que desea eliminar este carro?')) {
            axios.delete(`http://localhost:8080/carSell/${id}`)
                .then(response => {
                    console.log(response);
                    if (response.status === 200) {
                        window.location.reload();
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
    };

    return (
        <div className="card mb-3 " style={{ cursor: "pointer", maxWidth: '100%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
            <div className="row g-0 ">
                <div className="col-md-6 " >
                    <Carousel style={{ boxSizing: 'content-box', objectFit: 'cover', height: '100%', alignItems: 'center' }}>
                        {pic.map((imagen, index) => {
                            return (
                                <CarouselItem key={`${id}-${index}`} >
                                    <img src={imagen} style={{ minWidth: '100%', maxHeight: '350px' }} className="d-block h-100" />
                                </CarouselItem>
                            );
                        })}
                    </Carousel>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title" style={{ color: '#000000' }}>{brand} {name} {year}</h5>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button onClick={handleDelete} className="btn" style={{ marginBottom: '2.5%', marginRight: '5%', color: 'red', backgroundColor: 'transparent', width: '5%', height: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faTrash} style={{ fontSize: '20px' }} />
                                </button>
                                <HeartButton />
                            </div>
                        </div>
                        <Divider />
                        <p className="card-text" style={{ marginBottom: '5%', color: '#C80B16' }}><strong>Precio: ₡{price}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Transmisión: {transmission}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Placa: {plate}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Body Shape: {bodyshape}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Versión: {version}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Pasajeros: {passangers}</strong></p>

                        <button type="button" onClick={handleShowCarModal} className="btn btn-danger" style={{ textAlign: 'center', backgroundColor: '#C80B16', width: '100%', height: '5%' }}>
                            Modificar
                        </button>

                        <Modal show={showCarModal} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                            <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}>
                            </Modal.Header>
                            <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                                <CarSellUpdateForm carSell={allProps} />
                            </Modal.Body>
                            <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                            </Modal.Footer>
                        </Modal>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCarSell;