// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Whoops404 from './components/genericComponents/whoops404'
// import {Router, Route, hashHistory } from 'react-router';
// import registerServiceWorker from './registerServiceWorker';
// import constants from './meta/constants';
// import { createStore } from 'redux'
import initialState from './meta/initialState.json'
// import tasksAdmin from './reducers/tasks';

// ReactDOM.render(
// 	<Router history={hashHistory}>
// 		<Route path="/" component={App} />
// 		<Route path="/toDoList" component={App}>
// 			<Route path=":filterView" component={App} />
// 		</Route>
// 		<Route path="/addToDo" component={App} />
// 		<Route path="*" component={Whoops404} />
// 	</Router>,
// 	document.getElementById('root')
// );
// registerServiceWorker();



// const state = initialState.tasks.map((task) => task);

// const action = {
// 	type: constants.DELETE_TASK,
// 	payload: "asdfgetReadyForSwimming"
// }
// const nextState = tasksAdmin(state, action);

// console.log('inital state: ', state);
// console.log('action: ', action);
// console.log(' new  state:  ', nextState);
// if (state === nextState) {
// 	console.log('Nothing changes! Something went wrong.');
// }

const makeDateUseful = (today) => {
	const daysOfWeek = [
		'sunday',
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
	];
	const dateTemplate = (time) => new Date(today.toString().replace(/[0-9]{2}(?::[0-9]{2}){2}(?= GMT)/, time));

	return {
		date: today.toISOString().replace(/T.*$/,''),
		dateFromLocalTime: dateTemplate,
		dayOfWeek: daysOfWeek[today.getDay()],
		end: dateTemplate('23:59:59'),
		start: dateTemplate('00:00:00'),
	}
}

const sortPublicHolidays = (publicHolidays) => {
	let sortedHolidays = publicHolidays.map((term) => term);

	sortedHolidays.sort((a, b) => {
		const aDay = new Date(a.day),
			  bDay = new Date(b.day);
		return (aDay > bDay) ? 1 : (aDay < bDay) ? -1 : 0;
	});

	return sortedHolidays;
}

const isPublicHoliday = (holidays, todaysDate) => {
	if (holidays.reduce((count, day) => new Date(day.day).valueOf() === todaysDate.valueOf() ? count + 1 : count, 0) > 0) {
		return true;
	} else {
		return false;
	}
}

const sortTerms = (schoolTerms) => {
	let sortedTerms = schoolTerms.map((term) => term);

	sortedTerms.sort((a, b) => {
		const aStart = new Date(a.start),
			  bStart = new Date(b.start);
		return (aStart > bStart) ? 1 : (aStart < bStart) ? -1 : 0;
	});

	return sortedTerms;
}


const schoolDayMeta = (schoolTerms, todaysDate) => {
	let i = 0,
		j = 0,
		thisStart,
		thisEnd,
		isSchoolTerm = false,
		isSchoolHoliday = false,
		sortedTerms = sortTerms(schoolTerms);

	if (schoolTerms.length > 0) {
		for (i = 0; i < sortedTerms.length; i += 1) {
			thisStart = new Date(sortedTerms[i].start);
			thisEnd = new Date(sortedTerms[i].end);

			if (thisStart <= todaysDate && thisEnd >= todaysDate) {
				isSchoolTerm = true;
				break;
			} else if (i > 0) {
				j = i - 1;
				if (new Date(sortedTerms[j].end) < todaysDate && thisStart > todaysDate ) {
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

console.log(initialState);

var now = new Date(),
	todayObj = makeDateUseful(new Date());

const todaysMeta = {
	...makeDateUseful(now),
	...schoolDayMeta(initialState.schoolTerms, now),
	isPublicHoliday: isPublicHoliday(initialState.publicHolidays, now)
}


console.log('now: ', now);
console.log('todayObj: ', todayObj);
console.log('new Date(2017-09-23): ', new Date('2017-09-23'));
console.log('todaysMeta: ', todaysMeta);



