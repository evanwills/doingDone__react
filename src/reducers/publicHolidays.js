import constants from '../meta/constants';
import {sortByDate} from '../utils/utilityFunctions';


export const addPublicHolidayAction = (newHoliday) => ({
	type: constants.ADD_PUBLIC_HOLIDAYS,
	payload: newHoliday
});


export const updatePublicHolidayAction = (updatedHoliday) => ({
	type: constants.UPDATE_PUBLIC_HOLIDAYS,
	payload: updatedHoliday
})


// ==================================================================





const publicHolidays = (state, action) => {
	switch(action.type) {
		case constants.ADD_PUBLIC_HOLIDAYS:
			return sortByDate([...state, action.payload], 'day');
		
		case constants.UPDATE_PUBLIC_HOLIDAYS:
			return sortByDate(
				state.map(
					(holiday) => (holiday.day === action.payload.oldDate) ? {
						date: action.payload.newDate, default: false
					}: holiday
				),
				'day'
			)
		default:
			return state;
	}
}