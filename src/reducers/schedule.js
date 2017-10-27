import constants from '../meta/constants';


export const scheduledItemsAction = (today, tasks, users, pointsToCurrency) => ({
    type: constants.AUTO_SCHEDULE_TASK,
    payload: {
        tasks: tasks,
        users: users,
		today: today,
		pointsToCurrency: pointsToCurrency
    }
})


// ==================================================================



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





export const scheduledItems = (state, action) => {
	let i = 0,
		tmpUsers = [],
		newSchedule = [],
		rotation;
		
	switch(action.type) {
		case constants.AUTO_SCHEDULE_TASK:
			const today = action.payload.today,
				  users =  action.payload.users.filter((user) => !user.approver),
				  availableTasks = action.payload.tasks.filter(
					  (task) => (task[today.dayOfWeek] && (task.schoolTerm === today.isSchoolTerm || task.schoolHolidays === today.isSchoolHoliday || task.publicHolidays === today.isPublicHoliday)));

			
			for (i = 0; i < availableTasks.length; i += 1) {
				tmpUsers = (availableTasks[i].users.length === 0) ? users : availableTasks[i].users;

				if (availableTasks[i].rotating !== null) {
					rotation = nextInRotation(tmpUsers, availableTasks[i].rotating);
					tmpUsers = tmpUsers.filter((user) => user.id === rotation.assignedTo);
				}
				newSchedule = [
					...newSchedule,
					...tmpUsers.map((user) => ({
						id: user.id + today.date + availableTasks[i].id,
						user: user,
						task: availableTasks[i],
						status: 'Queued',
						activity: null,
						available: today.dateFromTime(availableTasks[i].available),
						due: today.dateFromTime(availableTasks[i].due),
						extendedDue: today.dateFromTime(availableTasks[i].extendedEndTime),
						value: availableTasks[i].value,
						pointsToCurrency: action.payload.pointsToCurrency
					})
				)]
			}
			return newSchedule;
		default:
			return state;
	}
}