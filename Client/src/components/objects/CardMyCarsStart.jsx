import React from 'react';
import CardMyCars from './CardMyCars';

const cards = [
    { id: 1, car: 'HONDA FIT GD', year: '2007', plate:'BKL-391'},
    { id: 2, car: 'HONDA FIT GD', year: '2007', plate:'BKL-391'},
    { id: 3, car: 'HONDA FIT GD', year: '2007', plate:'BKL-391'},
    { id: 4, car: 'HONDA FIT GD', year: '2007', plate:'BKL-391'},
  ]

function CardMyCarsStart () {
    return (
        <div className="container d-flex justify-content-center align-items-center" >
            <div className='row'>{
                cards.map(card => (
                    <div className='col-md-6' key={card.id}>
                        <CardMyCars car={card.car} year={card.year} plate={card.plate} />
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default CardMyCarsStart;
