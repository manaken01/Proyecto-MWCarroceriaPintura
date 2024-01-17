import React from 'react';
import InformationFirst from './InformationFirst';
import InformationSecond from './InformationSecond';
import Contact from './Contact';
import Divider from '../decoration/Divider';
import Reviews from '../objects/Review/ReviewsFull';
import { useState, useEffect     } from 'react';
import axios from 'axios';

/**
 * Display of all information
 * @param {*} 
 * @returns component
 */
function Information() {
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
  useEffect(() => {
    const fetchData = async () => {
      await handleReviews();
    };
  
    fetchData();
  }, []);
    return (
        <div>
            <InformationFirst/>
            <Divider/>
            <InformationSecond/>
            <Divider/>
            <div style={{ 
                    fontSize: '2.3em', 
                    fontWeight: '600', 
                    color: '#000000',
                    textAlign: 'center',
                    marginBottom: '2%',
                    marginTop: '2.5%'
                }}>
                    Todas nuestras reseñas
                </div>
            <Reviews reviews={reviews} handleReviews={handleReviews}/>
            <Divider/>
            <Contact/>
        </div>
    )
};

export default Information;