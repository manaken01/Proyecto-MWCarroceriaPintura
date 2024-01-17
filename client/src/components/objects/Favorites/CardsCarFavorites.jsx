import React from 'react';
import CardCarSellUser from '../CarSell/CardCarSellUser';
/**
 * Group of carSells that are favorites.
 * @param {*} 
 * refreshFavorites: Function to update the list of favorites
 * cards: list of favorite carSells from database
 * @returns component
 */
const CardsCarFavorites = ({refreshFavorites,cards}) => {
    
    return (
        <div>
        <div className="container flex justify-content-center align-items-center" >
            <div className='row'>{
                cards.map(card => {
                    
                    return (
                        <div className='col-md-6' key={card.carSell.idCarSell}>
                            <CardCarSellUser 
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
                                Liked={true}
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

export default CardsCarFavorites;
