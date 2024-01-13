import React, { useState, useEffect } from 'react';
import CardUser from './CardUser';
import axios from 'axios';

const CardsCar = ({ cards, filters, search, refreshParent }) => {
    const filteredCards = cards.filter(card =>

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
                                <CardUser
                                    id={card.idUser}
                                    name={card.userName}
                                    email={card.email}
                                    phone={card.cellphone}
                                    type={card.idUserType}
                                />
                            </div>
                        );
                    })
                }
                </div>
            </div>
        </div>

    );
}

export default CardsCar;
