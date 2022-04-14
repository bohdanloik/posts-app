import actionTypes from '../constants/actionTypes';

const setPostsAC = (response) => ({ type: actionTypes.SET_POSTS, payload: response });

export default setPostsAC;
