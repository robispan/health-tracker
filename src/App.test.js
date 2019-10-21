import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  // verify page content for expected route
  expect(getByText('Connect your apps')).toBeInTheDocument();

  fireEvent.click(getByText(/Dashboard/i));

  // check that the content changed to the new page
  expect(getByText('Weight loss progression')).toBeInTheDocument();
});
