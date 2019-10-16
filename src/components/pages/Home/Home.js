import React, { useContext } from 'react';

import StravaContext from '../../../context/strava/stravaContext';

import ConnectCard from './ConnectCard';
import StravaImg from '../../assets/images/strava.jpg';
import NutriticsImg from '../../assets/images/nutritics.png';
import RunkeeperImg from '../../assets/images/runkeeper.jpg';
import TomtomImg from '../../assets/images/tomtom.png';
import LifelogImg from '../../assets/images/lifelog.png';

const Home = () => {
  const { stravaData, authStrava } = useContext(StravaContext);

  return (
    <div>
      <h2 className='center upper'>Connect your apps</h2>

      <div className='grid'>
        {/* Strava card */}
        <ConnectCard
          imageUrl={StravaImg}
          connected={stravaData !== null}
          onConnect={authStrava}
        />

        <ConnectCard imageUrl={NutriticsImg} />
        <ConnectCard imageUrl={RunkeeperImg} />
        <ConnectCard imageUrl={TomtomImg} />
        <ConnectCard imageUrl={LifelogImg} />
      </div>
    </div>
  );
};

export default Home;
