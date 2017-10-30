import constants from '../meta/constants';
import { combineReducers } from 'redux';

import scheduledItems from './schedule';
import todaysMeta from './todaysMeta';
import schoolTerms from './schoolTerms';
import tasks from './tasks';
import publicHolidays from './publicHolidays';
import errors from './errors';
import updateHousehold from './updateHousehold';

export default combineReducers({
	schoolTerms,
	todaysMeta,
	schoolTerms,
	tasks,
	publicHolidays,
	errors
});