/**
 * 1. check connnection and set the notification thing
 */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import RNBootSplash from 'react-native-bootsplash';
import {AdMobInterstitial} from 'react-native-admob';

import AuthScreen from './AuthScreen';
import PrivateScreens from './PrivateScreens';
import PostAuth from './PostAuth';
import {getUserInfo} from '../redux/actions';
import {ADMOB_PROD_IDS, ADMOB_TEST_IDS} from '../redux/consts';

let admob = Object.assign({}, ADMOB_PROD_IDS);

if (__DEV__) {
  admob = Object.assign({}, ADMOB_TEST_IDS);
}

const Screens = ({appState}) => {
  const {location, isTermsAccepted, isLanguageSet} = appState;
  if (!location || !isTermsAccepted || !isLanguageSet) {
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
    appState: {location, isTermsAccepted, isLanguageSet},
  } = props;

  useEffect(() => {
    // Auth
    getAuth();

    AdMobInterstitial.simulatorId = admob.ADMOB_INTERSTITIAL_ID;
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID(admob.ADMOB_INTERSTITIAL_ID);

    AdMobInterstitial.requestAd()
      .then(() => {
        RNBootSplash.hide({duration: 250});
      })
      .catch(() => {
        RNBootSplash.hide({duration: 250});
      });
  }, [fetch, getAuth]);

  return (
    <NavigationContainer>
      {auth.isLoggedIn || auth.skipAuth ? (
        <Screens appState={{location, isTermsAccepted, isLanguageSet}} />
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
  getAuth: bindActionCreators(getUserInfo, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigator);
