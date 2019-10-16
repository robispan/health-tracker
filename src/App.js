import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home/Home';
import Dashboard from './components/pages/Dashboard/Dashboard';
import StravaRedirect from './components/pages/StravaRedirect';

import StravaState from './context/strava/StravaState';

import './App.css';

function App() {
  return (
    <StravaState>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/dashboard'>
              <Dashboard />
            </Route>

            {/* Tracker apps redirects */}
            <Route exact path='/strava-auth' component={StravaRedirect} />
          </Switch>
        </div>
      </Router>
    </StravaState>
  );
}

export default App;
