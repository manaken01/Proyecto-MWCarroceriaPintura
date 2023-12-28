import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import whatsapp from '../assets/whatsapp.png'
import HeartButton from './HeartButton';
import Divider from './Divider';

//set parapmetersd from function
function Card({nombre}) {
    console.log(nombre)
    return (
        <div class="card mb-3" style={{ maxWidth: '100%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px"}}>
            <div class="row g-0">
                <div class="col-md-6">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg" style={{
                        objectFit: 'cover',
                        height: '100%'
                    }} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                    <h5 class="card-title" style={{ color: '#000000' }}>{nombre}</h5>
                    <HeartButton />
                    
                </div>
                <Divider />
                        <p class="card-text" ><strong>Carro: NISSAN SENTRA 2000-2006 (B15)</strong></p>
                        <p class="card-text" style={{ marginBottom: '0', color: '#C80B16' }}><strong>Precio: </strong> ₡ 40000</p>
                        <p class="card-text" style={{ marginBottom: '0', color: '#000000' }}><strong>Categoría: </strong>Dash</p>
                        <p class="card-text" style={{ marginBottom: '0', color: '#000000' }}><strong>Stock: </strong>2 disponibles</p>
                        <p class="card-text" style={{ marginBottom: '0', color: '#000000' }}><strong>Body Shape: </strong>Sedan</p>
                        <p class="card-text" style={{ marginBottom: '0', color: '#000000' }}><strong>Versión: </strong>Japón</p>
                        <p class="card-text"><strong>Generación: </strong> 2</p>

                        <button type="button" class="btn btn-danger " style={{ textAlign: 'left', backgroundColor: '#C80B16', width: '100%', height: '5%' }}>

                            <img src={whatsapp} style={{ height: '95%', width: '10%', marginRight: '4%' }}></img>
                            Preguntar vía Whatsapp
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;

