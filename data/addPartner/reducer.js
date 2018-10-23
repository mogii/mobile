import * as actionTypes from './actionTypes';
import { Camera } from "expo";
import R from 'ramda';

const initialState = {
  type: Camera.Constants.Type.back,
  image: null,
  PERSON: null,
  ORGANIZATION: null,
  emails: [],
  tags: ['WTM 2018'],
  message: 'It was great to meet you at WTM!  As discussed, here\'s the link to connect and get started on TourConnect.  I look forward to speaking with you again soon.',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${actionTypes.PROCESS_IMAGE}_START`:
    case `${actionTypes.PROCESS_IMAGE}_SUCCESS`:
    case actionTypes.UPDATE:
      return R.merge(state, action.payload);
    case `${actionTypes.ADD_PARTNER}_START`:
      return R.merge(state, { processing: true });
    case `${actionTypes.ADD_PARTNER}_SUCCESS`:
      return R.merge(state, { processing: false, partnerAdded: true });
    case `${actionTypes.PROCESS_IMAGE}_ERROR`:
    case `${actionTypes.ADD_PARTNER}_ERROR`:
      return R.merge(state, { processing: false, errorOccured: true });
    case actionTypes.EMPTY:
      return initialState;
    default:
      return state;
  }
};
