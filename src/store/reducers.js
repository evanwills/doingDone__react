// import constants from '../meta/constants';
import { combineReducers } from 'redux';

import {scheduledItems} from './schedule';
import {todaysMeta} from './todaysMeta';
import {schoolTerms} from './schoolTerms';
import {tasks} from './tasks';
import {publicHolidays} from './publicHolidays';
import {users} from './users';
import {errors} from './errors';
import {valueModifiers} from './valueModifiers';
import {currency} from './currency';
import {activities} from './activities';
import {pay} from './pay';
import {accountLedger} from './accountLedger';

export default combineReducers({
	valueModifiers,
	currency,
	pay,
	schoolTerms,
	publicHolidays,
	todaysMeta,
	users,
	tasks,
	scheduledItems,
	activities,
	errors,
	accountLedger
});