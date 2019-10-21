import React, { useContext } from 'react';

import StravaContext from '../../../context/strava/stravaContext';
import RunKeeperContext from '../../../context/runKeeper/runKeeperContext';

import MetricsCard from './MetricsCard';

const Dashboard = () => {
  const { stravaData } = useContext(StravaContext);
  const { runKeeperData } = useContext(RunKeeperContext);

  const targetMetrics = {
    targetWeight: 50,
    targetCaloriesLost: 800
  };

  const weightRatio =
    stravaData && stravaData.weight
      ? Math.round((100 * targetMetrics.targetWeight) / stravaData.weight)
      : null;

  const caloriesRatio =
    runKeeperData && runKeeperData.activities
      ? Math.round(
          (100 * runKeeperData.activities[1].calories) /
            targetMetrics.targetCaloriesLost
        )
      : null;

  return (
    <div>
      <h2 className='center upper'>Dashboard</h2>
      <div className='grid'>
        {/* Weight */}
        <MetricsCard label='Weight loss progression' ratio={weightRatio} />

        {/* Calories */}
        <MetricsCard label='Calories burn progression' ratio={caloriesRatio} />
      </div>
    </div>
  );
};

export default Dashboard;
