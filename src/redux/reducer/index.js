import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import adReducer from './adReducer';
import authReducer from './authReducer';
import networkReducer from './networkReducer';
import appStateReducer from './appStateReducer';
import settingsReducer from './settingsReducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['isLoggedIn'],
};

const appStatePersistConfig = {
  key: 'appState',
  storage: AsyncStorage,
};

export default combineReducers({
  ads: adReducer,
  connection: networkReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  appState: persistReducer(appStatePersistConfig, appStateReducer),
  settings: settingsReducer,
});
