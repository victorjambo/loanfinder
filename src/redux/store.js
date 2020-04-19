import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['ads'],
};

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export default createStore(reducer, composeEnhancers(applyMiddleware(thunk))); // NOT USED

const persistedReducer = persistReducer(persistConfig, reducer);

export const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return {store, persistor: persistStore(store)};
};
