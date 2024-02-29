import { createStore, applyMiddleware } from'redux';
import rootReducer from'./reducers';
import reducersTool from '../utils/reducers';

const combineReducers = {
    ...reducersTool,
   ...rootReducer
};

const store = createStore(combineReducers, applyMiddleware());

export default store;