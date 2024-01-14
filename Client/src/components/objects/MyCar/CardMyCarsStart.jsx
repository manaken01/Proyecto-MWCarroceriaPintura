import React from 'react';
import CardMyCars from './CardMyCars';
import axios from 'axios';
import UserProfile from '../../resources/UserProfile';
import { useState, useEffect} from 'react';

function CardMyCarsStart () {

    const [carsUsers, setCarsUsers] = useState([]);
    var [responseData, setResponse] = useState([]);

    const getCarUser = async () => {
        try {
            const response = await axios.get('http://localhost:8080/carUser', {
                    params: {
                        idUser: UserProfile.getId(),
                    }
            });
            setResponse(response.data.Result);
            return response.data.Result;
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            return []; // Return an empty array or handle the error gracefully
        }
    };

    const handleResults = async () => {
        try {
            const carsItems = await getCarUser();
            //console.log(dropdownItems); // Verify that dropdownItems contains the expected data
            setCarsUsers(carsItems);
            // Now you can use 'dropdowns' to populate your dropdown component or perform further processing
        } catch (error) {
            console.error('Error handling results:', error);
        }
    };

    useEffect(() => {
        handleResults();
    }, []);

    return (
        <div className="container flex justify-content-center align-items-center" >
            <div className='row'>{
                carsUsers.map((carData, index) => (
                    <div className='col-md-6' key={index}>
                        <CardMyCars idCarUser = {carData.idCarUser} car={carData.name} year={carData.year} plate={carData.licensePlate} />
                    </div>
                ))
            }
            </div>
        </div>
    )
    
}

export default CardMyCarsStart;
