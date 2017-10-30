// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Whoops404 from './components/genericComponents/whoops404'
// import {Router, Route, hashHistory } from 'react-router';
// import registerServiceWorker from './registerServiceWorker';
// import constants from './meta/constants';
// import { createStore } from 'redux'
import initialState from './meta/initialState.json';
// import { createStore } from 'redux';
import {todaysMetaAction} from './reducers/todaysMeta';
import {scheduledItemsAction} from './reducers/schedule';
import doingDoneReducer from './reducers/reducers';

let state = initialState;

console.log('state.scheduledItems: ', state.scheduledItems);
console.log('state.todaysMeta: ', state.todaysMeta);

const meta = todaysMetaAction(new Date(), state.schoolTerms, state.publicHolidays);
console.log('meta: ', meta);
state = doingDoneReducer(state, meta);
console.log('state.todaysMeta: ', state.todaysMeta);

console.log('state.scheduledItems: ', state.scheduledItems);

const schedule = scheduledItemsAction(
    state.todaysMeta,
    state.tasks,
    state.users,
    state.pointsToCurrency
);

state = doingDoneReducer(state, schedule);

console.log('state.scheduledItems: ', state.scheduledItems);

