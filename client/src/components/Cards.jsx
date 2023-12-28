import React from 'react';
import Card from './Card';

const cards = [
    { id: 1, nombre: "Repuesto nombre 1", carro: "NISSAN SENTRA 2000-2006 (B15)", precio: "₡ 40000", categoria: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón", imagenes:["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 2, nombre: "Repuesto nombre 2", carro: "NISSAN SENTRA 2000-2006 (B15)", precio: "₡ 40000", categoria: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón" , imagenes:["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 3, nombre: "Repuesto nombre 3", carro: "NISSAN SENTRA 2000-2006 (B15)", precio: "₡ 40000", categoria: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón" , imagenes:["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 4, nombre: "Repuesto nombre 4", carro: "NISSAN SENTRA 2000-2006 (B15)", precio: "₡ 40000", categoria: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón" , imagenes:["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 5, nombre: "Repuesto nombre 5", carro: "NISSAN SENTRA 2000-2006 (B15)", precio: "₡ 40000", categoria: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón" , imagenes:["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
]
function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center" >
            <div className='row'>{
                cards.map(card => (
                    <div className='col-md-6' key={card.id}>
                        <Card nombre={card.nombre} carro={card.carro} precio={card.precio} categoria={card.categoria} stock={card.stock} bodyshape={card.bodyshape} version={card.version} imagenes ={card.imagenes}/>
                    </div>
                ))
            }
            </div>

        </div>
    );
}

export default Cards;
