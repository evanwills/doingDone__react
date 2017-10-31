import constants from '../meta/constants';
import PropTypes from 'prop-types';


// ===============================================
// START: actionCreators


export const accountLedgerAction = (ledgerEntry) => {
    return {
        type: constants.ADD_ACCOUNT_LEDGER_ENTRY,
        payload: ledgerEntry
    }
}


//  END:  actionCreators
// ===============================================
// START: reducers


export const accountLedger = (state = [], action) => {
    switch(action.type) {
        case constants.ADD_ACCOUNT_LEDGER_ENTRY:
            return [...state, action.payload];
        default:
            return state;
    }
}


//  END:  reducers
// ===============================================