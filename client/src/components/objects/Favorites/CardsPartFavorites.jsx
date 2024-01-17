import React from 'react';
import Card from '../Parts/CardPartUser';


/**
 * Group of parts that are favorites.
 * @param {*} 
 * refreshFavorites: Function to update the list of favorites
 * cards: list of favorite parts from database
 * @returns component
 */
function CardsPartUser({ refreshFavorites, cards}) {
    
    return (
        <div>
            <div className="container flex justify-content-center align-items-center" >
                <div className='row'>{
                    cards.map(card => {
                        
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
                                    Liked={true}
                                    refreshFavorites={refreshFavorites} />
                            </div>
                        );
                    })
                }
                </div>
            </div>

        </div>

    );
}

export default CardsPartUser;