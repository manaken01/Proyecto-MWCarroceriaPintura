import { useState } from 'react'
import StarRating from '../../decoration/StarRating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
/**
 * Component of an individual review. Include delete button for the admin
 * @param {*} 
 * handleReviews: Function to update the list of reviews
 * id: id of the review
 * user: user that made the review
 * calification: calification of the review
 * comment: comment of the review
 * date: date of the review
 * @returns component
 */
function Review({ handleReviews,id, user, calification, comment, date }) {
  const handleDeleteReview = async () => {
    try {
        const response = await axios.delete(`http://localhost:8080/review/${id}`)
        if (response.status === 200) {
            handleReviews();
            alert('Se ha eliminado el comentario de forma correcta');
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
}
  return (
    <div className="card mb-3" style={{ maxWidth: '100%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
      <div className="row no-gutters">

        <div className="col-md-100">

          <div className="card-body">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StarRating rating={calification} />
            <button onClick={handleDeleteReview} className="btn" style={{ marginBottom: '2.8%', marginRight: '5%', color: 'red', backgroundColor: 'transparent', width: '5%', height: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faTrash} style={{ fontSize: '20px' }} />
            </button>
            </div>
            <h5 className="card-title">{user}</h5>
            <p className="card-text">{comment}</p>
            <p className="card-text"><small className="text-muted"></small>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review
