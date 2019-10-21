import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import LoadingContext from '../loading/loadingContext';
import RunKeeperReducer from './runKeeperReducer';
import RunKeeperContext from './runKeeperContext';
import { GET_RUNKEEPER_DATA, CLEAR_RUNKEEPER_DATA } from '../types';

const runKeeperAccessToken = process.env.REACT_APP_RUNKEEPER_ACCESS_TOKEN;

const RunKeeperState = props => {
  const { setLoading, stopLoading } = useContext(LoadingContext);

  const initialState = {
    runKeeperData: null
  };

  const [state, dispatch] = useReducer(RunKeeperReducer, initialState);

  const authRunKeeper = async () => {
    setLoading();

    try {
      const res = await axios.get(
        `https://platform.gethealth.io/v1/health/user/devices/?access_token=${runKeeperAccessToken}`
      );

      const data = res.data.devices.filter(
        device => device.name === 'runkeeper'
      )[0];
      const connect_url = data.connect_url;

      // Go to authorization page
      window.location.href = connect_url;
    } catch (error) {
      console.log('error authorizing Runkeeper', error);
    }

    stopLoading();
  };

  const getRunKeeperData = async () => {
    setLoading();

    try {
      const res = await axios.get(
        `https://platform.gethealth.io/v1/health/user/activities/?access_token=${runKeeperAccessToken}`
      );

      dispatch({
        type: GET_RUNKEEPER_DATA,
        payload: res.data
      });
    } catch (error) {
      console.log('error fetching Runkeeper data', error);
    }

    stopLoading();
  };

  const clearRunKeeperData = () => {
    dispatch({ type: CLEAR_RUNKEEPER_DATA });
  };

  return (
    <RunKeeperContext.Provider
      value={{
        runKeeperData: state.runKeeperData,
        authRunKeeper,
        getRunKeeperData,
        clearRunKeeperData
      }}
    >
      {props.children}
    </RunKeeperContext.Provider>
  );
};

export default RunKeeperState;
