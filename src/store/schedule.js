import constants from '../meta/constants';
import {sortByDate} from '../utils/utilityFunctions';


// ===============================================
// START: actionCreators


export const scheduledItemsAction = (today, tasks, users, pointsToCurrency) => ({
    type: constants.AUTO_SCHEDULE_TASK,
    payload: {
        tasks: tasks,
        users: users,
		today: today,
		pointsToCurrency: pointsToCurrency
    }
});

export const removeScheduledItemsAction = (today, scheduledItems) => ({
	type: constants.AUTO_REMOVE_SCHEDULED_TASKS,
	payload: {
		scheduledItems: scheduledItems,
		today: today
	}
});


//  END:  actionCreators
// ===============================================
// START: reducers


const nextInRotation = (allUsers, rotating) => {
	let nextUser = allUsers.filter((user) => (rotating.turnsTaken.indexOf(user.id) === -1) ? true : false);
	if (nextUser.length > 0) {
		return {
			"assignedTo": nextUser[0].id,
			"turnsTaken": [...rotating.turnsTaken, rotating.assignedTo]
		}
	} else {
		return {
			"assignedTo": allUsers[0].id,
			"turnsTaken": []
		}
	}
}

const removeScheduled = (scheduledItems, todaysEnd) => {
	return scheduledItems.filter((task) => {
		const taskEnd = (task.extendedEndTime === null) ? task.due : task.extendedEndTime;
		return (todaysEnd > taskEnd) ? true : false;
	});
}



export const scheduledItems = (state = [], action) => {
	let i = 0,
		tmpUsers = [],
		newSchedule = [],
		rotation;

	
	switch(action.type) {
		case constants.AUTO_SCHEDULE_TASK:
			const today = action.payload.today,
				// get a list of users who are NOT approvers and
				// who ARE active
				users = action.payload.users.filter(
							(user) => !user.approver
						).filter(
							(user) => user.active
						),
				// get a list of tasks that fit today's criteria
				availableTasks = action.payload.tasks.filter(
						(task) => (
							task[today.dayOfWeek] && (
								task.schoolTerm === today.isSchoolTerm ||
								task.schoolHolidays === today.isSchoolHoliday ||
								task.publicHolidays === today.isPublicHoliday
							)
						)
				);

			newSchedule = removeScheduled(state, action.payload.today.end);
			
			for (i = 0; i < availableTasks.length; i += 1) {

				// get the list of users eligible to do this task.
				if (availableTasks[i].users.length === 0) {
					tmpUsers = users;
				} else {
					tmpUsers = users.filter(
						(user) => (availableTasks[i].users.indexOf(user.id) > -1 && user.active) ? true : false
					);
				}

				// if the task is a rotating task, then only schedule
				// it for the next person in the rotation.
				if (availableTasks[i].rotating !== null) {
					rotation = nextInRotation(tmpUsers, availableTasks[i].rotating);
					tmpUsers = tmpUsers.filter(
						(user) => user.id === rotation.assignedTo
					);
				}

				// check to see if there's an existing scheduled item
				// matching this ID. If yes remove them from the list
				// of users
				tmpUsers = tmpUsers.filter(
					(user) => newSchedule.reduce(
						(count, task) => (user.id + today.date + task.taskID === task.userID + today.date + task.taskID) ? count + 1 : count, 0
					) > 0 ? false : true
				);

				newSchedule = [
					...newSchedule,
					// add a scheduled task for each user who is
					// elligable to do this task
					...tmpUsers.map((user, i, all) => ({
						id: user.id + today.date + availableTasks[i].id,
						userID: user.id,
						taskID: availableTasks[i].id,
						status: 'Queued',
						hasActivity: false,
						available: today.dateFromTime(availableTasks[i].available),
						due: today.dateFromTime(availableTasks[i].due),
						extendedDue: today.dateFromTime(availableTasks[i].extendedEndTime),
						value: availableTasks[i].value,
						pointsToCurrency: action.payload.pointsToCurrency
					})
				)]
			}
			return sortByDate(newSchedule, 'due');

		// case constants.CREATE_ACTIVITY:
		// 	return state.map((task) => (action.payload.activityID === task.id) ? {...task, hasActivity: true} : task); 

		case constants.AUTO_REMOVE_SCHEDULED_TASKS:
			return newSchedule;

		default:
			return state;
	}
}


//  END:  reducers
// ===============================================