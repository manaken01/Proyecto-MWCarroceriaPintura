import React from 'react';
import Card from './CardPartUser';
import { useState, useEffect     } from 'react'
import axios from 'axios';
function CardsStart() {
    const [cards, setCards] = useState([]);
    const handleResults = async () => {
        try {
          axios.get('http://localhost:8080/carPart')
            .then(response => {
                setCards(response.data.Result);
            })
        } catch (error) {
          console.error('Error al realizar la solicitud:', error);
        }
      };
      
      useEffect(() => {
        handleResults();
      }, []);
    return (
        <div>
        <div className="container flex justify-content-center align-items-center" >
            <div className='row'>{
                cards.slice(-4).map(card => {
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
                        pic={card.photos} />
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
