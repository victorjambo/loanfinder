import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import AuthScreen from './AuthScreen';
import PrivateScreens from './PrivateScreens';

const Navigator = ({auth}) => {
  return (
    <NavigationContainer>
      {auth.isLoggedIn || auth.skipAuth ? <PrivateScreens /> : <AuthScreen />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navigator);
