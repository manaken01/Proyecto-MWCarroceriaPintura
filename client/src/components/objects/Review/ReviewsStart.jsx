import React from 'react';
import ReviewUser from './Review';
import ReviewAdmin from './ReviewAdmin';
import UserProfile from '../../resources/UserProfile';
/**
 * Group of last 4 reviews. Doesnt include the form to add a new review
 * @param {*} 
 * reviews: list of all reviews from database
 * handleReviews: Function to update the list of reviews
 * @returns component
 */
function Reviews({reviews,handleReviews}) {
    const PartsScreen = (props) => UserProfile.getType() !== 1 ? <ReviewUser {...props} /> : <ReviewAdmin {...props} />;

    return (
        <div>
            <div className="container flex justify-content-center align-items-center" >
                <div className='row'>{
                    reviews.slice(-4).map(review => (
                        <div className='col-md-100' key={review.idReview}>
                            <PartsScreen handleReviews={handleReviews} id={review.idReview} user={review.Username} calification={review.stars} comment={review.comment} date={review.date} />
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    );
}

export default Reviews;