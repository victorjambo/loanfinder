import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AppView from '../screens/Apps/AppView';
import Tabs from './BottomTabNavigator';

import {HOME, APPVIEW} from './routes';

const Stack = createStackNavigator();

const PrivateScreens = () => (
  <Stack.Navigator screenOptions={{headerTintColor: 'white'}}>
    <Stack.Screen name={HOME} component={Tabs} options={{headerShown: false}} />
    <Stack.Screen
      name={APPVIEW}
      component={AppView}
      options={{headerTransparent: true, title: ''}}
    />
  </Stack.Navigator>
);

export default PrivateScreens;
