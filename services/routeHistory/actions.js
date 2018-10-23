import * as actionTypes from './actionTypes';

export const push = route => ({
	type: actionTypes.PUSH,
	route,
});
export const pop = () => ({ type: actionTypes.POP });
