import React from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../utils/colors';

import {HOME, PROFILE, SEARCH, PROFILE_AUTH} from './routes';

const Tab = createBottomTabNavigator();

const BottomTab = ({isLoggedIn}) => {
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
          return <AntDesign name={iconName} size={size} color={color} />;
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
      <Tab.Screen
        name={PROFILE.name}
        component={isLoggedIn ? PROFILE.component : PROFILE_AUTH.component}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(BottomTab);
