import constants from '../meta/constants';


export const addPublicHolidayAction = (newHoliday) => ({
	type: constants.ADD_PUBLIC_HOLIDAYS,
	payload: newHoliday
});


export const updatePublicHolidayAction = (updatedHoliday) => ({
	type: constants.UPDATE_PUBLIC_HOLIDAYS,
	payload: updatedHoliday
})


// ==================================================================



const sortPublicHolidays = (publicHolidays) => {
	let sortedHolidays = publicHolidays.map((holiday) => holiday);

	sortedHolidays.sort((a, b) => {
		const aDay = new Date(a.day),
			  bDay = new Date(b.day);
		return (aDay > bDay) ? 1 : (aDay < bDay) ? -1 : 0;
	});

	return sortedHolidays;
}


const publicHolidays = (state, action) => {
	switch(action.type) {
		case constants.ADD_PUBLIC_HOLIDAYS:
			return sortPublicHolidays([...state, action.payload]);
		
		case constants.UPDATE_PUBLIC_HOLIDAYS:
			return sortPublicHolidays(
				state.map(
					(holiday) => (holiday.day === action.payload.oldDate) ? {
						date: action.payload.newDate, default: false
					}: holiday
				)
			)
		default:
			return state;
	}
}