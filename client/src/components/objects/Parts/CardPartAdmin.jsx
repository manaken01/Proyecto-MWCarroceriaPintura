import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import HeartButton from '../../decoration/HeartButton';
import Divider from '../../decoration/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PartsUpdateForm from '../../forms/PartsUpdateForm';
import axios from 'axios';
function CardPartAdmin({ id, name, car, price, category, stock, bodyshape, brand, version, gen, pic, idBrand, refreshParent }) {
    const allProps = {id,  name, car, price, category, stock, bodyshape, brand, version, gen, pic,idBrand };

    const [showPartModal, setshowPartModal] = useState(false);

    const handleClose = () => {
        setshowPartModal(false);
    };

    const handleshowPartModal = () => setshowPartModal(true);

    const handleDelete = () => {
        if (window.confirm('¿Está seguro que desea eliminar este repuesto?')) {
            axios.delete(`http://localhost:8080/carPart/${id}`)
                .then(response => {
                    console.log(response);
                    if (response.status === 200) {
                        refreshParent();
                        alert('Se ha eliminado el repuesto de forma correcta');
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
                                    <img src={imagen} alt={`Slide ${index + 1}`}  style={{ minWidth: '100%', maxHeight: '350px' }} className="d-block h-100" />
                                </CarouselItem>
                            );
                        })}
                    </Carousel>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title" style={{ color: '#000000' }}>{brand} {name}</h5>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button onClick={handleDelete} className="btn" style={{ marginBottom: '2.8%', marginRight: '5%', color: 'red', backgroundColor: 'transparent', width: '5%', height: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faTrash} style={{ fontSize: '20px' }} />
                                </button>
                                <HeartButton />
                            </div>
                        </div>
                        <Divider />
                        <p className="card-text" style={{ marginBottom: '2%', color: '#000000' }}><strong>Carro: {car}</strong></p>
                        <p className="card-text" style={{ marginBottom: '2%', color: '#C80B16' }}><strong>Precio: ₡</strong> {price}</p>
                        <p className="card-text" style={{ marginBottom: '2%', color: '#000000' }}><strong>Categoría: </strong>{category}</p>
                        <p className="card-text" style={{ marginBottom: '2%', color: '#000000' }}><strong>Stock: </strong>{stock}</p>
                        <p className="card-text" style={{ marginBottom: '2%', color: '#000000' }}><strong>Body Shape: </strong>{bodyshape}</p>
                        <p className="card-text" style={{ marginBottom: '2%', color: '#000000' }}><strong>Versión: </strong>{version}</p>
                        <p className="card-text" style={{ marginBottom: '3%', color: '#000000' }}><strong>Generación: </strong>{gen}</p>

                        <button type="button" onClick={handleshowPartModal} className="btn btn-danger" style={{ textAlign: 'center', backgroundColor: '#C80B16', width: '100%', height: '5%' }}>
                            Modificar
                        </button>
                        <Modal show={showPartModal} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                            <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}>
                            </Modal.Header>
                            <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                                <PartsUpdateForm carPart={allProps} refreshParent={refreshParent} closeForm={handleClose} pic={pic}/>
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

export default CardPartAdmin;