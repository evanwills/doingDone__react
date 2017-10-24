import constants from '../meta/constants';


const errors = (initalState, action) => {
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
export default errors