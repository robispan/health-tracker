import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home/Home';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Page404 from './components/pages/Page404';

import './App.css';

const App = () => {

	return (
		<Router>
			<Navbar />
			<div className='container'>
				<Switch>
					{/* Home */}
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />

					{/* Dashboard */}
					<Route exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />

					{/* 404 */}
					<Route component={Page404} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
