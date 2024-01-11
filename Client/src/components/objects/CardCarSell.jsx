import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem } from 'react-bootstrap';
import whatsapp from '../../assets/whatsapp.png';
import HeartButton from '../decoration/HeartButton';
import Divider from '../decoration/Divider';

function CardCarSell({ id, name, year, price, transmission, plate, bodyshape, version, passangers, brand, pic }) {
    return (
        <div className="card mb-3 " style={{cursor: "pointer", maxWidth: '100%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
            <div className="row g-0 ">
                <div className="col-md-6 " > 
                    <Carousel style={{ boxSizing: 'content-box', objectFit: 'cover', height: '100%' , alignItems: 'center'}}>
                        {pic.map((imagen, index) => (
                            <CarouselItem key={index} >
                                <img src={imagen} alt={`Slide ${index + 1}`} style={{minWidth: '100%',maxHeight:'350px'}}className="d-block h-100"  />
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title" style={{ color: '#000000' }}>{name} {year}</h5>
                            <HeartButton />
                        </div>
                        <Divider />
                        <p className="card-text" style={{ marginBottom: '5%', color: '#C80B16' }}><strong>Precio: {price}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Transmisión: {transmission}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Placa: {plate}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Body Shape: {bodyshape}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Versión: {version}</strong></p>
                        <p className="card-text" style={{ marginBottom: '5%', color: '#000000' }}><strong>Pasajeros: {passangers}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCarSell;