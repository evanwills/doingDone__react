import {constants} from '../meta/constants';


// ===============================================
// START: actionCreators


export const scheduledItemsAction = (scheduledItems) => ({
	type: constants.AUTO_SCHEDULE_TASK,
	payload: scheduledItems
});

export const removeScheduledItemsAction = (scheduledItems) => ({
	type: constants.AUTO_REMOVE_SCHEDULED_TASKS,
	payload: scheduledItems
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

const sortScheduled = (inputArray, field = 'due') => {
	// clone the input array so we don't mutate it.
	let sortedInput = inputArray.map((inputItem) => inputItem);

	if (typeof field !== 'string' || (field !== 'due' && field !== 'available' && field !== 'extendedDue')) {
		field = 'due';
	}

	sortedInput.sort((a, b) => {
		// sort by field
		if (a[field] > b[field]) {
			return 1;
		} else if (a[field] < b[field]) {
			return -1;
		} else {
			if (a.priority > b.priority) {
				return 1;
			} else if (a.priority < b.priority) {
				return -1;
			} else {
				return 0;
			}
		}
	});
	return sortedInput;
}

const isNewTask = (tasks, taskID) => {
	const c = tasks.reduce((count, task) => (task.id === taskID) ? count += 1 : count, 0);
	return (c > 0)?false:true;
}

const getScheduledTasks = (state, user, tasks, today, pointsToCurrency) => {
	let newSchedule = [];
		// i = 0,
		// tmpUsers = [],
		// rotation;
	const tmpID = user + today.date.replace(/[^0-9]+/g, '');
	
	// get a list of tasks that fit today's criteria
	const availableTasks = tasks.filter(
		(task) => (
			task[today.dayOfWeek] && (
				task.schoolTerm === today.isSchoolTerm ||
				task.schoolHolidays === today.isSchoolHoliday ||
				task.publicHolidays === today.isPublicHoliday
			)
		)
	);

	newSchedule = removeScheduled(state, today.end);
	
	newSchedule = [...newSchedule, ...availableTasks.filter(
		task => (isNewTask(newSchedule, tmpID + task.id) && (task.users.length === 0 || task.users.indexOf(user) > -1))
	).map(task => {
		return {
			id: tmpID + task.id,
			userID: user,
			taskID: task.id,
			status: 0,
			hasActivity: false,
			available: today.dateFromTime(task.available),
			due: today.dateFromTime(task.due),
			extendedDue: today.dateFromTime(task.extendedEndTime),
			value:task.value,
			pointsToCurrency: pointsToCurrency,
			priority: task.priority,
			steps: task.steps
		}
	})];



	// // if the task is a rotating task, then only schedule
	// // it for the next person in the rotation.
	// if (availableTasks[i].rotating !== null) {
	// 	rotation = nextInRotation(tmpUsers, availableTasks[i].rotating);
	// 	tmpUsers = tmpUsers.filter(
	// 		(user) => user.id === rotation.assignedTo
	// 	);
	// }

	return sortScheduled(newSchedule);
}


export const scheduledItems = (state = [], action) => {
	let user;
	
	switch(action.type) {
		case constants.AUTO_SCHEDULE_TASK:
			user = action.getState.users.filter(user => (user.active && !user.approver && user.id === action.getState.activeUser));
			if (user.length !== 0) {
				return getScheduledTasks(state, user[0].id, action.getState.tasks, action.getState.todaysMeta);
			} else {
				return state;
			}

		case constants.AUTO_REMOVE_SCHEDULED_TASKS:
			return removeScheduled(state, action.getState.todaysMeta.end);

		default:
			return state;
	}
}


//  END:  reducers
// ===============================================