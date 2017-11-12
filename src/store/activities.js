import {constants, activityStatus} from '../meta/constants';

const adjustOverDue = (points, completed, due, extended, overdue) => {
    if (completed < due) {
        return points;
    } else if (completed > extended) {
        return 0;
    } else {
        return (((1 - ((completed - due) / (extended - due)) * (1 - overdue)) + overdue) * points);
    }
}

const adjustForLevel = (points, level) => (points !== null && points > 0) ?
    points * level :
    points;

const adjustPoints = (activity, scheduledItem, modifiers) => {
    if (activity.completionTime !== null) {
        return adjustForLevel(
            adjustForLevel(
                adjustOverDue(activity.points, activity.completed, scheduledItem.due, scheduledItem.extendedDue, modifiers.overdue),
                activity.completionLevel
            ),
            modifiers.interventionLevel
        );
    } else {
        return 0;
    }
}

// ===============================================
// START: actionCreators


export const addActivityAction = (itemID) => {
    return {
        type: constants.ADD_ACTIVITY,
        payload: itemID
    };
}

export const updateActivityAction = (activity) => ({
	type: constants.UPDATE_ACTIVITY,
	payload: activity
});


export const archiveActivityAction = (activityIDs) => ({
	type: constants.ARCHIVE_ACTIVITY,
	payload: activityIDs
});


//  END:  actionCreators
// ===============================================
// START: reducers


export const activities = (state = [], action) => {
    switch(action.type) {
        case constants.ADD_ACTIVITY:
            console.log(action.getState.activities, action.getState.payload);
            if (action.getState.activities.reduce((c,activity) => (action.payload === activity.id) ? c + 1 : c, 0) > 0) {
                return state;
            } else {
                const scheduledItem = action.getState.scheduledItems.filter(item => (item.id === action.payload))[0];
                const newActivity = {
                    id: action.payload,
                    user: scheduledItem.userID,
                    task: scheduledItem.taskID,
                    completed: action.now,
                    status: activityStatus.indexOf('Completed'),
                    completionLevel: 1,
                    interventionLevel: 0,
                    acknowledged: null,
                    acknowledgedBy: null,
                    computedValue: scheduledItem.points,
                    instantReward: scheduledItem.instantReward,
                    instantRewardGranted: false
                }
                return [...state, newActivity];
            }
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

//  END:  reducers
// ===============================================