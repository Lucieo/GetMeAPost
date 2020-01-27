import {combineReducers} from 'redux';
import postReducer from 'reducers/post';

export default combineReducers({
  post:postReducer
});
