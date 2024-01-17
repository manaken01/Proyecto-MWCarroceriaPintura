import React from 'react';
import Card from './CardPartUser';

/**
 * Group of parts. Also filter the cards by the filters and search bar
 * @param {*} 
 * refreshFavorites: Function to update the list of favorites
 * favorites: list of all favorites from database
 * cards: list of all parts from database
 * filters: list of selectec filters
 * search: input of the search bar
 * @returns component
 */

function CardsPartUser({ refreshFavorites, favorites, cards, filters, search }) {
    const filteredCards = cards ? cards.filter(card =>
        (filters[0] === 'Seleccione' || card.parts.nameBrand === filters[0]) &&
        (filters[1] === 'Seleccione' || card.parts.car === filters[1]) &&
        (filters[2] === 'Seleccione' || card.parts.category === filters[2]) &&
        (filters[3] === 'Seleccione' || card.parts.name === filters[3]) &&

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
    ) : [];
    return (
        <div>
            <div className="container flex justify-content-center align-items-center" >
                <div className='row'>{
                    filteredCards.map(card => {
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
                                    Liked={isLiked}
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
