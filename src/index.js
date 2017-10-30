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
import { createStore } from 'redux'


const doingDoneStore = createStore(doingDoneReducer, initialState)
console.log('getState(): ', doingDoneStore.getState().todaysMeta);



const meta = todaysMetaAction(new Date(), doingDoneStore.getState().schoolTerms, doingDoneStore.getState().publicHolidays);
console.log('meta: ', meta);

doingDoneStore.dispatch(meta);
console.log('getState(): ', doingDoneStore.getState());


const schedule = scheduledItemsAction(
    doingDoneStore.getState().todaysMeta,
    doingDoneStore.getState().tasks,
    doingDoneStore.getState().users,
    doingDoneStore.getState().currency.pointsToCurrency
);
console.log('schedule: ', schedule);

doingDoneStore.dispatch(schedule);
console.log('getState(): ', doingDoneStore.getState());
