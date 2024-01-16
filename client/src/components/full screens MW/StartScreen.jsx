import Navbar from '../objects/Navbar';
import Brands from '../objects/Brand/Brands';
import CardsStart from '../objects/Parts/CardsStart';
import Reviews from '../objects/Review/ReviewsStart';
import Divider from '../decoration/Divider'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect     } from 'react'
import axios from 'axios';
import UserProfile from '../resources/UserProfile';

function StartScreen() {
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState([]);

  const handleReviews = async () => {
    try {
        const response = await axios.get('http://localhost:8080/review');
        if(response.data.Result === undefined || response.data.Result === null ) return;
        setReviews(response.data.Result);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
  };

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
      await handleReviews();
      await handleResults();
      await handleFavorites();
    };
  
    fetchData();
  }, []);
  return (
    <div>
      <Navbar/>
      <div className="col-12 d-flex justify-content-center" style={{ paddingTop:'80px', paddingBottom: '3%'}}>
                    <h1>Buscar repuestos por las mejores marcas</h1>
                </div>
      <Brands/>
      <Divider />
      <div className="col-12 d-flex justify-content-center" style={{ padding: '3%'}}>
                    <h1>Opiniones destacadas</h1>
                </div>
      <Reviews reviews={reviews} handleReviews={handleReviews}/>

      <Divider />
      <div className="col-12 d-flex justify-content-center" style={{ padding: '3%'}}>
                    <h1>Repuestos destacados</h1>
                </div>
      <CardsStart cards={cards} favorites={favorites} handleFavorites={handleFavorites}/>
      
    </div>
  );
}

export default StartScreen
