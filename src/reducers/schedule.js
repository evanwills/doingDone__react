import constants from '../meta/constants';

const schedule = (state, action) => {
	switch(action.type) {
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
	}
}