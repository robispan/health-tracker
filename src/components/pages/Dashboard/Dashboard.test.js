import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StravaContext from '../../../context/strava/stravaContext';

import Dashboard from './Dashboard';

afterEach(cleanup);

test('renders correctly without context data', () => {
  const { asFragment } = render(
    <StravaContext.Provider value={{ stravaData: null }}>
      <Dashboard />
    </StravaContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders correctly with context data', () => {
  const { asFragment } = render(
    <StravaContext.Provider value={{}}>
      <Dashboard />
    </StravaContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
