import React from 'react';
import CardCarSellAdmin from './CardCarSellAdmin';

/**
 * Display of cards for car sell for admin
 * @param {*} 
 * refreshFavorites: function to refresh favorites
 * favorites: favorites of the user
 * cards: cards to display
 * filters: filters to apply
 * search: search to apply
 * refreshParent: function to refresh the parent component
 * @returns 
 */

const CardsCarAdmin = ({refreshFavorites, favorites,cards, filters, search, refreshParent}) => {
    const filteredCards = cards ? cards.filter(card =>
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
        ) : [];

    return (
        <div>
        <div className="container flex justify-content-center align-items-center" >
            <div className='row'>{
                filteredCards.map(card => {
                    var isLiked = favorites.includes(card.carSell.idCarSell);
                    return (
                        <div className='col-md-6' key={card.carSell.idCarSell}>
                            <CardCarSellAdmin 
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
                                Liked={isLiked}
                                refreshFavorites={refreshFavorites} 
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

export default CardsCarAdmin;
