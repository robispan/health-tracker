import React, { useContext } from 'react';

import StravaContext from '../../../context/strava/stravaContext';

import MetricsCard from './MetricsCard';

const Dashboard = () => {
  const { stravaData } = useContext(StravaContext);

  const targetMetrics = {
    targetWeight: 50,
    heartRate: 55
  };

  const weightRatio =
    stravaData && stravaData.weight
      ? Math.round((100 * targetMetrics.targetWeight) / stravaData.weight)
      : null;

  return (
    <div>
      <h2 className='center upper'>Dashboard</h2>
      <div className='grid'>
        {/* Weight */}
        <MetricsCard label='Weight loss progression' ratio={weightRatio} />

        {/* Heart rate */}
        <MetricsCard label='Heart rate progression' />
      </div>
    </div>
  );
};

export default Dashboard;
