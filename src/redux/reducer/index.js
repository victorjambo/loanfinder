import {combineReducers} from 'redux';

import authReducer from './authReducer';
import appStateReducer from './appStateReducer';
import networkReducer from './networkReducer';

export default combineReducers({
  auth: authReducer,
  appState: appStateReducer,
  connection: networkReducer,
});
