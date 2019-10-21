import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import StravaContext from '../../../context/strava/stravaContext';

import ConnectCard from './ConnectCard';

import StravaImg from '../../assets/images/strava.jpg';
import NutriticsImg from '../../assets/images/nutritics.png';
import RunkeeperImg from '../../assets/images/runkeeper.jpg';
import TomtomImg from '../../assets/images/tomtom.png';
import LifelogImg from '../../assets/images/lifelog.png';

const stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
const stravaClientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;

const Home = () => {
  const {
    stravaData,
    loading,
    authStrava,
    getStravaData,
    clearStravaData,
    setLoading,
    stopLoading
  } = useContext(StravaContext);

  useEffect(() => {
    // Check session storage for refresh tokens
    const stravaRefreshToken = sessionStorage.getItem('_strava_rt');

    if (stravaRefreshToken && !stravaData) {
      fetchData();
      sessionStorage.removeItem('_strava_rt');
    }

    async function fetchData() {
      setLoading();

      // Get auth tokens
      try {
        const res = await axios.post(
          `https://www.strava.com/oauth/token?client_id=${stravaClientId}&client_secret=${stravaClientSecret}&refresh_token=${stravaRefreshToken}&grant_type=refresh_token`
        );

        sessionStorage.setItem('_strava_rt', res.data.refresh_token);

        // Call action to get athlete data
        getStravaData(res.data.access_token);
      } catch (error) {
        console.log('error fetching Strava auth tokens');
      }

      stopLoading();
    }
  }, []);

  return loading ? (
    'Loading ...'
  ) : (
    <div>
      <h2 className='center upper'>Connect your apps</h2>

      <div className='grid'>
        {/* Strava card */}
        <ConnectCard
          imageUrl={StravaImg}
          connected={stravaData !== null}
          onConnect={authStrava}
          onDisconnect={clearStravaData}
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
