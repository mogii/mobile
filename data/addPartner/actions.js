import * as api from '../rootApi';
import * as actionTypes from './actionTypes';

export const update = payload => ({
  type: actionTypes.UPDATE,
  payload,
});

export const empty = () => ({
  type: actionTypes.EMPTY,
});

export const processWithOCRNLP = image => {
  return dispatch => {
    dispatch({ type: `${actionTypes.PROCESS_IMAGE}_START`, payload: { image, processing: true } })
    return api.scanBusinessCard({ image: image.base64 })
      .then(result => {
        return dispatch({ type: `${actionTypes.PROCESS_IMAGE}_SUCCESS`, payload: { ...result.data, processing: false } });
      })
    .catch(() => dispatch({ type: `${actionTypes.PROCESS_IMAGE}_ERROR` }))
  }
}

export const addPartner = () => {
  return (dispatch, getState) => {
    dispatch({ type: `${actionTypes.ADD_PARTNER}_START` });
    const state = getState().data.addPartner;
    const payload = {
      tags: state.tags,
      companyName: state.ORGANIZATION,
      name: state.PERSON,
      email: state.emails[0],
      message: state.message,
    };
    return api.addPartner(payload)
    .then(() => {
      return dispatch({ type: `${actionTypes.ADD_PARTNER}_SUCCESS`, payload });
    })
    .catch(() => dispatch({ type: `${actionTypes.ADD_PARTNER}_ERROR` }))
  }
}
