import constants from '../meta/constants';


const updateHousehold = (initalState, action) => {
	if (action.type === constants.UPDATE_HOUSEHOLD) {
		return action.payload;
	} else {
		return initalState;
	}
};

export default updateHousehold;