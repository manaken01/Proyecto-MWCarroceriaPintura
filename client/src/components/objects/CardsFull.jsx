import React from 'react';
import Card from './Card';

const cards = [
    { id: 1, nombre: "Repuesto nombre 1", carro: "NISSAN SENTRA 2000-2006 (B15)", precio: "₡ 40000", categoria: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón", imagenes: ["https://autojapon.net/uploads/2023/12/1703361655_IMG_20231223_140046.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 2, nombre: "Repuesto nombre 2", carro: "NISSAN SENTRA 2000-2006 (B15)", precio: "₡ 40000", categoria: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón", imagenes: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 3, nombre: "Repuesto nombre 3", carro: "NISSAN SENTRA 2000-2006 (B15)", precio: "₡ 40000", categoria: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón", imagenes: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 4, nombre: "Repuesto nombre 4", carro: "NISSAN SENTRA 2000-2006 (B15)", precio: "₡ 40000", categoria: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón", imagenes: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 5, nombre: "Repuesto nombre 5", carro: "NISSAN SENTRA 2000-2006 (B15)", precio: "₡ 40000", categoria: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón", imagenes: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
]

function CardsFull() {
    //falta cambiar la paginacion
    return (
        <div>
        <div className="container d-flex justify-content-center align-items-center" >
            <div className='row'>{
                cards.map(card => (
                    <div className='col-md-6' key={card.id}>
                        <Card nombre={card.nombre} carro={card.carro} precio={card.precio} categoria={card.categoria} stock={card.stock} bodyshape={card.bodyshape} version={card.version} imagenes={card.imagenes} />
                    </div>
                ))
            }
            </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center" >
        <nav aria-label="Page navigation example" >
            <ul class="pagination" >
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" style={{ color: '#C80B16' }}>
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>

              
                <li class="page-item"><a class="page-link"style={{ color: '#C80B16' }} href="#">1</a></li>
                <li class="page-item"><a class="page-link" style={{ color: '#C80B16' }} href="#">2</a></li>
                <li class="page-item"><a class="page-link" style={{ color: '#C80B16' }} href="#">3</a></li>

                <li class="page-item">
                    <a class="page-link" style={{ color: '#C80B16' }} href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only" >Next</span >
                    </a>
                </li>
            </ul>
        </nav></div></div>

    );
}

export default CardsFull;
