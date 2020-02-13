import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StravaContext from '../../../context/strava/stravaContext';
import LoadingContext from '../../../context/loading/loadingContext';
import RunKeeperContext from '../../context/runKeeper/runKeeperContext';

import Dashboard from './Dashboard';

afterEach(cleanup);

test('renders correctly without context data', () => {
	const { asFragment } = render(
		<StravaContext.Provider value={{ stravaData: null }}>
			<LoadingContext.Provider>
				<RunKeeperContext.Provider value={{ getHealthData: null }}>
					<Dashboard />
				</RunKeeperContext.Provider>
			</LoadingContext.Provider>
		</StravaContext.Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});

test('renders correctly with context data', () => {
	const { asFragment } = render(
		<StravaContext.Provider value={{}}>
			<LoadingContext.Provider>
				<RunKeeperContext.Provider value={{}}>
					<Dashboard />
				</RunKeeperContext.Provider>
			</LoadingContext.Provider>
		</StravaContext.Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});
