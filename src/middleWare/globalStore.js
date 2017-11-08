/**
 * globalStore adds the global store to every action.
 */
export default store => next => action => {
	next({...action, getState: store.getState(), now: new Date() });
}