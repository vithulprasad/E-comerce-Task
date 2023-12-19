import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './slices/user';
import cart from './slices/cart';

const rootReducer = combineReducers({
  user: user,
  cart: cart,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
