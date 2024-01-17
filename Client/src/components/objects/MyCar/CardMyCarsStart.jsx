import React from 'react';
import CardMyCars from './CardMyCars';

/**
 * Component to start the carUsers of an User
 * @param {*} 
 * carUsers: Json of all carUsers of and user
 * filters: filters of the carUser
 * search: search a specific car
 * @returns component
 */
function CardMyCarsStart ({carsUsers,filters, search}) {

    const filteredCards = carsUsers.filter(card =>
        (filters[0] === 'Seleccione' || card.nameBrand.toUpperCase() === filters[0]) &&
        (filters[1] === 'Seleccione' || parseInt(card.year,10) >= parseInt(filters[1],10)) &&

        (( search && (card.licensePlate.toLowerCase().includes(search.toLowerCase()) ||
            card.year.toLowerCase().includes(search.toLowerCase())
        ))

            || (search === undefined || search === ''))
    );

    return (
        <div className="container flex justify-content-center align-items-center" >
            <div className='row'>{
                filteredCards.map((carData, index) => (
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
