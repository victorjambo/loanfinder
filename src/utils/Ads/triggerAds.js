import {AdMobInterstitial, AdMobRewarded} from 'react-native-admob';

import store from '../../redux/store';
import {logError, logInfo, ERROR, INFO} from '../logger';

export class Ads {
  constructor() {
    this.ads = {};
    this.featureSwitch = {};
    this.incrementAd = () => {};
  }

  isEven = () => {
    const {adCount, fequency} = this.ads;
    return adCount !== 0 && adCount % fequency === 0;
  };

  rewarded = () =>
    AdMobRewarded.showAd()
      .then(() => logInfo(INFO.AD.SHOW.REWARDED))
      .catch(error => logError(ERROR.AD.SHOW.REWARDED, error));

  interstitial = () =>
    AdMobInterstitial.showAd()
      .then(() => logInfo(INFO.AD.SHOW.INTERSTITIAL))
      .catch(error => logError(ERROR.AD.SHOW.INTERSTITIAL, error));

  showInterstitial = () => {
    if (this.ads.isInterstitialReady) {
      this.interstitial();
    }
  };

  showRewarded = () => {
    if (this.featureSwitch.rewarded) {
      this.rewarded();
    }
  };

  showFullScreenAd = () => {
    const isInterstatial =
      this.ads.showInterstitial &&
      (this.isEven() && this.ads.adCount !== this.ads.rewardedFequency);
    const isRewarded =
      this.ads.isRewardedReady &&
      this.ads.adCount !== 0 &&
      this.ads.adCount % this.ads.rewardedFequency === 0;

    if (isInterstatial) {
      this.showInterstitial();
    } else if (isRewarded) {
      this.showRewarded();
    }
  };

  withAds = () => {
    if (this.featureSwitch.ads) {
      this.showFullScreenAd();
      store.dispatch(this.incrementAd);
    }
  };

  showAds = incrementAd => {
    const state = store.getState();
    this.ads = state.ads;
    this.featureSwitch = state.featureSwitch;
    this.incrementAd = incrementAd;
    this.withAds();
  };

  incrementAdCountNoShowAd = incrementAd => store.dispatch(incrementAd);
}

const ads = new Ads();

export default ads;
