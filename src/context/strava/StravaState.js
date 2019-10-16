import React, { useReducer } from 'react';
import axios from 'axios';
import StravaReducer from './stravaReducer';
import StravaContext from './stravaContext';
import { GET_STRAVA_DATA, SET_LOADING } from '../types';

let stravaClientId;
let stravaClientSecret;
let baseUrl;

stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
stravaClientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
baseUrl = process.env.REACT_APP_BASE_URL;

const StravaState = props => {
  const initialState = {
    stravaData: null,
    loading: false
  };

  const [state, dispatch] = useReducer(StravaReducer, initialState);

  // Authorize app to make API calls for strava user
  // User is redirected to /strava-auth after authorization
  const authStrava = () => {
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${stravaClientId}&redirect_uri=${baseUrl}/strava-auth/&response_type=code&scope=profile:read_all`;
  };

  // Get athlete data
  const getStravaData = async code => {
    setLoading();

    const authRes = await axios.post(
      `https://www.strava.com/oauth/token?client_id=${stravaClientId}&client_secret=${stravaClientSecret}&code=${code}&grant_type=authorization_code`
    );

    // Save refresh token to sessionStorage
    sessionStorage.setItem('_strava_rt', authRes.data.refresh_token);

    // Get detailed data
    const dataRes = await axios.get(`https://www.strava.com/api/v3/athlete`, {
      headers: {
        Authorization: `Bearer ${authRes.data.access_token}`
      }
    });

    console.log('strava data sent to state', dataRes.data);

    dispatch({
      type: GET_STRAVA_DATA,
      payload: dataRes.data
    });
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <StravaContext.Provider
      value={{
        stravaData: state.stravaData,
        loading: state.loading,
        authStrava,
        getStravaData,
        setLoading
      }}
    >
      {props.children}
    </StravaContext.Provider>
  );
};

export default StravaState;
