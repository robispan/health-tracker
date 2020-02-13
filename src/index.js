import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import LoadingState from './context/loading/LoadingState';
import GetHealthState from './context/getHealth/GetHealthState';


ReactDOM.render(
	<LoadingState>
		<GetHealthState><App />
		</GetHealthState>
	</LoadingState>, document.getElementById('root'));
