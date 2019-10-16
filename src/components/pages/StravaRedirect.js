import { useContext, useEffect } from 'react';

import StravaContext from '../../context/strava/stravaContext';

const StravaRedirect = ({ location, history }) => {
  const { getStravaData } = useContext(StravaContext);

  useEffect(() => {
    // Get authorization code
    const params = new URLSearchParams(location.search);
    const authCode = params.get('code');

    // Call action to get athlete data
    getStravaData(authCode);

    // Redirect to homepage
    history.push('/');
  });

  return null;
};

export default StravaRedirect;
