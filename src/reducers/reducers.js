import constants from '../meta/constants';

export const schedule = (state, action) => {
	switch(action.type) {
		case constants.AUTO_SET_TODAYS_METADATA:
			const day = action.payload.date.day(),
				  startTime = new Date(Date().replace(/[0-9]{2}(?::[0-9]{2}){2}(?= GMT)/, '00:00:00')),
			endTime = new Date(Date().replace(/[0-9]{2}(?::[0-9]{2}){2}(?= GMT)/, '23:59:59'));

			return {

			}
		case constants.AUTO_SCHEDULE_TASK:
			return action.payload.tasks.filter((task, i, allTasks) => {
				if (
					task[action.payload.today.dayOfWeek === true &&
					action.payload.scheduledItems.reduce((count, scheduledTask) => {(scheduledTask.id === payload.user.id + payload.today.date + task.id) ? count + 1 : count}, 0) === 0
				) {
						return true;
				}
				return false;
			}).map((task) => {
				return {
					id: payload.user.id + payload.today.date + task.id,
					user: activity.payload.user,
					task: task,
					status: 'Queued',
					activity: null,
					available: new date(action.payload.today.date + 'T' + task.startTime + action.payload.today + action.payload.timezone),
					due: new date(action.payload.today.date + 'T' + task.endTime + action.payload.today + action.payload.timezone),
					extendedDue: (extendedEndTime)?
						new date(action.payload.today.date + 'T' + task.extendedEndTime + action.payload.today + action.payload.timezone):
						null,
					value: task.value,
					pointsToCurrency: action.payload.pointsToCurrency
				}
			});
			break;

	}
}



export const errors = (initalState, action) => {
	console.log(action.payload);
	switch (action.type) {
		case constants.ADD_ERROR:
			return [...initalState, action.payload];
			// break;
		case constants.REMOVE_ERROR:
			return initalState.filter((error, i) => (i === action.payload)?false:true);
			// break;
		default:
			return initalState;
	}
}

export const updateHousehold = (initalState, action) => {
	if (action.type === constants.UPDATE_HOUSEHOLD) {
		return action.payload;
	} else {
		return initalState;
	}
};
