import React from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, Button, Modal } from 'react-bootstrap';
import whatsapp from '../../../assets/whatsapp.png';
import HeartButton from '../../decoration/HeartButton';
import Divider from '../../decoration/Divider';
import UserUpdateForm from '../../forms/UserUpdateForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function CardUser({ name, email, phone, type, id, typeName ,refreshParent }) {

    const allProps = { name, email, phone, type, id };

    const [showUserModal, setShowUserModal] = useState(false);

    const handleClose = () => {
        setShowUserModal(false);
    };

    const handleShowUserModal = () => setShowUserModal(true);

    const handleDelete = async () => {
        if (window.confirm('¿Está seguro que desea eliminar este usuario?')) {
            try {
                const response = await axios.delete(`http://localhost:8080/user/${id}`)
                    console.log(response);
                    if (response.status === 200) {
                        refreshParent();
                    }
                } catch (error) {
                    console.error('Error al realizar la solicitud:', error);
                }
        }
    };

    return (
        <div className="card mb-3 " style={{ cursor: "pointer", maxWidth: '100%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
            <div className="row g-0 ">
                <div className="col-md-16">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title" style={{ color: '#000000' }}>{name}</h5>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button onClick={handleDelete} className="btn" style={{ marginBottom: '2.8%', marginRight: '5%', color: 'red', backgroundColor: 'transparent', width: '5%', height: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faTrash} style={{ fontSize: '20px' }} />
                                </button>
                            </div>
                        </div>
                        <Divider />
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Correo: {email}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Teléfono: {phone}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Tipo: {typeName}</strong></p>

                        <button type="button" onClick={handleShowUserModal} className="btn btn-danger" style={{ textAlign: 'center', backgroundColor: '#C80B16', width: '100%', height: '5%' }}>
                            Modificar
                        </button>

                        <Modal show={showUserModal} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                            <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}>
                            </Modal.Header>
                            <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                                <UserUpdateForm user={allProps} refreshParent={refreshParent} closeForm={handleClose}   />
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

export default CardUser;