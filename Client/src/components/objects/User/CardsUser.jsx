import React, { useState, useEffect } from 'react';
import CardUser from './CardUser';
import axios from 'axios';

/**
 * Display of all the cards of the users
 * @param {*} 
 * cards: array of cards
 * search: string to search
 * refreshParent: function to refresh the parent component
 * @returns 
 */

const CardsUser = ({ cards, search, refreshParent }) => {
    const filteredCards = cards.filter(card =>

        ((search && (card.Username.toLowerCase().includes(search.toLowerCase()) || 
        card.email.toLowerCase().includes(search.toLowerCase()) || 
        card.name.toLowerCase().includes(search.toLowerCase()) || 
        card.cellphone.toLowerCase().includes(search.toLowerCase()))) 

        || (search === undefined || search === ''))
    );

    return (
        <div>
            <div className="container flex justify-content-center align-items-center" >
                <div className='row'>{
                    filteredCards.map(card => {
                        return (
                            <div className='col-md-6' key={card.idUser}>
                                <CardUser
                                    id={card.idUser}
                                    name={card.Username}
                                    email={card.email}
                                    phone={card.cellphone}
                                    type={card.idUserType}
                                    typeName = {card.name}
                                    refreshParent={refreshParent}
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

export default CardsUser;
