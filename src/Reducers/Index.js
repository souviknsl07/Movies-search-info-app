import {combineReducers} from 'redux';
import searchReducers from './searchReducer';

export default combineReducers({
 movies:searchReducers
})

