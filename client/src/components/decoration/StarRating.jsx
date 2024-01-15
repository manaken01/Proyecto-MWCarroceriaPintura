import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({rating}) => {
  

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          color={index < rating ? '#C80B16' : '#9C9C9C'}
          size={24}
        />
      ))}
      <p>Calificación: {rating}</p>
    </div>
  );
};

export default StarRating;