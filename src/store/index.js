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

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('scheduled Items', store.getState().scheduledItems.length)
    result = next(action);

    console.log(`
        todaysMeta: ${JSON.stringify(todaysMeta)}
        scheduledItems: ${JSON.stringify(scheduledItems)}
    `)

    console.groupEnd();

    return result;

}

export default (initialState = {}) => applyMiddleware(consoleMessages) (createStore) (doingDoneReducer, initialState);
