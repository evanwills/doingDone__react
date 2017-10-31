import React from 'react';
import {render} from 'react-dom';
// import './index.css';
import App from './App';
// import Whoops404 from './components/genericComponents/whoops404'
// import {Router, Route, hashHistory } from 'react-router';
// import registerServiceWorker from './registerServiceWorker';
// import constants from './meta/constants';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import initialState from './meta/initialState.json';
import {todaysMetaAction} from './store/todaysMeta';
import {scheduledItemsAction} from './store/schedule';
import doingDoneReducer from './store/reducers';
// import storeFactory from './store'


let store = createStore(doingDoneReducer, initialState);
// console.log('getState(): ', store.getState().todaysMeta);



// const meta = todaysMetaAction(store.getState().schoolTerms, store.getState().publicHolidays);
// console.log('meta: ', meta);

// store.dispatch(meta);
// console.log('getState(): ', store.getState());


// const schedule = scheduledItemsAction(
//     store.getState().todaysMeta,
//     store.getState().tasks,
//     store.getState().users,
//     store.getState().currency.pointsToCurrency
// );
// console.log('schedule: ', schedule);

// store.dispatch(schedule);
// console.log('getState(): ', store.getState());

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);