import {combineReducers} from 'redux';

import adReducer from './adReducer';
import networkReducer from './networkReducer';

export default combineReducers({
  ads: adReducer,
  connection: networkReducer,
});
