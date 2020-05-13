import {combineReducers} from 'redux';

import adReducer from './adReducer';
import authReducer from './authReducer';
import appStateReducer from './appStateReducer';
import settingsReducer from './settingsReducer';
import featureSwitchReducer from './featureSwitchReducer';

export default combineReducers({
  ads: adReducer,
  auth: authReducer,
  appState: appStateReducer,
  settings: settingsReducer,
  featureSwitch: featureSwitchReducer,
});
