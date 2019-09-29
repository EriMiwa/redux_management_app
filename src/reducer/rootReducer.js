import { combineReducers } from 'redux';
import lists from './lists';
import userLogin from './userLogin'

export default combineReducers({
  listFile: lists,
  userFile: userLogin
});
