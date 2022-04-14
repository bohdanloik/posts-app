import  actionTypes  from '../constants/actionTypes';

const initialState = {
    comments: [],
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_COMMENTS: {
            return { ...state, comments: action.payload }
        }
        default: return state
    }
};

export default commentsReducer;
