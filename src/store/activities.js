import constants from '../meta/constants';


export const activities = (state = [], action) => {
    switch(action.type) {
        case constants.ADD_ACTIVITY:
            return [...state, action.payload];
        case constants.UPDATE_ACTIVITY:
            return state.map(
                (activity) => (action.payload.id === activity.id) ? action.payload : activity
            );
        default:
            return state;
    }
}