import { useContext, useEffect } from 'react';
import axios from 'axios';

import StravaContext from '../../context/strava/stravaContext';
import LoadingContext from '../../context/loading/loadingContext';

const stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
const stravaClientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;

const StravaRedirect = ({ location, history }) => {
	const { getStravaData } = useContext(StravaContext);
	const { setLoading, stopLoading } = useContext(LoadingContext);

	useEffect(() => {
		// Get authorization code
		const params = new URLSearchParams(location.search);
		const authCode = params.get('code');

		fetchData();
		async function fetchData() {
			// Set loading
			setLoading();

			// Get auth tokens
			try {
				const res = await axios.post(
					`https://www.strava.com/oauth/token?client_id=${stravaClientId}&client_secret=${stravaClientSecret}&code=${authCode}&grant_type=authorization_code`
				);

				// Call context action to collect athlete data
				getStravaData(res.data.access_token);

				// Save refresh token to sessionStorage
				sessionStorage.setItem('_strava_rt', res.data.refresh_token);
			} catch (error) {
				console.log('error fetching Strava outh tokens', error);
			}

			// Stop loading
			stopLoading();

			// Redirect to homepage
			history.push('/health-tracker');
		}
	});

	return null;
};

export default StravaRedirect;
