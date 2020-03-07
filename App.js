import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/redux/store';

import Navigator from './src/Navigation';

import colors from './src/utils/colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      <Navigator />
    </Provider>
  );
};

export default App;
