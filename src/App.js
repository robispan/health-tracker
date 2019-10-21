import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home/Home';
import Dashboard from './components/pages/Dashboard/Dashboard';
import StravaRedirect from './components/pages/StravaRedirect';
import Page404 from './components/pages/Page404';

import StravaState from './context/strava/StravaState';
import LoadingState from './context/loading/LoadingState';
import './App.css';

function App() {
  return (
    <LoadingState>
      <StravaState>
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              {/* Home */}
              <Route exact path='/' component={Home} />

              {/* Dashboard */}
              <Route exact path='/dashboard' component={Dashboard} />

              {/* Health tracker apps redirect pages */}
              <Route exact path='/strava-auth' component={StravaRedirect} />

              {/* 404 */}
              <Route component={Page404} />
            </Switch>
          </div>
        </Router>
      </StravaState>
    </LoadingState>
  );
}

export default App;
