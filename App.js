import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import store, {configureStore} from './src/redux/store'; // TODO REMOVE

import Navigator from './src/Navigation';
import OverlaySpinner, {
  OverlaySpinnerContainer,
} from './src/Components/OverlaySpinner';
import AdManager from './src/utils/Ads/AdManager';

import colors from './src/utils/colors';

const {store: persistStore, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={persistStore}>
      <PersistGate loading={<OverlaySpinnerContainer />} persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
        <Navigator />
        <OverlaySpinner />
        <AdManager />
      </PersistGate>
    </Provider>
  );
};

export default App;
