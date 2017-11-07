import {constants} from '../meta/constants';


// ===============================================
// START: actionCreators


export const activeUserAction = (user) => {
	return {
		type: constants.SET_ACTIVE_USER,
		payload: user.id
	}
}


//  END:  actionCreators
// ===============================================
// START: reducers


export const activeUser = (state = null, action) => {
	return (action.type === constants.SET_ACTIVE_USER) ? action.payload : state;
}

//  END:  reducers
// ===============================================