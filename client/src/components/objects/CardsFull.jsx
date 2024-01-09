import React from 'react';
import Card from './Card';

const cards = [
    { id: 1, name: "Repuesto name 1", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Dash", stock: "2 disponibles",brand: 'TOYOTA', bodyshape: "Sedan", version: "Japón",gen:'2', pic: ["https://autojapon.net/uploads/2023/12/1703361655_IMG_20231223_140046.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 2, name: "Repuesto name 2", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Dash", stock: "2 disponibles",brand: 'TOYOTA', bodyshape: "Sedan", version: "Japón",gen:'2', pic: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 3, name: "Repuesto name 3", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Dash", stock: "2 disponibles",brand: 'TOYOTA', bodyshape: "Sedan", version: "Japón",gen:'2', pic: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 4, name: "Repuesto name 4", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Dash", stock: "2 disponibles",brand: 'TOYOTA', bodyshape: "Sedan", version: "Japón",gen:'2', pic: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 5, name: "Repuesto name 5", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Dash", stock: "2 disponibles",brand: 'TOYOTA', bodyshape: "Sedan", version: "Japón",gen:'2', pic: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
]

function CardsFull() {
    //falta cambiar la paginacion
    return (
        <div>
        <div className="container d-flex justify-content-center align-items-center" >
            <div className='row'>{
                cards.map(card => (
                    <div className='col-md-6' key={card.id}>
                        <Card name={card.name} car={card.car} price={card.price} brand= {card.brand}  category={card.category} stock={card.stock} bodyshape={card.bodyshape} version={card.version} gen={card.gen}  pic={card.pic} />
                    </div>
                ))
            }
            </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center" >
        <nav aria-label="Page navigation example" >
            <ul className="pagination" >
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous" style={{ color: '#C80B16' }}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>

              
                <li className="page-item"><a className="page-link"style={{ color: '#C80B16' }} href="#">1</a></li>
                <li className="page-item"><a className="page-link" style={{ color: '#C80B16' }} href="#">2</a></li>
                <li className="page-item"><a className="page-link" style={{ color: '#C80B16' }} href="#">3</a></li>

                <li className="page-item">
                    <a className="page-link" style={{ color: '#C80B16' }} href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only" >Next</span >
                    </a>
                </li>
            </ul>
        </nav></div></div>

    );
}

export default CardsFull;
