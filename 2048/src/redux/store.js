/* eslint-disable no-undef */
import { combineReducers, createStore } from 'redux';
import { fieldReducer } from './field-reducer';

const reducers = combineReducers({
  field: fieldReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
