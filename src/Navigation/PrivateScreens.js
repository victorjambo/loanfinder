import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HOME_TABS, APPVIEW} from './routes';

const Stack = createStackNavigator();

const PrivateScreens = () => (
  <Stack.Navigator screenOptions={{headerTintColor: 'white'}}>
    <Stack.Screen
      name={HOME_TABS.name}
      component={HOME_TABS.component}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={APPVIEW.name}
      component={APPVIEW.component}
      options={{headerTransparent: true, title: ''}}
    />
  </Stack.Navigator>
);

export default PrivateScreens;
