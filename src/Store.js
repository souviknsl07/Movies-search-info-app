import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/Index';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const middleware =[thunk];
const initialState={};

const store = createStore(rootReducer, initialState, composeWithDevTools
	(applyMiddleware(...middleware)));

export default store;