import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StravaContext from '../../../context/strava/stravaContext';
import LoadingContext from '../../../context/loading/loadingContext';
import RunKeeperContext from '../../../context/runKeeper/runKeeperContext';

import Home from './Home';

afterEach(cleanup);

test('renders correctly without context data', () => {
	const { asFragment } = render(
		<StravaContext.Provider value={{ stravaData: null }}>
			<LoadingContext.Provider value={{ loading: false }}>
				<RunKeeperContext.Provider value={{ getHealthData: null }}>
					<Home />
				</RunKeeperContext.Provider>
			</LoadingContext.Provider>
		</StravaContext.Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});

test('renders correctly with context data', () => {
	const { asFragment } = render(
		<StravaContext.Provider value={{}}>
			<LoadingContext.Provider value={{}}>
				<RunKeeperContext.Provider value={{}}>
					<Home />
				</RunKeeperContext.Provider>
			</LoadingContext.Provider>
		</StravaContext.Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});
