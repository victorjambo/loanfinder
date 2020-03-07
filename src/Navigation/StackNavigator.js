import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from '../screens/Landing';
import Auth from '../screens/Auth';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
    <Stack.Screen name="Home" component={Landing} />
  </Stack.Navigator>
);

export default StackNavigator;
