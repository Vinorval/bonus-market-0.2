import { combineReducers } from 'redux';

import { authReducet } from './authReducer';
import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
    auth: authReducet,
    product: productsReducer
});