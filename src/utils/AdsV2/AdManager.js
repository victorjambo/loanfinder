import React from 'react';
import {AdMobInterstitial} from 'react-native-admob';

import {logError} from '../logger';
import {ADMOB_PROD_IDS, ADMOB_TEST_IDS} from '../../redux/consts';

let admob = Object.assign({}, ADMOB_PROD_IDS);

if (__DEV__) {
  admob = Object.assign({}, ADMOB_TEST_IDS);
}

const EVENT_LISTENER = {
  LOADED: 'adLoaded',
  OPENED: 'adOpened',
  CLOSED: 'adClosed',
  REWARDED: 'rewarded',
  LEFTAPPLICATION: 'adLeftApplication',
  FAILEDTOLOAD: 'adFailedToLoad',
};

class AdManager extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AdMobInterstitial.simulatorId = admob.ADMOB_INTERSTITIAL_ID;
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID(admob.ADMOB_INTERSTITIAL_ID);

    AdMobInterstitial.addEventListener(EVENT_LISTENER.CLOSED, () => {
      AdMobInterstitial.requestAd().catch(error =>
        logError('ERROR_REQUESTING_INTERSTITIAL_AFTER_CLOSE', error),
      );
    });

    AdMobInterstitial.requestAd().catch(error =>
      logError(
        'ERROR_REQUESTING_INTERSTITIAL_COMPONENTDIDMOUNT' + error.code,
        error,
      ),
    );
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }

  render() {
    return null;
  }
}

export default AdManager;
