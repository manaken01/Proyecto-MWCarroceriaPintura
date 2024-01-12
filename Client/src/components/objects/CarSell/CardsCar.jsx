import React, { useState, useEffect } from 'react';
import CardCarSell from './CardCarSell';
import axios from 'axios';

const CardsCar = ({cards, filters, search, refreshParent}) => {
    console.log(cards);
    const filteredCards = cards.filter(card => 
        (filters[0] === 'Seleccione' || card.carSell.nameBrand === filters[0]) &&
        (filters[1] === 'Seleccione' || card.carSell.year === filters[1]) &&
        (filters[2] === 'Seleccione' || card.carSell.bodyShape === filters[2]) &&
        (filters[3] === 'Seleccione' || card.carSell.transmission === filters[3])&&
        
        ((search && (card.carSell.model.toLowerCase().includes(search.toLowerCase()) ||
        card.carSell.year.toLowerCase().includes(search.toLowerCase()) ||
        card.carSell.price.toString().includes(search.toLowerCase()) ||
        card.carSell.transmission.toLowerCase().includes(search.toLowerCase()) ||
        card.carSell.bodyShape.toLowerCase().includes(search.toLowerCase()) ||
        card.carSell.version.toLowerCase().includes(search.toLowerCase()) ||
        card.carSell.nameBrand.toLowerCase().includes(search.toLowerCase()) ||
        card.carSell.color.toLowerCase().includes(search.toLowerCase())))
    
        || (search === undefined || search === ''))
    );

    return (
        <div>
        <div className="container flex justify-content-center align-items-center" >
            <div className='row'>{
                filteredCards.map(card => {
                    return (
                        <div className='col-md-6' key={card.carSell.idCarSell}>
                            <CardCarSell 
                                id={card.carSell.idCarSell}
                                name={card.carSell.model} 
                                year={card.carSell.year} 
                                price={card.carSell.price} 
                                transmission={card.carSell.transmission} 
                                plate={card.carSell.licensePlate} 
                                bodyshape={card.carSell.bodyShape} 
                                version={card.carSell.version} 
                                passangers={card.carSell.passangers} 
                                brand={card.carSell.nameBrand} 
                                idBrand={card.carSell.idBrand}
                                color = {card.carSell.color}
                                pic={card.photos} 
                                refreshParent={refreshParent}
                            />
                        </div>
                    );
                })
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

export default CardsCar;
