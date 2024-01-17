import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
/**
 * Component of a hearth button for favorites.
 * @param {*} 
 * isLiked: Boolean that indicates if is liked or not
 * handleLikeClick: function to handle the click
 * @returns component
 */ 
const HeartButton = ({ isLiked, handleLikeClick }) => {
  //console.log(isLiked);
  return (
    <button
      onClick={handleLikeClick}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      <FontAwesomeIcon
        icon={faHeart}
        style={{ color: isLiked ? 'red' : 'black', fontSize: '1.5em' }}
      />
    </button>
  );
};

export default HeartButton;