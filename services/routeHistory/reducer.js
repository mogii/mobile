import * as actionTypes from './actionTypes';
import R from 'ramda';

const HISTORY_SIZE = 10;

export const initialState = {
	items: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PUSH:
			return {
				...state,
				items: R.uniq([...(state.items || []).slice(-HISTORY_SIZE), action.route]).filter(x => x),
			};
    case actionTypes.POP:
      return {
        ...state,
        items: R.dropLast(1, state.items).filter(x => x),
      };
		default:
			return state;
	}
};
