import C from './constants.js';
import {taskAction} from './store/reducers.js';


let now = Date.now();

const state = [
	{
		id: 1,
		// created: now.toISOString(),
		created: Date.now(),
		active: true,
		name: "Brush teeth",
		description: "",
		visualURL: "",
		startTime: 1900,
		endTime: 1950,
		extendedEndTime: 2000,
		allowPartial: false,
		required: true,
		priority: 1,
		value: 0.5,
		rotating: false,
		assignedTo: null,
		approvers: [],
		responsibles: [],
		period: null,
		SchoolTermMode: "Not applicable"
	},
	{
		id: 2,
		// created: now.toISOString(),
		created: Date.now(),
		active: true,
		name: "Get jarmies on",
		description: "",
		visualURL: "",
		startTime: 1930,
		endTime: 2000,
		extendedEndTime: 2015,
		allowPartial: false,
		required: true,
		priority: 1,
		value: 0.5,
		rotating: false,
		assignedTo: null,
		approvers: [],
		responsibles: [],
		period: null,
		SchoolTermMode: "Not applicable"
	}
];

const action = {
	type: C.UPDATE_TASK,
	payload: {
		id: 1,
		// created: now.toISOString(),
		created: Date.now(),
		active: true,
		name: "Brush teeth",
		description: "",
		visualURL: "",
		startTime: 1900,
		endTime: 1950,
		extendedEndTime: null,
		allowPartial: false,
		required: true,
		priority: 1,
		value: 1,
		rotating: false,
		assignedTo: null,
		approvers: [],
		responsibles: [],
		period: null,
		SchoolTermMode: "Not applicable"
	}
};

const nextState = taskAction(state, action);


// console.log(`

// 	initial state: ${JSON.stringify(state)}
// 	action: ${JSON.stringify(action)}
// 	nextState: ${JSON.stringify(nextState)}

// `);


const extraAction = {
	type: C.DELETE_TASK,
	payload: 1
}

const thirdState = taskAction(state, extraAction);

// console.log(`

// 	extraAction: ${JSON.stringify(extraAction)}
// 	thirdState: ${JSON.stringify(thirdState)}

// `);
