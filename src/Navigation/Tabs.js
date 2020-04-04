import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../utils/colors';

import {HOME, PROFILE, SEARCH} from './routes';

import styles from './styles';

const Tab = createBottomTabNavigator();
// TODO: overlayColor from tabs
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          switch (route.name) {
            case HOME.name:
              iconName = 'home';
              break;
            case PROFILE.name:
              iconName = 'user';
              break;
            case SEARCH.name:
              iconName = 'search1';
              break;
            default:
              break;
          }
          return (
            <AntDesign
              name={iconName}
              size={size}
              color={color}
              style={styles.icon}
            />
          );
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.grey,
        labelStyle: {
          marginTop: -20,
          paddingBottom: 20,
        },
        style: {
          height: 90,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
        },
      }}>
      <Tab.Screen name={HOME.name} component={HOME.component} />
      <Tab.Screen name={SEARCH.name} component={SEARCH.component} />
      <Tab.Screen name={PROFILE.name} component={PROFILE.component} />
    </Tab.Navigator>
  );
};

export default Tabs;
