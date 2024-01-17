
import { FaStar } from 'react-icons/fa';

/**
 * Component of an start rating for reviews. It can be setted.
 * @param {*} 
 * rating: number of stars
 * setRating: function to set the rating
 * @returns component
 */ 
const StarRatingSet = ({rating, setRating}) => {

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