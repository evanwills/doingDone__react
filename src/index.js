import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Whoops404 from './components/genericComponents/whoops404'
import {Router, Route, hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/toDoList" component={App}>
			<Route path=":filterView" component={App} />
		</Route>
		<Route path="*" component={Whoops404} />
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
