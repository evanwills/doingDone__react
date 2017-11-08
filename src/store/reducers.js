// import constants from '../meta/constants';
import { combineReducers } from 'redux';

import {accountLedger} from './accountLedger';
import {archiveActivityMeta} from './archiveActivityMeta';
import {archivedActivities} from './archivedActivities';
import {activeUser} from './activeUser';
import {activities} from './activities';
import {currency} from './currency';
import {errors} from './errors';
import {household} from './household';
import {filterState} from './filterState';
import {payMeta} from './payMeta';
import {publicHolidays} from './publicHolidays';
import {scheduledItems} from './schedule';
import {schoolTerms} from './schoolTerms';
import {tasks} from './tasks';
import {todaysMeta} from './todaysMeta';
import {users} from './users';
import {valueModifiers} from './valueModifiers';

export default combineReducers({
	household,
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
	accountLedger,
	activeUser,
	filterState
});