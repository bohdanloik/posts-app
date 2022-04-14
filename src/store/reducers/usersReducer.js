import  actionTypes  from '../constants/actionTypes';

const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USERS : {
            return { ...state, users: action.payload }
        }
        default: return state
    }
};

export default userReducer;
