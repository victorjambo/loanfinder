import {combineReducers} from 'redux';

import authReducer from './authReducer';
import appStateReducer from './appStateReducer';

export default combineReducers({
  auth: authReducer,
  appState: appStateReducer,
});
