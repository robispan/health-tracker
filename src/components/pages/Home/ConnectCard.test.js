import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StravaImg from '../../assets/images/strava.jpg';
import ConnectCard from './ConnectCard';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(
    <ConnectCard imageUrl={StravaImg} connected={false} />
  );
  expect(asFragment()).toMatchSnapshot();
});

it('inserts text to <a> tag and adds the right css class', () => {
  const { getByText } = render(
    <ConnectCard imageUrl={StravaImg} connected={true} />
  );
  expect(getByText('Disconnect')).toHaveClass('connected');
});
