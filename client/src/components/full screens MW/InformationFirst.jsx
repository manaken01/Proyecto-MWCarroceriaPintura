import React from 'react';
import car from '../../assets/informationCar.png';

function InformationFirst() {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#C80B16',
                padding: '4em',
                maxWidth: '100%',
            }}>
                <div style={{ 
                    fontSize: '5em', 
                    fontWeight: '600', 
                    color: '#FAFAFA',
                    textAlign: 'center',
                    marginBottom: '0em'
                }}>
                    ¿Quiénes somos?
                </div>
            </div>
            <div class="card mb-3" style={{ maxWidth: '100%', backgroundColor: "transparent", boxShadow: "none", marginTop: '3%', border: 'none'}}>
                <div class="row g-0">
                    <div class="col-md-6 order-md-2"> {/* En dispositivos medianos, la imagen está a la derecha */}
                        <img src={car} style={{
                            objectFit: 'cover',
                            height: '100%'
                        }} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-6 order-md-1"> {/* En dispositivos medianos, el texto está a la izquierda */}
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="card-title" style={{fontSize: '2.6em', fontWeight: '500', color: '#000000'}}>{'Bienvenido a MW carrocería y pintura'}</h5>
                            </div>
                            <p class="card-text" style={{fontSize: '1.9em', fontWeight: '400', color: '#000000', marginTop: '4%'}}>MW carrocería y pintura 
                            es un centro de reparación y venta de repuestos de diferentes marcas de automóviles, creado para ofrecer el mejor servicio y 
                            precios para nuestros distintos clientes y ser el número 1 en el país.</p>
                            <p class="card-text" style={{fontSize: '1.9em', fontWeight: '400', color: '#000000', marginTop: '4%'}}>En MW
                             carrocería y pintura encontrarás los repuestos de mejor calidad en todo el país, además de servicio de 
                             mantenimiento personal que se podrá agendar mediante citas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformationFirst;
