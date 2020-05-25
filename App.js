import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/redux/store';

import Navigator from './src/Navigation';
import OverlaySpinner from './src/Components/OverlaySpinner';
import AdManager from './src/utils/AdsV2/AdManager';

import colors from './src/utils/colors';
import AdBanner from './src/utils/AdsV2/AdBanner';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      <AdBanner />
      <Navigator />
      <OverlaySpinner />
      <AdManager />
    </Provider>
  );
};

export default App;
