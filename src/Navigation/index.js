/**
 * 1. check connnection and set the notification thing
 */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import RNBootSplash from 'react-native-bootsplash';

import AuthScreen from './AuthScreen';
import PrivateScreens from './PrivateScreens';
import PostAuth from './PostAuth';
import {fetchAppData, getUserInfo} from '../redux/actions';

const Screens = ({appState}) => {
  const {location, isTermsAccepted} = appState;
  if (!location || !isTermsAccepted) {
    return <PostAuth />;
  } else {
    return <PrivateScreens />;
  }
};

const Navigator = props => {
  const {
    auth,
    fetch,
    getAuth,
    appState: {location, isTermsAccepted},
  } = props;

  useEffect(() => {
    // Fetch Apps, Countries, Ads
    fetch();

    // Auth
    getAuth();

    // Hide Splash
    RNBootSplash.hide({duration: 250});
  }, [fetch, getAuth]);

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
  fetch: bindActionCreators(fetchAppData, dispatch),
  getAuth: bindActionCreators(getUserInfo, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigator);
