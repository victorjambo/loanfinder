import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Landing from '../screens/Landing';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen name="Home" component={Landing} />
      <Tab.Screen name="Landing" component={Landing} />
    </Tab.Navigator>
  );
};

export default Tabs;
