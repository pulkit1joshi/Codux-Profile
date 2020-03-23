import { combineReducers } from 'redux';
import userReducer from './userReducer';
import contestReducer from './cfReducer';

export default combineReducers({
    contest: contestReducer,
    user: userReducer,
});