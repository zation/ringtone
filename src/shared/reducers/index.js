import { combineReducers } from 'redux';
import { createReducer } from 'relient/reducers';
import account from './account';
import auth from './auth';

export default combineReducers({
  ...createReducer([
    auth,
    account,
  ]),
});
