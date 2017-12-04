/**
 * globalStore adds the global store to every action
 * and the date/time the store was added.
 */
export default store => next => action => {
	next({...action, getState: store.getState(), now: new Date() });
}