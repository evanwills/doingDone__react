import {constants} from '../meta/constants';

const adjustOverDue = (points, completed, due, extended, overdue) => {
    console.log('points: ', points);
    console.log('completed: ', completed);
    console.log('due: ', due);
    console.log('extended: ', extended);
    console.log('overdue: ', overdue);
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


export const addActivityAction = (scheduledItem) => {
    return {
        type: constants.ADD_ACTIVITY,
        payload: {
            id: scheduledItem.id,
            user: scheduledItem.user.id,
            task: scheduledItem.task.id,
            completed: new Date(),
            status: constants.activityStatus.indexOf('Completed'),
            completionLevel: 1,
            interventionLevel: 0,
            acknowledged: null,
            acknowledgedBy: null,
            computedValue: scheduledItem.points,
            instantReward: scheduledItem.instantReward,
            instantRewardGranted: false
        }
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

//  END:  reducers
// ===============================================