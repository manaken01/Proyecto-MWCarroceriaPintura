
import Card from './CardPartAdmin';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// const cards = [
//     { id: 1, name: "Repuesto name 1", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Dash", stock: "2 disponibles",brand: 'TOYOTA', bodyshape: "Sedan", version: "Japón",gen:'2', pic: ["https://autojapon.net/uploads/2023/12/1703361655_IMG_20231223_140046.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
//     { id: 2, name: "Repuesto name 2", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Bash", stock: "2 disponibles",brand: 'TOYOTA', bodyshape: "Sedan", version: "Japón",gen:'2', pic: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
//     { id: 3, name: "Repuesto name 3", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Dash", stock: "2 disponibles",brand: 'TOYOTA', bodyshape: "Sedan", version: "Japón",gen:'2', pic: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
//     { id: 4, name: "Repuesto name 4", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "Dash", stock: "2 disponibles",brand: 'TOYOTA', bodyshape: "Sedan", version: "Japón",gen:'2', pic: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
//     { id: 5, name: "Repuesto name 5", car: "NISSAN SENTRA 2000-2006 (B15)", price: "₡ 40000", category: "lik", stock: "2 disponibles",brand: 'TOYOTA', bodyshape: "Sedan", version: "Japón",gen:'2', pic: ["https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
// ]


function CardPartAdmin({cards,filters, search}) {
    

    const filteredCards = cards.filter(card => 
        (filters[0] === 'Seleccione' || card.parts.nameBrand === filters[0]) &&
        (filters[1] === 'Seleccione' || card.parts.car === filters[1]) &&
        (filters[2] === 'Seleccione' || card.parts.category === filters[2]) &&
        (filters[3] === 'Seleccione' || card.parts.name === filters[3])&&

        ((search && (card.parts.name.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.car.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.price.toString().includes(search.toLowerCase()) ||
        card.parts.category.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.car.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.nameBrand.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.bodyShape.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.version.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.generation.toLowerCase().includes(search.toLowerCase())))
    
        || (search === undefined || search === ''))
    );
    return (
        <div>
        <div className="container flex justify-content-center align-items-center" >
            <div className='row'>{
                filteredCards.map(card => {
                    return (
                        <div className='col-md-6' key={card.parts.idPart}>
                        <Card 
                        id={card.parts.idPart}
                        name={card.parts.name}
                        car={card.parts.car} 
                        price={card.parts.price} 
                        category={card.parts.category} 
                        stock={card.parts.stock} 
                        bodyshape={card.parts.bodyShape} 
                        brand={card.parts.nameBrand} 
                        version={card.parts.version} 
                        gen={card.parts.generation}  
                        idBrand={card.parts.idBrand}
                        pic={card.photos}  />
                    </div>
                );
            })
            }
            </div>
        </div>

        </div>

    );
}

export default CardPartAdmin;
