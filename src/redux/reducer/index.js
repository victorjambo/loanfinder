import {combineReducers} from 'redux';

import adReducer from './adReducer';
import authReducer from './authReducer';
import networkReducer from './networkReducer';

export default combineReducers({
  ads: adReducer,
  connection: networkReducer,
  auth: authReducer,
});
