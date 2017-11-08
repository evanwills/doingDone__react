import { createStore , applyMiddleware} from 'redux';
import doingDoneReducer from './reducers';

const consoleMessages = store => next => action => {
    
    let result,
        {
            // valueModifiers,
            // currency,
            // pay,
            // archiveActivities,
            // schoolTerms,
            // publicHolidays,
            todaysMeta,
            // users,
            // tasks,
            scheduledItems
            // activities,
            // oldActivities,
            // errors,
            // accountLedger
        } = store.getState()

    result = next(action);

    return result;

}

export default (initialState = {}) => applyMiddleware(consoleMessages) (createStore) (doingDoneReducer, initialState);
