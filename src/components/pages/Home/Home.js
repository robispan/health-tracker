import React from 'react';

import ConnectCard from './ConnectCard';
import StravaImg from '../../assets/images/strava.jpg';
import NutriticsImg from '../../assets/images/nutritics.png';
import RunkeeperImg from '../../assets/images/runkeeper.jpg';
import TomtomImg from '../../assets/images/tomtom.png';
import LifelogImg from '../../assets/images/lifelog.png';

const Home = () => {
  return (
    <div>
      <h2 className='center upper'>Connect your apps</h2>

      <div className='connect-card-grid'>
        <ConnectCard imageUrl={StravaImg} />
        <ConnectCard imageUrl={NutriticsImg} />
        <ConnectCard imageUrl={RunkeeperImg} />
        <ConnectCard imageUrl={TomtomImg} />
        <ConnectCard imageUrl={LifelogImg} />
      </div>
    </div>
  );
};

export default Home;
