import { useState } from 'react'
import StarRating from '../../decoration/StarRating'



function Review({handleReviews, id, user,calification, comment,date }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '100%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
      <div className="row no-gutters">

        <div className="col-md-100">

          <div className="card-body">
            <StarRating rating={calification}/>
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
