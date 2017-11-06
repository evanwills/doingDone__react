import {constants} from '../meta/constants';


// ===============================================
// START: actionCreators


export const payMetaAction = (weeks, day) => {
    return {
        type: constants.UPDATE_PAY,
        payload: {
            period: weeks,
            start: day
        }
    }
}


//  END:  actionCreators
// ===============================================
// START: reducers


export const payMeta = (state = {}, action) => {
    switch(action.type) {
        case constants.UPDATE_PAY:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

//  END:  reducers
// ===============================================