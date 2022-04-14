import  actionTypes  from '../constants/actionTypes';

const initialState = {
    posts: [],
    post: {},
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_POSTS: {
            return { ...state, posts: action.payload }
        }
        case actionTypes.SET_POST: {
            return { ...state, post: action.payload }
        }
        default: return state
    }
};

export default postsReducer;