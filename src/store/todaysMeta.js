import {constants} from '../meta/constants';


// ===============================================
// START: actionCreators


export const todaysMetaAction = (now) => ({
	type: constants.AUTO_SET_TODAYS_METADATA,
	payload: now
})


//  END:  actionCreators
// ===============================================
// START: reducers


export const makeDateUseful = (today) => {
	const daysOfWeek = [
		'sunday',
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday'
	];

	const dateFromTime = (time) => (time)?
		new Date(today.toString().replace(/[0-9]{2}(?::[0-9]{2}){2}(?= GMT)/, time)):null;

	return {
		date: today.toISOString().replace(/T.*$/,''),
		dateFromTime: dateFromTime,
		dayOfWeek: daysOfWeek[today.getDay()],
		end: dateFromTime('23:59:59'),
		start: dateFromTime('00:00:00'),
	}
}


const isPublicHoliday = (holidays, now) => {
	if (holidays.reduce((count, holiday) => new Date(holiday.date).valueOf() === now.valueOf() ? count + 1 : count, 0) > 0) {
		return true;
	} else {
		return false;
	}
}



const schoolDayMeta = (schoolTerms, todaysDate) => {
	let i = 0,
		j = 0,
		thisStart,
		thisEnd,
		isSchoolTerm = false,
		isSchoolHoliday = false;

	if (schoolTerms.length > 0) {
		for (i = 0; i < schoolTerms.length; i += 1) {
			thisStart = new Date(schoolTerms[i].start);
			thisEnd = new Date(schoolTerms[i].end);

			if (thisStart <= todaysDate && thisEnd >= todaysDate) {
				isSchoolTerm = true;
				break;
			} else if (i > 0) {
				j = i - 1;
				if (new Date(schoolTerms[j].end) < todaysDate && thisStart > todaysDate ) {
					isSchoolHoliday = true;
					break;
				}
			}
		}
	}
	return {
		isSchoolTerm: isSchoolTerm,
		isSchoolHoliday: isSchoolHoliday
	}
}


export const todaysMeta = (state = {}, action) => {
	if (action.type === 'AUTO_SET_TODAYS_METADATA') {
		return {
			...makeDateUseful(action.now),
			...schoolDayMeta(action.getState.schoolTerms, action.now),
			isPublicHoliday: isPublicHoliday(action.getState.publicHolidays, action.now)
		};
	} else {
		return state;
	}
}


//  END:  reducers
// ===============================================