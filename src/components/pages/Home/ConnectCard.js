import React from 'react';

const Card = ({ imageUrl }) => {
  const imageStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className='connect-card'>
      <div className='connect-card-image' style={imageStyle}></div>
      <a href='#' className='connect-card-link'>
        Connect
      </a>
    </div>
  );
};

export default Card;
