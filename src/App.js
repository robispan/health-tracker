import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home/Home';
import Dashboard from './components/pages/Dashboard/Dashboard';
import StravaRedirect from './components/pages/StravaRedirect';
import RunKeeperRedirect from './components/pages/RunKeeperRedirect';
import Page404 from './components/pages/Page404';

import LoadingState from './context/loading/LoadingState';
import StravaState from './context/strava/StravaState';
import RunKeeperState from './context/runKeeper/RunKeeperState';

import './App.css';

function App() {
  return (
    <LoadingState>
      <StravaState>
        <RunKeeperState>
          <Router>
            <Navbar />
            <div className='container'>
              <Switch>
                {/* Home */}
                <Route exact path='/' component={Home} />

                {/* Dashboard */}
                <Route exact path='/dashboard' component={Dashboard} />

                {/* Strava apps redirect page */}
                <Route exact path='/strava-auth' component={StravaRedirect} />

                {/* Runkeeper apps redirect page */}
                <Route
                  exact
                  path='/runkeeper-auth'
                  component={RunKeeperRedirect}
                />

                {/* 404 */}
                <Route component={Page404} />
              </Switch>
            </div>
          </Router>
        </RunKeeperState>
      </StravaState>
    </LoadingState>
  );
}

export default App;
