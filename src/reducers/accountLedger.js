import constants from '../meta/constants';


export const accountLedger = (state = [], action) => {
    switch(action.type) {
        case constants.ADD_ACCOUNT_LEDGER_ENTRY:
            return [...state, action.payload];
        default:
            return state;
    }
}