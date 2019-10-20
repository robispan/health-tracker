import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MetricsCard from './MetricsCard';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(<MetricsCard ratio={70} label='Heart rate' />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders without ratio prop', () => {
  const { asFragment } = render(<MetricsCard label='Heart rate' />);
  expect(asFragment()).toMatchSnapshot();
});

it('inserts label to title', () => {
  const { getByText } = render(<MetricsCard label='Heart rate' />);
  expect(getByText('Heart rate'));
});
