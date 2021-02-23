/* eslint-disable no-undef */
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { fieldReducer } from './field-reducer';
import { soundsReducer } from './sounds-reducer';

const reducers = combineReducers({
  field: fieldReducer,
  sounds: soundsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.store = store;

export default store;
