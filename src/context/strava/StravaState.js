import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import LoadingContext from '../loading/loadingContext';
import StravaReducer from './stravaReducer';
import StravaContext from './stravaContext';
import { GET_STRAVA_DATA, CLEAR_STRAVA_DATA } from '../types';

const stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
const baseUrl = process.env.REACT_APP_BASE_URL;

const StravaState = props => {
	const { setLoading, stopLoading } = useContext(LoadingContext);

	const initialState = {
		stravaData: null
	};

	const [state, dispatch] = useReducer(StravaReducer, initialState);

	// Authorize app to make API calls for strava user
	// User is redirected to /strava-auth after authorization
	const authStrava = () => {
		window.location.href = `https://www.strava.com/oauth/authorize?client_id=${stravaClientId}&redirect_uri=${baseUrl}/strava-auth/&response_type=code&scope=profile:read_all`;
	};

	// Get athlete data
	const getStravaData = async access_token => {
		setLoading();

		try {
			const dataRes = await axios.get(`https://www.strava.com/api/v3/athlete`, {
				headers: {
					Authorization: `Bearer ${access_token}`
				}
			});

			dispatch({
				type: GET_STRAVA_DATA,
				payload: dataRes.data
			});
		} catch (error) {
			console.log('error fetching Strava athlete data', error);
		}

		stopLoading();
	};

	// Clear strava data
	const clearStravaData = () => {
		sessionStorage.removeItem('_strava_rt');

		dispatch({
			type: CLEAR_STRAVA_DATA
		});
	};

	return (
		<StravaContext.Provider
			value={{
				stravaData: state.stravaData,
				authStrava,
				getStravaData,
				clearStravaData
			}}
		>
			{props.children}
		</StravaContext.Provider>
	);
};

export default StravaState;
