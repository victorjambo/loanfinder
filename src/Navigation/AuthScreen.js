import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Auth from '../screens/Auth';

import {AUTH} from './routes';

const Stack = createStackNavigator();

const AuthScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name={AUTH} component={Auth} options={{headerShown: false}} />
  </Stack.Navigator>
);

export default AuthScreen;
