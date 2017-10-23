// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Whoops404 from './components/genericComponents/whoops404'
// import {Router, Route, hashHistory } from 'react-router';
// import registerServiceWorker from './registerServiceWorker';
import constants from './meta/constants';
import initialState from './meta/initialState.json'
import tasksAdmin from './reducers/tasks';

// ReactDOM.render(
// 	<Router history={hashHistory}>
// 		<Route path="/" component={App} />
// 		<Route path="/toDoList" component={App}>
// 			<Route path=":filterView" component={App} />
// 		</Route>
// 		<Route path="/addToDo" component={App} />
// 		<Route path="*" component={Whoops404} />
// 	</Router>,
// 	document.getElementById('root')
// );
// registerServiceWorker();

const state = initialState.tasks.map((task) => task);

const action = {
	type: constants.DELETE_TASK,
	payload: "asdfgetReadyForSwimming"
}
const nextState = tasksAdmin(state, action);

console.log('inital state: ', state);
console.log('action: ', action);
console.log(' new  state:  ', nextState);
if (state === nextState) {
	console.log('Nothing changes! Something went wrong.');
}