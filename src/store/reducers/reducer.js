import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postReducer';
import commentsReducer from './commentsReducer';

const reducer = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer,
});

export default reducer;