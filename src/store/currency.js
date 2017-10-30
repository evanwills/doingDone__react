import constants from '../meta/constants';


export const currency = (state = {}, action) => {
    switch(action.type) {
        case constants.UPDATE_CURRENCY:
            return action.payload;
        default:
            return state;
    }
}