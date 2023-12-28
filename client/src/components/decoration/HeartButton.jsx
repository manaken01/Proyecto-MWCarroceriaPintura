import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const HeartButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

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