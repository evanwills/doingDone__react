import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import globalStore from './middleWare/globalStore';
// import registerServiceWorker from './registerServiceWorker';

// import './index.css';
import App from './App';
// import Whoops404 from './components/genericComponents/whoops404'
// import {Router, Route, hashHistory } from 'react-router';
// import constants from './meta/constants';
import initialState from './meta/initialState.json';
import doingDoneReducer from './store/reducers';
import {todaysMetaAction} from './store/todaysMeta';
import {scheduledItemsAction} from './store/schedule';

console.log('globalStore: ', globalStore);

let store = createStore(
    doingDoneReducer,
    initialState,
    applyMiddleware(globalStore),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// initialise today
store.dispatch(todaysMetaAction(store.getState().schoolTerms, store.getState().publicHolidays));

// initialise today's scheduled tasks
store.dispatch(scheduledItemsAction(store.getState()));



render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);