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
import { createStore } from 'redux'
import {todaysMeta, todaysMetaAction} from './reducers/todaysMeta';
import {scheduledItems, scheduledItemsAction} from './reducers/schedule';
// import todaysMetaAction from './actions/todaysMetaAction';

let now = new Date(),
    state = initialState;

console.log('state: ', state);

const meta = todaysMetaAction(new Date(), state.schoolTerms, state.publicHolidays);

state.todaysMeta = todaysMeta(state.todaysMeta, meta);

console.log('state: ', state);

const schedule = scheduledItemsAction(state.todaysMeta, state.tasks, state.users, state.pointsToCurrency);

state.scheduledItems = scheduledItems(state.scheduledItems, schedule);

console.log('state: ', state);

