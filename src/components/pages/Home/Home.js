import React, { useContext } from 'react';

import LoadingContext from '../../../context/loading/loadingContext';
import getHealthContext from '../../../context/getHealth/getHealthContext';

import ConnectCard from './ConnectCard';

import WithingsImg from '../../assets/images/withings.png';
import RunkeeperImg from '../../assets/images/runkeeper.jpg';
import MapmyFitnessImg from '../../assets/images/mapmyfitness.png';

const Home = () => {
	const { loading } = useContext(LoadingContext);

	const {
		runkeeperData,
		withingsData,
		mapmyfitnessData,
		disconnectRunkeeper,
		disconnectWithings,
		disconnectMapmyfitness,
		getRunkeeperData,
		getWithingsData,
		getMapmyfitnessData } = useContext(
			getHealthContext
		);

	return loading ? (
		'Loading ...'
	) : (
			<div>
				<h2 className='center upper'>Connect your apps</h2>

				<div className='grid'>
					{/* Withings card */}
					<ConnectCard
						imageUrl={WithingsImg}
						connected={withingsData !== null}
						onConnect={getWithingsData}
						onDisconnect={disconnectWithings}
					/>

					{/* Runkeeper card */}
					<ConnectCard
						imageUrl={RunkeeperImg}
						connected={runkeeperData !== null}
						onConnect={getRunkeeperData}
						onDisconnect={disconnectRunkeeper}
					/>

					{/* Mapmyfitness card */}
					<ConnectCard
						imageUrl={MapmyFitnessImg}
						connected={mapmyfitnessData !== null}
						onConnect={getMapmyfitnessData}
						onDisconnect={disconnectMapmyfitness}
					/>
				</div>
			</div>
		);
};

export default Home;
