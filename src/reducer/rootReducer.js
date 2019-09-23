import { combineReducers } from 'redux';
import lists from './lists';

export default combineReducers({
  listFile: lists,
});
