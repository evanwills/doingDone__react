import constants from '../meta/constants';


export const pay = (state = {}, action) => {
    return (action.type === constants.UPDATE_PAY) ? {...state, ...action.payload} : state;
}