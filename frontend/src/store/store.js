import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import RootReducer from '../reducers';

const store = createStore(RootReducer, {}, applyMiddleware(logger));

export default store; 
