import * as actionTypes from './actionTypes';

export const initialState = {
	tokens: {
		access: {
			type: null,
			value: null,
			expiresIn: null,
		},
		refresh: {
			type: null,
			value: null,
		},
	},
	user: {
		_id: null,
		resource_id: null,
	},
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE:
			const newState = {
        ...action.session,
      };
			return newState;
		default:
			return state;
	}
};
