import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AUTH} from './routes';

const Stack = createStackNavigator();

const AuthScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={AUTH.name}
      component={AUTH.component}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthScreen;
