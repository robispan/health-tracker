import React, { useContext, useEffect } from 'react';

import RunKeeperContext from '../../context/runKeeper/runKeeperContext';

const RunKeeperRedirect = ({ history }) => {
  const { getRunKeeperData } = useContext(RunKeeperContext);

  useEffect(() => {
    getRunKeeperData();
  });

  // Redirect to homepage
  history.push('/');

  return <p>Loading ...</p>;
};

export default RunKeeperRedirect;
