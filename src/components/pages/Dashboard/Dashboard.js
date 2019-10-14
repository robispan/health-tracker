import React from 'react';

import MetricsCard from './MetricsCard';

const Dashboard = () => {
  return (
    <div>
      <h2 className='center upper'>Dashboard</h2>
      <div className='grid'>
        <MetricsCard />
        <MetricsCard />
        <MetricsCard />
        <MetricsCard />
      </div>
    </div>
  );
};

export default Dashboard;
