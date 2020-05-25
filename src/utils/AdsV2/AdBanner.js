import React from 'react';
import {PublisherBanner} from 'react-native-admob';

import {logError, ERROR, logInfo, INFO} from '../logger';
import {ADMOB_PROD_IDS, ADMOB_TEST_IDS} from '../../redux/consts';

let admob = Object.assign({}, ADMOB_PROD_IDS);

if (__DEV__) {
  admob = Object.assign({}, ADMOB_TEST_IDS);
}

class AdBanner extends React.Component {
  componentDidMount() {
    PublisherBanner.simulatorId = admob.ADMOB_BANNER_ID;
  }

  render() {
    return (
      <PublisherBanner
        adSize="banner"
        adUnitID={admob.ADMOB_BANNER_ID}
        testDevices={[PublisherBanner.simulatorId]}
        onAdLoaded={() => logInfo(INFO.AD.LOADED.BANNER)}
        onAdFailedToLoad={error =>
          logError(ERROR.AD.FAILED_TO_LOAD.BANNER, error)
        }
      />
    );
  }
}

export default AdBanner;
