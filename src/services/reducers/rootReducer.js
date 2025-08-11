import { combineReducers } from 'redux';

import { profileReducet } from './profileReducer';

export const rootReducer = combineReducers({
    profile: profileReducet,
});