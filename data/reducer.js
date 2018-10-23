import { combineReducers } from 'redux';
import { reducer as usersReducer } from './users/reducer';
import { reducer as addPartnerReducer } from './addPartner/reducer';

export const reducer = combineReducers({
	users: usersReducer,
	addPartner: addPartnerReducer,
});
