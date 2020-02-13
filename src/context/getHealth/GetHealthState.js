import React, { useReducer, useContext } from 'react';
import axios from 'axios';

import LoadingContext from '../loading/loadingContext';
import GetHealthReducer from './getHealthReducer';
import GetHealthContext from './getHealthContext';

import { SET_RUNKEEPER_DATA, CLEAR_RUNKEEPER_DATA, SET_WITHINGS_DATA, CLEAR_WITHINGS_DATA, SET_MAPMYFITNESS_DATA, CLEAR_MAPMYFITNESS_DATA } from '../types';

const getHealthAccessToken = process.env.REACT_APP_GETHEALTH_ACCESS_TOKEN;

const GetHealthState = props => {
	const { setLoading, stopLoading } = useContext(LoadingContext);

	const initialState = {
		runkeeperData: null,
		withingsData: null,
		mapmyfitnessData: null
	};

	const [state, dispatch] = useReducer(GetHealthReducer, initialState);

	const authRunkeeper = async () => {
		setLoading();

		try {
			const res = await axios.get(
				`https://platform.gethealth.io/v1/health/user/devices/?access_token=${getHealthAccessToken}`
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

	const getRunkeeperData = async () => {
		setLoading();

		try {
			const res = await axios.get(
				`https://platform.gethealth.io/v1/health/user/calories_burnt/?access_token=${getHealthAccessToken}&start_date=2016-02-24`
			);

			dispatch({
				type: SET_RUNKEEPER_DATA,
				payload: res.data
			});
		} catch (error) {
			console.log('error fetching Runkeeper data', error);
		}

		stopLoading();
	};

	const disconnectRunkeeper = async () => {
		await axios.get(`https://platform.gethealth.io/v1/health/user/disconnect/runkeeper?access_token=${getHealthAccessToken}`)
		dispatch({ type: CLEAR_RUNKEEPER_DATA });
	};

	const authWithings = async () => {
		setLoading();

		try {
			const res = await axios.get(
				`https://platform.gethealth.io/v1/health/user/devices/?access_token=${getHealthAccessToken}`
			);

			const data = res.data.devices.filter(
				device => device.name === 'withings'
			)[0];
			const connect_url = data.connect_url;

			// Go to authorization page
			window.location.href = connect_url;
		} catch (error) {
			console.log('error authorizing Withings', error);
		}

		stopLoading();
	};

	const getWithingsData = async () => {
		setLoading();

		try {
			const res = await axios.get(
				`https://platform.gethealth.io/v1/health/user/body_fats/?access_token=${getHealthAccessToken}&start_date=2019-01-01&source=withings`
			);

			dispatch({
				type: SET_WITHINGS_DATA,
				payload: res.data
			});
		} catch (error) {
			console.log('error fetching Withings data', error);
		}

		stopLoading();
	};

	const disconnectWithings = async () => {
		await axios.get(`https://platform.gethealth.io/v1/health/user/disconnect/withings?access_token=${getHealthAccessToken}`)
		dispatch({ type: CLEAR_WITHINGS_DATA });
	};

	const authMapmyfitness = async () => {
		setLoading();

		try {
			const res = await axios.get(
				`https://platform.gethealth.io/v1/health/user/devices/?access_token=${getHealthAccessToken}`
			);

			const data = res.data.devices.filter(
				device => device.name === 'mapmyfitness'
			)[0];
			const connect_url = data.connect_url;

			// Go to authorization page
			window.location.href = connect_url;
		} catch (error) {
			console.log('error authorizing Mapmyfitness', error);
		}

		stopLoading();
	};

	const getMapmyfitnessData = async () => {
		setLoading();

		try {
			const res = await axios.get(
				`https://platform.gethealth.io/v1/health/user/steps_counts/?access_token=${getHealthAccessToken}&start_date=2016-11-01`
			);

			dispatch({
				type: SET_MAPMYFITNESS_DATA,
				payload: res.data
			});
		} catch (error) {
			console.log('error fetching Mapmyfitness data', error);
		}

		stopLoading();
	};

	const disconnectMapmyfitness = async () => {
		await axios.get(`https://platform.gethealth.io/v1/health/user/disconnect/mapmyfitness?access_token=${getHealthAccessToken}`)
		dispatch({ type: CLEAR_MAPMYFITNESS_DATA });
	};

	return (
		<GetHealthContext.Provider
			value={{
				runkeeperData: state.runkeeperData,
				withingsData: state.withingsData,
				mapmyfitnessData: state.mapmyfitnessData,
				authRunkeeper,
				authWithings,
				authMapmyfitness,
				disconnectRunkeeper,
				disconnectWithings,
				disconnectMapmyfitness,
				getRunkeeperData,
				getWithingsData,
				getMapmyfitnessData
			}}
		>
			{props.children}
		</GetHealthContext.Provider>
	);
};

export default GetHealthState;
