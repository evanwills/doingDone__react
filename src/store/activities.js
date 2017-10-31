import constants from '../meta/constants';


export const addActivityAction = (activity) => ({
    type: constants.ADD_ACTIVITY,
    payload: activity
});

export const updateActivityAction = (activity) => ({
	type: constants.UPDATE_ACTIVITY,
	payload: activity
});


export const archiveActivityAction = (activityIDs) => ({
	type: constants.ARCHIVE_ACTIVITY,
	payload: activityIDs
});


// ==================================================================


export const activities = (state = [], action) => {
    switch(action.type) {
        case constants.ADD_ACTIVITY:
            return [...state, action.payload];
        case constants.UPDATE_ACTIVITY:
            return state.map(
                (activity) => (action.payload.id === activity.id) ? action.payload : activity
            );
        case constants.ARCHIVE_ACTIVITY:
            return state.filter(
                (activity) => (action.payload.indexOf(activity.id) > -1) ? false : true
            );
        default:
            return state;
    }
}