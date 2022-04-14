import actionTypes from '../constants/actionTypes';

const setUsersAC = (response) => ({ type: actionTypes.SET_USERS, payload: response });

export default setUsersAC;
