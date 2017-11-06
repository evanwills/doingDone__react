import {constants} from '../meta/constants';
import {sortByDate} from '../utils/utilityFunctions';


// ===============================================
// START: actionCreators


export const addTaskAction = (task) => {
	return {
		type: constants.ADD_TASK,
		payload: task
	}
}

export const deleteTaskAction = (task) => {
	return {
		type: constants.DELETE_TASK,
		payload: task.id
	}
}

export const updateTaskAction = (task) => {
	return {
		type: constants.UPDATE_TASK,
		payload: task
	}
}


//  END:  actionCreators
// ===============================================
// START: reducers


export const tasks = (state = [], action) => {

	const taskExists = (tasks, newID) => (tasks.reduce((count, task) => (task.id === newID)?count += 1:count,0))?true:false;

	switch (action.type) {
		case constants.ADD_TASK:
			if (taskExists(state, action.payload.id) === false) {
				return sortByDate([...state, action.payload], 'due');
			}
			break;

		case constants.DELETE_TASK:
			if (taskExists(state, action.payload)) {
				return state.filter(
					(task) => (task.id === action.payload) ?
						false :
						true
				);
			}
			break;

		case constants.UPDATE_TASK:
			if (taskExists(state, action.payload.id)) {
				return sortByDate(
					state.map(
						(task) => (task.id === action.payload.id) ?
							action.payload :
							task
					), 'due'
				);
			}
			break;
		default:
		return state;
	}
}

//  END:  reducers
// ===============================================