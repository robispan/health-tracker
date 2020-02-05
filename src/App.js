import React, { useEffect, useContext } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import LoadingContext from './context/loading/loadingContext';
import StravaContext from './context/strava/stravaContext';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home/Home';
import Dashboard from './components/pages/Dashboard/Dashboard';
import StravaRedirect from './components/pages/StravaRedirect';
import RunKeeperRedirect from './components/pages/RunKeeperRedirect';
import Page404 from './components/pages/Page404';

import './App.css';

const stravaClientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
const stravaClientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;

const App = () => {

	const { setLoading, stopLoading } = useContext(LoadingContext);
	const { stravaData, getStravaData } = useContext(
		StravaContext
	);

	useEffect(() => {
		// Check session storage for Strava refresh tokens
		const stravaRefreshToken = sessionStorage.getItem('_strava_rt');

		if (stravaRefreshToken && !stravaData) {
			refreshStravaAuth();
			sessionStorage.removeItem('_strava_rt');
		}

		async function refreshStravaAuth() {
			setLoading();

			// Get auth tokens
			try {
				const res = await axios.post(
					`https://www.strava.com/oauth/token?client_id=${stravaClientId}&client_secret=${stravaClientSecret}&refresh_token=${stravaRefreshToken}&grant_type=refresh_token`
				);

				sessionStorage.setItem('_strava_rt', res.data.refresh_token);

				// Call context action to get athlete data
				getStravaData(res.data.access_token);
			} catch (error) {
				console.log('error fetching Strava auth tokens');
			}

			stopLoading();
		}
	}, []);

	return (
		<Router basename={'/'}>
			<Navbar />
			<div className='container'>
				<Switch>
					{/* Home */}
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />

					{/* Dashboard */}
					<Route exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />

					{/* Strava apps redirect page */}
					<Route exact path={`${process.env.PUBLIC_URL}/strava-auth`} component={StravaRedirect} />

					{/* Runkeeper apps redirect page */}
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/runkeeper-auth`}
						component={RunKeeperRedirect}
					/>

					{/* 404 */}
					<Route component={Page404} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
