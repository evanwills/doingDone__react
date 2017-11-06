import {constants} from '../meta/constants';


// ===============================================
// START: actionCreators


export const currencyAction = (symbol, decimalPoints, points2Currency) => {
    return {
        type: constants.UPDATE_CURRENCY,
        payload: {
            prefix: symbol,
            rounding: decimalPoints,
            pointsToCurrency: points2Currency
        }
    }
}


//  END:  actionCreators
// ===============================================
// START: reducers


export const currency = (state = {}, action) => {
    switch(action.type) {
        case constants.UPDATE_CURRENCY:
            return action.payload;
        default:
            return state;
    }
}

//  END:  reducers
// ===============================================