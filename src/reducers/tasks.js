import constants from '../meta/constants';

const tasksAdmin = (initialState, action) => {

	const exists = (tasks, newID) => (tasks.reduce((count, task) => (task.id === newID)?count += 1:count,0))?true:false;

	switch (action.type) {
		case constants.ADD_TASK:
			if (exists(initialState, action.payload.id) === false) {
				return [...initialState, action.payload];
			}
			break;

		case constants.DELETE_TASK:
			if (exists(initialState, action.payload)) {
				return initialState.filter((task) => (task.id === action.payload) ? false : true);
			}
			break;

		case constants.UPDATE_TASK:
			if (exists(initialState, action.payload.id)) {
				return initialState.map((task) => (task.id === action.payload.id)?action.payload:task);
			}
			break;
	}
	return initialState;
}

export default tasksAdmin