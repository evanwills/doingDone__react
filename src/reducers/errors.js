import constants from '../meta/constants';


const errors = (initalState, action) => {
	console.log(action.payload);
	switch (action.type) {
		case constants.ADD_ERROR:
			return [...initalState, action.payload];
			// break;
		case constants.REMOVE_ERROR:
			if (typeof action.payload === 'string') {
				return initalState.filter((error) => (error === action.payload)?false:true);
			} else {
				return initalState.filter((error, i) => (i === action.payload)?false:true);
			}
			// break;
		default:
			return initalState;
	}
}
export default errors