import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/redux/store';

import Auth from './src/screens/Auth';

import colors from './src/utils/colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      <SafeAreaView>
        <Auth />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
