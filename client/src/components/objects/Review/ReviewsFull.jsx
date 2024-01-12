import React from 'react';
import Review from './Review';
import StarRatingSet from '../../decoration/StarRatingSet';
const reviews = [
    { id: 1, user: "Mariangeles Carranza Varela 1", calification: 3, comment: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', date: '12/03/2014' },
    { id: 2, user: "Mario Chinchilla Castro 2", calification: 2, comment: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', date: '12/03/2014' },
    { id: 3, user: "Mariangeles Carranza Varela  3", calification: 5, comment: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', date: '02/03/2014' },
    { id: 4, user: "Mario Chinchilla Castro 4", calification: 4, comment: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', date: '02/03/2014' },
]
function ReviewsFull() {
    //falta cambiar la paginacion
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center" >
                <div className='row'>{
                    reviews.map(review => (
                        <div className='col-md-100' key={review.id}>
                            <Review user={review.user} calification={review.calification} comment={review.comment} date={review.date} />
                        </div>
                    ))
                }<div className='col-md-100'>
                        <div class="card mb-3" style={{ maxWidth: '100%' }}>
                            <div class="row no-gutters">

                                <div class="col-md-100">

                                    <div class="card-body"> 
                                        <StarRatingSet />
                                        <input type="text" style={{minHeight:'100px'}} className="form-control" placeholder="Comparte detalles sobre tu experiencia en este lugar" aria-label="searchCar" aria-describedby="basic-addon1" />
                                        
                                        <div className="col d-flex justify-content-end">
                                        <button type="button" className="btn btn-danger" style={{marginTop:'1%', backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}>
                                            Publicar
                                        </button>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div></div>
            </div>
        </div>

    );
}

export default ReviewsFull;
