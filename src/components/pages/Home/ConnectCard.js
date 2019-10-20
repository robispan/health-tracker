import React from 'react';
import PropTypes from 'prop-types';

const ConnectCard = ({ imageUrl, connected, onConnect, onDisconnect }) => {
  // Dynamic style for button
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
        onClick={connected ? onDisconnect : onConnect}
        className={buttonClasses.join(' ')}
      >
        {connected ? 'Disconnect' : 'Connect'}
      </a>
    </div>
  );
};

ConnectCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  connected: PropTypes.bool,
  onConnect: PropTypes.func,
  onDisconnect: PropTypes.func
};

export default ConnectCard;
