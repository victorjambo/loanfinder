import {combineReducers} from 'redux';

import adReducer from './adReducer';
import authReducer from './authReducer';
import appStateReducer from './appStateReducer';

export default combineReducers({
  ads: adReducer,
  auth: authReducer,
  appState: appStateReducer,
});
