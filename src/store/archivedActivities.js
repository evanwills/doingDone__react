import constants from '../meta/constants';

export const autoArchiveActivitiesAction = (activities) => ({
    type: constants.AUTO_ARCHIVE_ACTIVITIES,
    payload: activities
});

export const deleteArchivedActivitiesAction = (activities) => ({
	type: constants.DELETE_ARCHIVED_ACTIVITY,
	payload: activities
});



// ==================================================================

export const archivedActivities = (state = [], action) => {
    switch(action.type) {
        case constants.AUTO_ARCHIVE_ACTIVITIES:
            return [...state, action.payload];
        case constants.DELETE_ARCHIVED_ACTIVITY:
            return state.filter(
                (activity) => (action.payload.indexOf(activity.id) > -1) ? false : true
            );
        default:
            return state;
    }
}