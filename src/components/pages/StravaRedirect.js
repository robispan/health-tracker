import { useContext, useEffect } from 'react';
import axios from 'axios';

import StravaContext from '../../context/strava/stravaContext';

const stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
const stravaClientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;

const StravaRedirect = ({ location, history }) => {
  const { getStravaData } = useContext(StravaContext);

  useEffect(() => {
    // Get authorization code
    const params = new URLSearchParams(location.search);
    const authCode = params.get('code');

    fetchData();
    async function fetchData() {
      // Get auth tokens
      const res = await axios.post(
        `https://www.strava.com/oauth/token?client_id=${stravaClientId}&client_secret=${stravaClientSecret}&code=${authCode}&grant_type=authorization_code`
      );

      // Call context action to collect athlete data
      getStravaData(res.data.access_token);

      // Save refresh token to sessionStorage
      sessionStorage.setItem('_strava_rt', res.data.refresh_token);

      // Redirect to homepage
      history.push('/');
    }
  });

  return null;
};

export default StravaRedirect;
