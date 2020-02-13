import React, { useContext } from 'react';

import getHealthContext from '../../../context/getHealth/getHealthContext';

import MetricsCard from './MetricsCard';

const Dashboard = () => {
	const { runkeeperData, withingsData, mapmyfitnessData } = useContext(getHealthContext);

	const targetMetrics = {
		targetBodyfat: 10,
		targetCaloriesLost: 8000,
		targetSteps: 1000
	};

	const bodyfatRatio =
		withingsData && withingsData.body_fats[0].fat_percent
			? Math.round(100 * targetMetrics.targetBodyfat / withingsData.body_fats[0].fat_percent)
			: null;


	const caloriesRatio =
		runkeeperData && runkeeperData.calories_burnt
			? Math.round(
				(100 * runkeeperData.calories_burnt[1].calories) /
				targetMetrics.targetCaloriesLost
			)
			: null;

	const stepsRatio =
		mapmyfitnessData && mapmyfitnessData.steps_counts
			? Math.round(
				(100 * mapmyfitnessData.steps_counts[0].steps) /
				targetMetrics.targetSteps
			)
			: null;

	return (
		<div>
			<h2 className='center upper'>Dashboard</h2>
			<div className='grid'>
				{/* Body fat */}
				<MetricsCard label='Weight loss progression' ratio={bodyfatRatio} />

				{/* Calories */}
				<MetricsCard label='Calories burn progression' ratio={caloriesRatio} />

				{/* Steps */}
				<MetricsCard label='Steps made today' ratio={stepsRatio} />
			</div>
		</div>
	);
};

export default Dashboard;
