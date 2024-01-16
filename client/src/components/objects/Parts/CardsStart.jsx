import React from 'react';
import Card from './CardPartUser';
import { useState, useEffect     } from 'react'
import axios from 'axios';
import UserProfile from '../../resources/UserProfile';
function CardsStart() {
    const [cards, setCards] = useState([]);
    const [favorites, setFavorites] = useState([]);


  const handleResults = async () => {
    try {
      const response = await axios.get('http://localhost:8080/carPart');
      if(response.data.Result === undefined || response.data.Result === null ) return;
      setCards(response.data.Result);
        
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };
    

  const handleFavorites = async () => {
    if (UserProfile.getId() !== 0) {
      try {
        const response = await axios.get('http://localhost:8080/favorites', {
          params: {
            idUser: UserProfile.getId(),
            status: 1
          }
        });
        if(response.data.Result === undefined || response.data.Result === null ) return;
        const fav = [...new Set(response.data.Result.map(item => item.idPart))];
        setFavorites(fav);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    } else {
      setFavorites([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleResults();
      await handleFavorites();
    };
  
    fetchData();
  }, []);
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
