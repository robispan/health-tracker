import React from 'react';

import Card from '../assets/Card';
import StravaImg from '../assets/images/strava.jpg';
import NutriticsImg from '../assets/images/nutritics.png';
import RunkeeperImg from '../assets/images/runkeeper.jpg';
import TomtomImg from '../assets/images/tomtom.png';
import LifelogImg from '../assets/images/lifelog.png';

const Home = () => {
  return (
    <div>
      <h2 className='center upper'>Connect your apps</h2>

      <div className='card-container'>
        <Card imageUrl={StravaImg} />
        <Card imageUrl={NutriticsImg} />
        <Card imageUrl={RunkeeperImg} />
        <Card imageUrl={TomtomImg} />
        <Card imageUrl={LifelogImg} />
      </div>
    </div>
  );
};

export default Home;
