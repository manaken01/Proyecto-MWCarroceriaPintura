import React from 'react';
import Card from './CardPartUser';
/**
 * Group of last 4 parts.
 * @param {*} 
 * cards: list of all parts from database
 * handleFavorites: Function to update the list of favorites
 * favorites: list of all favorites from database
 * @returns component
 */
function CardsStart({handleFavorites, cards, favorites}) {
    
    return (
        <div>
        <div className="container flex justify-content-center align-items-center" >
            <div className='row'>{
                cards.slice(-4).map(card => {
                  var isLiked = favorites.includes(card.parts.idPart);
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
                        pic={card.photos} 
                        refreshFavorites={handleFavorites} 
                        Liked = {isLiked} />
                    </div>
                );
            })
            }
            </div>
        </div>

        </div>

    );
}

export default CardsStart;
