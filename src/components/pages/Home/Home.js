import React, { useContext } from 'react';

import LoadingContext from '../../../context/loading/loadingContext';
import StravaContext from '../../../context/strava/stravaContext';
import RunkeeperContext from '../../../context/runKeeper/runKeeperContext';

import ConnectCard from './ConnectCard';

import StravaImg from '../../assets/images/strava.jpg';
import RunkeeperImg from '../../assets/images/runkeeper.jpg';

const Home = () => {
	const { loading } = useContext(LoadingContext);
	const { stravaData, authStrava, clearStravaData } = useContext(
		StravaContext
	);
	const { runKeeperData, authRunKeeper, clearRunKeeperData } = useContext(
		RunkeeperContext
	);

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

					{/* Runkeeper card */}
					<ConnectCard
						imageUrl={RunkeeperImg}
						connected={runKeeperData !== null}
						onConnect={authRunKeeper}
						onDisconnect={clearRunKeeperData}
					/>
				</div>
			</div>
		);
};

export default Home;
