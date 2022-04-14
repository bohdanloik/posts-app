import actionTypes from '../constants/actionTypes';

const setCommentsAC = (response) => ({ type: actionTypes.SET_COMMENTS, payload: response });

export default setCommentsAC;
