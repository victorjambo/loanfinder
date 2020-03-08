import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Landing from '../screens/Landing';
import AppView from '../screens/Apps/AppView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../utils/colors';

import {HOME, PROFILE} from './routes';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case HOME:
              iconName = 'home';
              break;
            case PROFILE:
              iconName = 'user';
              break;
            default:
              break;
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.grey,
      }}>
      <Tab.Screen name={HOME} component={Landing} />
      <Tab.Screen name={PROFILE} component={AppView} />
    </Tab.Navigator>
  );
};

export default Tabs;
