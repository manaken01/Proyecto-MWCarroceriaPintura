import React, { useState, useEffect } from 'react';
import CardCarSell from './CardCarSell';
import axios from 'axios';

const CardsCar = () => {
    const [cards, setCards] = useState([]);


    useEffect(() => {
        const getCars = () => {
            axios.get('http://localhost:8080/carSell')
                .then(response => {
                    setCards(response.data.Result);
                })
                .catch(error => {
                    console.log(error);
                });
        }

        getCars();
    }, []);
    //falta cambiar la paginacion
    return (
        <div>
        <div className="container d-flex justify-content-center align-items-center" >
            <div className='row'>{
                cards.map(card => {
                    return (
                        <div className='col-md-6' key={card.carSell.idCarSell}>
                            <CardCarSell 
                                id={card.carSell.idCarSell}
                                name={card.carSell.model} 
                                year={card.carSell.year} 
                                price={card.carSell.price} 
                                transmission={card.carSell.transmission} 
                                plate={card.carSell.licensePlate} 
                                bodyshape={card.carSell.bodyShape} 
                                version={card.carSell.version} 
                                passangers={card.carSell.passangers} 
                                brand={card.carSell.name} 
                                color = {card.carSell.color}
                                pic={card.photos} 
                            />
                        </div>
                    );
                })
            }
            </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center" >
        <nav aria-label="Page navigation example" >
            <ul className="pagination" >
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous" style={{ color: '#C80B16' }}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>

              
                <li className="page-item"><a className="page-link"style={{ color: '#C80B16' }} href="#">1</a></li>
                <li className="page-item"><a className="page-link" style={{ color: '#C80B16' }} href="#">2</a></li>
                <li className="page-item"><a className="page-link" style={{ color: '#C80B16' }} href="#">3</a></li>

                <li className="page-item">
                    <a className="page-link" style={{ color: '#C80B16' }} href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only" >Next</span >
                    </a>
                </li>
            </ul>
        </nav></div></div>

    );
}

export default CardsCar;
