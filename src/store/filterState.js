import {constants, scheduledItemStatus} from '../meta/constants';


// ===============================================
// START: actionCreators


export const filterStateAction = (filter) => {
	if (scheduledItemStatus.indexOf(filter) === -1) {
		return {
			type: constants.ADD_ERROR,
			payload: 'Unknown filter "' + filter + '"'
		};
	} else {
		return {
			type: constants.SET_FILTER_STATE,
			payload: filterState
		}
	}
}


//  END:  actionCreators
// ===============================================
// START: reducers


export const filterState = (state = [], action) => {
	switch (action.type) {
		case constants.SET_FILTER_STATE:
			return action.payload;
		default:
			return state;
	}
}

//  END:  reducers
// ===============================================