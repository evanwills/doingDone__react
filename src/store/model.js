import {Schema} from 'redux-orm';
import Task from './orm/orm-task';
import TaskRotation from './orm/orm-taskRotation';
import Activity from './orm/orm-activity';
import AccountLedger from './orm/orm-accountLedger';
import Tag from './orm/orm-tag';
import User from './orm/orm-user';

export const schema = new Schema();
schema.register(Task, TaskRotation, Activity, AccountLedger, Tag, User);

export default schema;