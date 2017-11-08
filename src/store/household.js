import {constants} from '../meta/constants';


// ===============================================
// START: actionCreators


export const householdAction = (household) => {
	return {
		type: constants.UPDATE_HOUSEHOLD,
		payload: household
	}
}


//  END:  actionCreators
// ===============================================
// START: reducers


export const household = (state = [], action) => {
	switch (action.type) {
		case constants.UPDATE_HOUSEHOLD:
			return action.payload;
			// break;
		default:
			return state;
	}
}

//  END:  reducers
// ===============================================