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
} from '../redux/actions';
import localStorage, {TABLES} from '../utils/localStorage';

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
  appState,
  changeAppsData,
  changeLocation,
  changeSavedApps,
  hideSplashScreen,
}) => {
  const {apps, location, splashState} = appState;
  useEffect(() => {
    getApps(); // TODO Why is this here
    localStorage
      .multiGetItem([TABLES.APPS, TABLES.LOCATION, TABLES.SAVED_APPS])
      .then(db => {
        const [localApps, localLocation, localSavedApps] = db;

        // Apps Handler
        if (localApps.length && !apps.length) {
          changeAppsData(localApps);
        } else if (!localApps.length && !apps.length) {
          getApps();
        }

        // Location Handler
        if (localLocation && !location) {
          changeLocation(localLocation);
        } else if (!localLocation && location) {
          localStorage.setItem(TABLES.LOCATION, location);
        }

        // Saved Apps handler
        changeSavedApps({
          saved: false,
          newSavedApps: localSavedApps,
        });

        hideSplashScreen();
      })
      .catch(() => {
        getApps();
        hideSplashScreen();
      });
    // localStorage.clearAll();

    // Hide Splash
    if (splashState) {
      RNBootSplash.hide({duration: 250});
    }
  }, [
    apps,
    getApps,
    location,
    splashState,
    changeAppsData,
    changeLocation,
    changeSavedApps,
    hideSplashScreen,
  ]);

  return (
    <NavigationContainer>
      {auth.isLoggedIn || auth.skipAuth ? (
        <Screens appState={appState} />
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
