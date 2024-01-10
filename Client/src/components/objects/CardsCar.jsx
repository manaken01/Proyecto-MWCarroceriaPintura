import React from 'react';
import CardCarSell from './CardCarSell';

const cards = [
    { id: 1, name: "Honda Fit ", year: "2006", price: "₡ 40000", transmission: "Manual", plate: "1111-1111", bodyshape: 'Sedan', version: "Japón", passangers: 4, brand: "Honda", pic: ["https://autojapon.net/uploads/2023/12/1703361655_IMG_20231223_140046.jpg", "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg"] },
]

function CardsCar() {
    //falta cambiar la paginacion
    return (
        <div>
        <div className="container d-flex justify-content-center align-items-center" >
            <div className='row'>{
                cards.map(card => (
                    <div className='col-md-6' key={card.id}>
                        <CardCarSell name={card.name} year={card.year} price={card.price} transmission={card.transmission} plate={card.plate} bodyshape={card.bodyshape} version={card.version} passangers={card.passangers} brand={card.brand} pic={card.pic} />
                    </div>
                ))
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
