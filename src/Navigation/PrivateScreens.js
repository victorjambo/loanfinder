import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  HOME_TABS,
  APPVIEW,
  ABOUT_APP_FULL_DESC,
  SEARCH_RESULTS,
} from './routes';

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
    <Stack.Screen
      name={ABOUT_APP_FULL_DESC.name}
      component={ABOUT_APP_FULL_DESC.component}
      options={{title: ABOUT_APP_FULL_DESC.name, headerTintColor: 'black'}}
    />
    <Stack.Screen
      name={SEARCH_RESULTS.name}
      component={SEARCH_RESULTS.component}
      options={({route}) => ({
        title: `Results for "${route.params.search}"`,
        headerTintColor: 'black',
      })}
    />
  </Stack.Navigator>
);

export default PrivateScreens;
