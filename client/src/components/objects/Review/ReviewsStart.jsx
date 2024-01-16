import React from 'react';
import ReviewUser from './Review';
import ReviewAdmin from './ReviewAdmin';
import UserProfile from '../../resources/UserProfile';

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