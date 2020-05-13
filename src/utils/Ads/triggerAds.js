import {AdMobInterstitial} from 'react-native-admob';

import store from '../../redux/store';
import {logError, logInfo, ERROR, INFO} from '../logger';
import {ADMOB_PROD_IDS, ADMOB_TEST_IDS} from '../../redux/consts';

let admob = Object.assign({}, ADMOB_PROD_IDS);

if (__DEV__) {
  admob = Object.assign({}, ADMOB_TEST_IDS);
}

export class Ads {
  constructor() {
    this.ads = {
      appId: admob.ADMOB_AD_ID,
      banner: admob.ADMOB_BANNER_ID,
      interstetial: admob.ADMOB_INTERSTITIAL_ID,
      reward: admob.ADMOB_REWARDED,
    };
    this.featureSwitch = {};
    this.incrementAd = () => {};
    this.hasRequestBeenTriggered = false;
  }

  isEven = () => {
    const {adCount, fequency} = this.ads;
    return adCount !== 0 && adCount % fequency === 0;
  };

  interstitial = () =>
    AdMobInterstitial.showAd()
      .then(() => logInfo(INFO.AD.SHOW.INTERSTITIAL))
      .catch(error => logError(ERROR.AD.SHOW.INTERSTITIAL, error));

  showInterstitial = () => {
    const {isInterstitialReady, isInterstitialRequested} = this.ads;
    this.interstitial();
    if (
      !this.hasRequestBeenTriggered &&
      (!isInterstitialReady || !isInterstitialRequested)
    ) {
      AdMobInterstitial.requestAd()
        .then(() => {
          logInfo(INFO.AD.REQUEST.INTERSTITIAL + 'SECOND_CALL');
        })
        .catch(error =>
          logError(ERROR.AD.REQUEST.INTERSTITIAL + 'SECOND_CALL', error),
        );
    }
  };

  checkConditionsAndShowInterstitial = () => {
    if (this.featureSwitch.FS_INTERSTETIAL) {
      if (this.isEven()) {
        this.showInterstitial();
      }
      store.dispatch(this.incrementAd);
    }
  };

  showAds = incrementAd => {
    const state = store.getState();
    this.ads = {
      ...this.ads,
      ...state.ads,
    };
    this.featureSwitch = state.featureSwitch;
    this.incrementAd = incrementAd;
    this.checkConditionsAndShowInterstitial();
  };

  incrementAdCountNoShowAd = incrementAd => store.dispatch(incrementAd);
}

const ads = new Ads();

export default ads;
