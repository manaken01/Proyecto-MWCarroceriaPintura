import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRatingSet = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          onClick={() => handleStarClick(index)}
          color={index < rating ? '#C80B16' : '#9C9C9C'}
          size={24}
          style={{ cursor: 'pointer' }}
        />
      ))}
      <p>Calificación: {rating}</p>
    </div>
  );
};

export default StarRatingSet;