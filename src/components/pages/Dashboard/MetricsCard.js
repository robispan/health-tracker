import React from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MetricsCard = () => {
  const percentage = 66;

  return (
    <div className='metrics-card'>
      <h3 className='metrics-card-title'>Title</h3>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: '#00b9bb',
          textColor: '#fff',
          pathColor: '#fff',
          trailColor: 'transparent'
        })}
      />
    </div>
  );
};

export default MetricsCard;
