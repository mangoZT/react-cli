import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import counter  from 'reducers/counter';
import userInfo  from 'reducers/userInfo';
import {combineReducers} from "redux";

let store = createStore(combineReducers({counter, userInfo}), applyMiddleware(thunkMiddleware));

export default store;