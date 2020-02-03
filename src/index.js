import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import LoadingState from './context/loading/LoadingState';
import StravaState from './context/strava/StravaState';
import RunKeeperState from './context/runKeeper/RunKeeperState';


ReactDOM.render(
	<LoadingState>
		<StravaState>
			<RunKeeperState><App />
			</RunKeeperState>
		</StravaState>
	</LoadingState>, document.getElementById('root'));
