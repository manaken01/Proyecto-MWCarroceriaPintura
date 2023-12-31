import React from 'react';
import Card from './Card';

const cards = [
    { id: 1, name: "Repuesto name 1", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón", pic: ["https://autojapon.net/uploads/2023/12/1703361655_IMG_20231223_140046.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 2, name: "Repuesto name 2", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón", pic: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 3, name: "Repuesto name 3", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón", pic: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
    { id: 4, name: "Repuesto name 4", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Dash", stock: "2 disponibles", bodyshape: "Sedan", version: "Japón", pic: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
]

function CardsStart() {
    //falta cambiar la paginacion
    return (
        <div>
        <div className="container d-flex justify-content-center align-items-center" >
            <div className='row'>{
                cards.map(card => (
                    <div className='col-md-6' key={card.id}>
                        <Card name={card.name} car={card.car} price={card.price} category={card.category} stock={card.stock} bodyshape={card.bodyshape} version={card.version} pic={card.pic} />
                    </div>
                ))
            }
            </div>
        </div>
            </div>

    );
}

export default CardsStart;
