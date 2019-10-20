import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StravaContext from '../../../context/strava/stravaContext';

import Home from './Home';

afterEach(cleanup);

test('renders without context data', () => {
  const { asFragment } = render(
    <StravaContext.Provider value={{ stravaData: null }}>
      <Home />
    </StravaContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders wit context data', () => {
  const { asFragment } = render(
    <StravaContext.Provider value={{}}>
      <Home />
    </StravaContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
