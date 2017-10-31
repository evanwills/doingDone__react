import constants from '../meta/constants';
import { combineReducers } from 'redux';


// ===============================================
// START: actionCreators


export const completionLevelAction = (completionLevel) => ({
    type: constants.UPDATE_COMPLETION_LEVEL_VALUES,
    payload: completionLevel
});

export const interventionLevelAction = (interventionLevel) => ({
	type: constants.AUTO_REMOVE_SCHEDULED_TASKS,
	payload: interventionLevel
});


//  END:  actionCreators
// ===============================================
// START: reducers


const completionLevel = (state = {Not: 0, Partially: 0.5, Fully: 1, Outstandingly: 1.5}, action) => {
    switch(action.type) {
        case constants.UPDATE_COMPLETION_LEVEL_VALUES:
            return action.payload;
        default:
            return state;
        
    }
};


const interventionLevel = (state = {Volunteered: 1.3, Prompted: 1, Coerced: 0.7, Battled: 0.4}, action) => {
    switch(action.type) {
        case constants.UPDATE_INTERVENTION_LEVEL_VALUES:
            return action.payload;
        default:
            return state;
    }
}


export const valueModifiers = combineReducers({
    completionLevel,
    interventionLevel
});

//  END:  reducers
// ===============================================