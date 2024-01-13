import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import HeartButton from '../../decoration/HeartButton';
import Divider from '../../decoration/Divider';
import whatsapp from '../../../assets/whatsapp.png';
function CardPartUser({ id, name, car, price, category, stock, bodyshape, brand, version, gen, pic }) {
    
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

                        <button type="button" className="btn btn-danger" style={{ textAlign: 'left', backgroundColor: '#C80B16', width: '100%', height: '5%' }}>
                            <img src={whatsapp} style={{ height: 'auto%', width: 'auto', marginRight: '4%' }} alt="WhatsApp" />
                            Preguntar vía Whatsapp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPartUser;