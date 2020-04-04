import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/redux/store';

import Navigator from './src/Navigation';
import OverlaySpinner from './src/Components/OverlaySpinner';

import colors from './src/utils/colors';
import Toast from './src/Components/Toast';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      <Navigator />
      <OverlaySpinner />
      <Toast />
    </Provider>
  );
};

export default App;
