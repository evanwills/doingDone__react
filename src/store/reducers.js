// import constants from '../meta/constants';
import { combineReducers } from 'redux';

import {accountLedger} from './accountLedger';
import {archiveActivityMeta} from './archiveActivityMeta';
import {activities} from './activities';
import {currency} from './currency';
import {errors} from './errors';
import {archivedActivities} from './archivedActivities';
import {payMeta} from './pay';
import {publicHolidays} from './publicHolidays';
import {scheduledItems} from './schedule';
import {schoolTerms} from './schoolTerms';
import {tasks} from './tasks';
import {todaysMeta} from './todaysMeta';
import {users} from './users';
import {valueModifiers} from './valueModifiers';

export default combineReducers({
	valueModifiers,
	currency,
	payMeta,
	archiveActivityMeta,
	schoolTerms,
	publicHolidays,
	todaysMeta,
	users,
	tasks,
	scheduledItems,
	activities,
	archivedActivities,
	errors,
	accountLedger
});