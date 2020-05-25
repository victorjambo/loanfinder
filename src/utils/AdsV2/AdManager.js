import React from 'react';
import {AdMobInterstitial} from 'react-native-admob';

import {ADMOB_PROD_IDS, ADMOB_TEST_IDS} from '../../redux/consts';

let admob = Object.assign({}, ADMOB_PROD_IDS);

if (__DEV__) {
  admob = Object.assign({}, ADMOB_TEST_IDS);
}

class AdManager extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AdMobInterstitial.simulatorId = admob.ADMOB_INTERSTITIAL_ID;
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID(admob.ADMOB_INTERSTITIAL_ID);
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }

  render() {
    return null;
  }
}

export default AdManager;
