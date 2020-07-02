import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AUTH, ARTICLE} from './routes';
import Onboarding from '../screens/Onboarding';
import colors from '../utils/colors';

const Stack = createStackNavigator();

const AuthScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Onboarding"
      component={Onboarding}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={AUTH.name}
      component={AUTH.component}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="learn"
      component={ARTICLE.component}
      options={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        title: 'Loaner - Personal loan finder',
      }}
    />
  </Stack.Navigator>
);

export default AuthScreen;
