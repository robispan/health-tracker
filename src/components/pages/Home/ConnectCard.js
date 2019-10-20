import React from 'react';
import PropTypes from 'prop-types';

const ConnectCard = ({ imageUrl, connected, onConnect }) => {
  const buttonClasses = ['connect-card-button'];
  if (connected) buttonClasses.push('connected');

  return (
    <div className='connect-card'>
      <div
        className='connect-card-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <a
        href='#'
        onClick={connected ? null : onConnect}
        className={buttonClasses.join(' ')}
      >
        {connected ? 'Connected' : 'Connect'}
      </a>
    </div>
  );
};

ConnectCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  connected: PropTypes.bool,
  onConnect: PropTypes.func
};

export default ConnectCard;
