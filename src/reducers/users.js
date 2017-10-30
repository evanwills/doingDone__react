import constants from '../meta/constants';

export const users = (state = [], action) => {
    switch(action.type) {
        case constants.ADD_USER :
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
