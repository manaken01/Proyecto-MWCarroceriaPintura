import React, { useState, useEffect } from 'react';
import Review from './Review';
import ReviewAdmin from './ReviewAdmin';
import StarRatingSet from '../../decoration/StarRatingSet';
import axios from 'axios';
import UserProfile from '../../resources/UserProfile';
// const reviews = [
//     { id: 1, user: "Mariangeles Carranza Varela 1", calification: 3, comment: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', date: '12/03/2014' },
//     { id: 2, user: "Mario Chinchilla Castro 2", calification: 2, comment: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', date: '12/03/2014' },
//     { id: 3, user: "Mariangeles Carranza Varela  3", calification: 5, comment: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', date: '02/03/2014' },
//     { id: 4, user: "Mario Chinchilla Castro 4", calification: 4, comment: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', date: '02/03/2014' },
// ]
function ReviewsFull({reviews,handleReviews}) {
    //falta cambiar la paginacion
    const PartsScreen = (props) => UserProfile.getType() !== 1 ? <ReviewUser {...props} /> : <ReviewAdmin {...props} />;
    const [rating, setRating] = useState(0);
    
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero indexed, so +1 and pad with 0 if necessary
    const day = ("0" + date.getDate()).slice(-2); // Pad with 0 if necessary

    const [comment, setComment] = useState('');
    const mysqlDateFormat = `${year}-${month}-${day}`; // 'YYYY-MM-DD'

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const validateInputs = () => {
        if (!comment) {
            alert('Se debe escribir un comentario');
            return false;
        }
        if (UserProfile.getId() === 0) {
            alert('Se debe iniciar sesion para comentar');
            return false;
        }
        return true;
    };
    const resetInputs = () => {
        setComment('');
        setRating(0);
    };


      
    const handleAddReview = async () => {
        if (!validateInputs()) {
            return;
        }
        const getData = async () => {
            try {
                const response = await axios.post('http://localhost:8080/review', {
                    idUser: UserProfile.getId(),
                    comment: comment,
                    stars: rating,
                    date: mysqlDateFormat,
                });
                if (response.status === 200) {
                    handleReviews();
                    resetInputs();
                    alert('Se ha agregado el comentario de forma correcta');
                }
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }

        };

        getData();
    }

    
    return (
        <div>
            <div className="container flex justify-content-center align-items-center" >
                <div className='row'>{
                    reviews.map(review => (
                        <div className='col-md-100' key={review.idReview}>
                            <PartsScreen handleReviews={handleReviews} id={review.idReview} user={review.Username} calification={review.stars} comment={review.comment} date={review.date} />
                        </div>
                    ))
                }<div className='col-md-100'>
                        <div className="card mb-3" style={{ maxWidth: '100%' }}>
                            <div className="row no-gutters">

                                <div className="col-md-100">

                                    <div className="card-body">
                                        <StarRatingSet rating={rating} setRating={setRating} />
                                        <input type="text" style={{ minHeight: '100px' }} className="form-control" value={comment} onChange={handleCommentChange} placeholder="Comparte detalles sobre tu experiencia en este lugar" aria-label="searchCar" aria-describedby="basic-addon1" />

                                        <div className="col d-flex justify-content-end">
                                            <button type="button" className="btn btn-danger" onClick={handleAddReview} style={{ marginTop: '1%', backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}>
                                                Publicar
                                            </button>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ReviewsFull;
