import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, Button, Modal } from 'react-bootstrap';
import whatsapp from '../../../assets/whatsapp.png';
import HeartButton from '../../decoration/HeartButton';
import Divider from '../../decoration/Divider';
import CarSellUpdateForm from '../../forms/CarSellUpdateForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import UserProfile from '../../resources/UserProfile';
function CardCarSellUser({ refreshFavorites, Liked, id, name, year, price, transmission, plate, bodyshape, version, passangers, brand, pic, color, idBrand, refreshParent }) {

    const allProps = { id, name, year, price, transmission, plate, bodyshape, version, passangers, brand, pic, color, idBrand };

    const [showCarModal, setShowCarModal] = useState(false);
    const [isLiked, setIsLiked] = useState(Liked);

    const handleLikeClick = () => {
        if (UserProfile.getId() !== 0) {
            const newIsLiked = !isLiked;
            setIsLiked(newIsLiked);
            if (newIsLiked) {
                handleAddFavorite();
            } else {
                handleDeleteFavorite();
            }
        } else {
            alert("Debe iniciar sesión para realizar acciones");
        }
    };

    const handleAddFavorite = async () => {
        try {
            const response = await axios.post('http://localhost:8080/favorites', {
                idUser: UserProfile.getId(),
                idProduct: id,
                status: 2
            });
            if (response.status === 200) {
                refreshFavorites();
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    }

    const handleDeleteFavorite = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/favorites/${UserProfile.getId()}/${id}/${2}`)
            if (response.status === 200) {
                refreshFavorites();
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    }

    useEffect(() => {
        setIsLiked(Liked);
    }, [Liked]);

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
                                <HeartButton isLiked={isLiked} handleLikeClick={handleLikeClick} />
                            </div>
                        </div>
                        <Divider />
                        <p className="card-text" style={{ marginBottom: '5%', color: '#C80B16' }}><strong>Precio: ₡{price}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Transmisión: {transmission}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Placa: {plate}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Body Shape: {bodyshape}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Versión: {version}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Pasajeros: {passangers}</strong></p>

                        <button type="button" className="btn btn-danger" style={{ textAlign: 'center', backgroundColor: '#C80B16', width: '100%', height: '5%' }}>
                            <img src={whatsapp} style={{ height: 'auto%', width: 'auto', marginRight: '4%' }} alt="WhatsApp" />
                            Preguntar vía Whatsapp
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCarSellUser;