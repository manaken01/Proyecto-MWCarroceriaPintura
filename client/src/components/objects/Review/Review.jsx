import { useState } from 'react'
import StarRating from '../../decoration/StarRating'


/**
 * Component of an individual review. Doesnt include delete button, is for general users
 * @param {*} 
 * handleReviews: Function to update the list of reviews
 * id: id of the review
 * user: user that made the review
 * calification: calification of the review
 * comment: comment of the review
 * date: date of the review
 * @returns component
 */
function Review({handleReviews, id, user,calification, comment,date }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '100%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
      <div className="row no-gutters">

        <div className="col-md-100">

          <div className="card-body">
            <StarRating rating={calification}/>
            <h5 className="card-title">{user}</h5>
            <p className="card-text">{comment}</p>
            <p className="card-text"><small className="text-muted"></small>{new Date(date).toLocaleDateString('es-ES', { timeZone: 'UTC', year: 'numeric', month: 'long', day: '2-digit' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review
