import React from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MetricsCard = ({ ratio, label }) => {
  return (
    <div className='metrics-card'>
      <h3 className='metrics-card-title center'>{label}</h3>
      {ratio ? (
        <CircularProgressbar
          value={ratio}
          text={`${ratio}%`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: '#00b9bb',
            textColor: '#fff',
            pathColor: '#fff',
            trailColor: 'transparent'
          })}
        />
      ) : (
        <div className='center'>
          Connect trackers on homepage to see your progression!
        </div>
      )}
    </div>
  );
};

export default MetricsCard;
