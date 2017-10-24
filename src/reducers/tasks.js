import constants from '../meta/constants';

const tasksAdmin = (state, action) => {

	const taskExists = (tasks, newID) => (tasks.reduce((count, task) => (task.id === newID)?count += 1:count,0))?true:false;

	switch (action.type) {
		case constants.ADD_TASK:
			if (taskExists(state, action.payload.id) === false) {
				return [...state, action.payload];
			}
			break;

		case constants.DELETE_TASK:
			if (taskExists(state, action.payload)) {
				return state.filter((task) => (task.id === action.payload) ? false : true);
			}
			break;

		case constants.UPDATE_TASK:
			if (taskExists(state, action.payload.id)) {
				return state.map((task) => (task.id === action.payload.id)?action.payload:task);
			}
			break;
	}
	return state;
}

export default tasksAdmin