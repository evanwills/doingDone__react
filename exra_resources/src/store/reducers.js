import C from '../constants.js'



export const taskAction = (tasks, action) => {

	if (action.type === C.CREATE_TASK) {
		// need to work out how to append new task to task array.
		return [
			...tasks,
			action.payload
		];
	} else {
		let newTasks = [];

		if (action.type === C.UPDATE_TASK) {
			if (tasks.length > 0) {
				for (let a = 0; a < tasks.length; a += 1) {
					if (tasks[a].id === action.payload.id) {
						newTasks.push(action.payload);
					} else {
						newTasks.push(tasks[a]);
					}
				}
			} else {
				newTasks = [action.payload];
			}
		} else if (action.type === C.DELETE_TASK) {
			return tasks.filter((task, i) => task.id !== action.payload);
		}

		return newTasks;
	}
};