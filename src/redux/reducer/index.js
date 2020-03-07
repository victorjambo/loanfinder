import {combineReducers} from 'redux';

import adReducer from './adReducer';
import authReducer from './authReducer';
import networkReducer from './networkReducer';
import appStateReducer from './appStateReducer';

export default combineReducers({
  ads: adReducer,
  connection: networkReducer,
  auth: authReducer,
  appState: appStateReducer,
});
