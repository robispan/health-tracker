import React from 'react';

const Card = ({ imageUrl }) => {
  const imageStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className='card'>
      <div className='card-image' style={imageStyle}></div>
      <a href='#' className='card-link'>
        Connect
      </a>
    </div>
  );
};

export default Card;
