import React from 'react';

const Card = ({ imageUrl, connected, onConnect }) => {
  const classList = ['connect-card-link'];
  if (connected) classList.push('connected');

  return (
    <div className='connect-card'>
      <div
        className='connect-card-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <a
        href='#'
        onClick={connected ? null : onConnect}
        className={classList.join(' ')}
      >
        {connected ? 'Connected' : 'Connect'}
      </a>
    </div>
  );
};

export default Card;
