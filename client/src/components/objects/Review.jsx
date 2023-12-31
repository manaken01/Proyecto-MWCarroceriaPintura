import { useState } from 'react'
import StarRating from '../decoration/StarRating'



function Review({ user,calification, comment,date }) {
  return (
    <div class="card mb-3" style={{ maxWidth: '100%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
      <div class="row no-gutters">

        <div class="col-md-100">

          <div class="card-body">
            <StarRating rating={calification}/>
            <h5 class="card-title">{user}</h5>
            <p class="card-text">{comment}</p>
            <p class="card-text"><small class="text-muted"></small>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review
