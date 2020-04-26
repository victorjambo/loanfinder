import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/redux/store';

import Navigator from './src/Navigation';
import OverlaySpinner from './src/Components/OverlaySpinner';
import AdManager from './src/utils/Ads/AdManager';

import colors from './src/utils/colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      <Navigator />
      <OverlaySpinner />
      <AdManager />
    </Provider>
  );
};

export default App;
