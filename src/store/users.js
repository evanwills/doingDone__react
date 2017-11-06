import {constants} from '../meta/constants';


// ===============================================
// START: actionCreators


export const addUserAction = (newUser) => {
    return {
        type: constants.ADD_USER,
        payload: newUser
    }
}

export const updateUserAction = (user) => {
    return {
        type: constants.UPDATE_USER,
        payload: user
    }
}

export const deleteUserAction = (user) => {
    return {
        type: constants.UPDATE_USER,
        payload: user.id
    }
}


//  END:  actionCreators
// ===============================================
// START: reducers


export const users = (state = [], action) => {
    switch(action.type) {
        case constants.ADD_USER:
            return [...state, action.payload];
            
        case constants.UPDATE_USER:
            return state.map(
                (user) => (action.payload.id === user.id) ? action.payload : user
            );
            
        case constants.DELETE_USER:
            return state.filter(
                (user) => (action.payload.id === user.id) ? false : true
            );
        default:
            return state;
    }
}


//  END:  reducers
// ===============================================