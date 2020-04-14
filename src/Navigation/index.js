/**
 * 1. Location: how will I handle this
 * 2. get apps: check how many times we fetch apps
 * 3. persist saved apps
 */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import RNBootSplash from 'react-native-bootsplash';

import AuthScreen from './AuthScreen';
import PrivateScreens from './PrivateScreens';
import PostAuth from './PostAuth';
import {
  fetchApps,
  setAppsData,
  setLocation,
  hideSplash,
  setSavedApps,
  loginSuccess,
} from '../redux/actions';

const Screens = ({appState}) => {
  const {location, isTermsAccepted} = appState;
  if (!location || !isTermsAccepted) {
    return <PostAuth />;
  } else {
    return <PrivateScreens />;
  }
};

const Navigator = ({
  auth,
  getApps,
  appState: {splashState, location, isTermsAccepted},
  hideSplashScreen,
}) => {
  useEffect(() => {
    // TODO fetching data here will be called evertime we navigate screens and state changes. eg from settings clicking on login changes auth
    getApps();

    // Hide Splash  hideSplashScreen();
    RNBootSplash.hide({duration: 250});
  }, [getApps]);

  return (
    <NavigationContainer>
      {auth.isLoggedIn || auth.skipAuth ? (
        <Screens appState={{location, isTermsAccepted}} />
      ) : (
        <AuthScreen />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  appState: state.appState,
});

const mapDispatchToProps = dispatch => ({
  getApps: bindActionCreators(fetchApps, dispatch),
  changeAppsData: bindActionCreators(setAppsData, dispatch),
  changeLocation: bindActionCreators(setLocation, dispatch),
  hideSplashScreen: bindActionCreators(hideSplash, dispatch),
  changeSavedApps: bindActionCreators(setSavedApps, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigator);
