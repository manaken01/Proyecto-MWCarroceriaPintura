import React from 'react';
import car from '../assets/informationCar.png';

function InformationSecond() {
    return (
        <div>
            <div style={{ 
                    fontSize: '2.3em', 
                    fontWeight: '600', 
                    color: '#000000',
                    textAlign: 'center',
                    marginBottom: '0em',
                    marginTop: '2.5%'
                }}>
                    ¿Por que elegirnos?
                </div>
            <div className="container d-flex justify-content-center align-items-center" style={{marginTop: '2%'}}>
                <div className="row">
                    {/* Primera Carta */}
                    <div className="col-md-6">
                        <div className="card mb-3" style={{ maxWidth: '100%', backgroundColor: "transparent", boxShadow: "none", border: 'none' }}>
                            <div className="row g-0">
                                <div className="col-md-12">
                                    <img src={car} style={{ objectFit: 'cover', height: '100%' }} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: '1.5em', fontWeight: '500', color: '#000000' }}>Precio mas bajo garantizado</h5>
                                        <p className="card-text" style={{ fontSize: '1.3em', fontWeight: '400', color: '#000000' }}>
                                            En MW carroceria y pintura nos comprometemos a ofrecer los precios mas bajos en Costa Rica en materia de repuestos,
                                            si hay algún precio más alto nos hace ver y le damos un descuento.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Segunda Carta */}
                    <div className="col-md-6">
                        <div className="card mb-3" style={{ maxWidth: '100%', backgroundColor: "transparent", boxShadow: "none", border: 'none' }}>
                            <div className="row g-0">
                                <div className="col-md-12">
                                    <img src={car} style={{ objectFit: 'cover', height: '100%' }} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: '1.5em', fontWeight: '500', color: '#000000' }}>1 año de garantia</h5>
                                        <p className="card-text" style={{ fontSize: '1.3em', fontWeight: '400', color: '#000000' }}>
                                        Se ofrece garantia de 1 año a cualquier producto siexiste algun desperfecto de fábrica.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tercera Carta */}
                    <div className="col-md-6 mb-4 mx-auto" style={{marginTop: '-2%'}} >
                        <div className="card mb-3" style={{ maxWidth: '100%', backgroundColor: "transparent", boxShadow: "none", border: 'none' }}>
                            <div className="row g-0">
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: '1.5em', fontWeight: '500', color: '#000000' }}>Repuestos de alta calidad</h5>
                                        <p className="card-text" style={{ fontSize: '1.3em', fontWeight: '400', color: '#000000' }}>
                                        Todos los repuestos son de alta calidad, con apenas uso y comprobados al 100% de que estan en buen estado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformationSecond;
