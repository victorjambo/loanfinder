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
import {fetchApps, setSavedApps, adNetwork} from '../redux/actions';

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
  fetchAppsFromFB,
  appState: {location, isTermsAccepted},
  fetchAdNetworkFromFB,
}) => {
  useEffect(() => {
    // TODO fetching data here will be called evertime we navigate screens and state changes. eg from settings clicking on login changes auth
    fetchAppsFromFB();
    fetchAdNetworkFromFB();

    // Hide Splash
    RNBootSplash.hide({duration: 250});
  }, [fetchAppsFromFB, fetchAdNetworkFromFB]);

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
  fetchAppsFromFB: bindActionCreators(fetchApps, dispatch),
  fetchAdNetworkFromFB: bindActionCreators(adNetwork, dispatch),
  changeSavedApps: bindActionCreators(setSavedApps, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigator);
