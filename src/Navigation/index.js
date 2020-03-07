import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './StackNavigator';
import Tabs from './BottomTabNavigator';

const Navigator = ({auth}) => {
  return (
    <NavigationContainer>
      {auth.isLoggedIn || auth.skipAuth ? <Tabs /> : <StackNavigator />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navigator);
