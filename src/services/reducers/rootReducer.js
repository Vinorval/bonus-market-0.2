import { combineReducers } from 'redux';

import { authReducet } from './authReducer';

export const rootReducer = combineReducers({
    auth: authReducet,
});