import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem } from 'react-bootstrap';
import whatsapp from '../assets/whatsapp.png';
import HeartButton from './decoration/HeartButton';
import Divider from './decoration/Divider';

function Card({ nombre, carro, precio, categoria, stock, bodyshape, version, imagenes }) {
    return (
        <div className="card mb-3 " style={{ maxWidth: '100%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
            <div className="row g-0 ">
                <div className="col-md-6 " > 
                    <Carousel style={{ boxSizing: 'content-box', objectFit: 'cover', height: '100%' , alignItems: 'center'}}>
                        {imagenes.map((imagen, index) => (
                            <CarouselItem key={index} >
                                <img src={imagen} alt={`Slide ${index + 1}`} style={{minWidth: '100%',maxHeight:'350px'}}class="d-block h-100"  />
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title" style={{ color: '#000000' }}>{nombre}</h5>
                            <HeartButton />
                        </div>
                        <Divider />
                        <p className="card-text"><strong>Carro: {carro}(B15)</strong></p>
                        <p className="card-text" style={{ marginBottom: '0', color: '#C80B16' }}><strong>Precio: </strong> {precio}</p>
                        <p className="card-text" style={{ marginBottom: '0', color: '#000000' }}><strong>Categoría: </strong>{categoria}</p>
                        <p className="card-text" style={{ marginBottom: '0', color: '#000000' }}><strong>Stock: </strong>{stock}</p>
                        <p className="card-text" style={{ marginBottom: '0', color: '#000000' }}><strong>Body Shape: </strong>{bodyshape}</p>
                        <p className="card-text" style={{ marginBottom: '0', color: '#000000' }}><strong>Versión: </strong>{version}</p>
                        <p className="card-text"><strong>Generación: </strong> 2</p>

                        <button type="button" className="btn btn-danger" style={{ textAlign: 'left', backgroundColor: '#C80B16', width: '100%', height: '5%' }}>
                            <img src={whatsapp} style={{ height: '95%', width: '10%', marginRight: '4%' }} alt="WhatsApp" />
                            Preguntar vía Whatsapp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;