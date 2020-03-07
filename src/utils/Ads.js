import {
  PublisherBanner,
  AdMobInterstitial,
  AdMobRewarded,
} from 'react-native-admob';

import _ from './constants';
import {logEvent} from './Analytics';

class Ads {
  constructor() {
    this.isHome = true;
    this.adCount = 1;
    PublisherBanner.simulatorId = _.ADMOB_BANNER_ID;
    AdMobInterstitial.simulatorId = _.ADMOB_INTERSTITIAL_ID;
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID(_.ADMOB_INTERSTITIAL_ID);
    AdMobRewarded.setAdUnitID(_.ADMOB_REWARDED);
  }

  getHome = () => this.isHome;
  setAdCount = () => (this.adCount += 1);
  setHomeTrue = () => (this.isHome = true);
  setHomeFalse = () => (this.isHome = false);

  isEven = count => {
    return count % 2 === 0;
  };

  showFullScreenAd = () => {
    if (!this.getHome()) {
      const isInterstatial = this.isEven(this.adCount) && this.adCount !== 8;
      const isRewarded = this.adCount % 8 === 0;

      if (isInterstatial) {
        this.showInterstitial();
      } else if (isRewarded) {
        this.showRewarded();
      } else {
        this.setAdCount();
      }
    }
  };

  showInterstitial = () => {
    this.setAdCount();
    AdMobInterstitial.requestAd()
      .then(() => AdMobInterstitial.showAd())
      .catch(error => {
        logEvent('AdMobInterstitialFailedToLoad', {
          error: error.toString(),
          errorObj: JSON.stringify(error),
        });
      });
  };

  showRewarded = () => {
    this.setAdCount();
    AdMobRewarded.requestAd()
      .then(() => AdMobRewarded.showAd())
      .catch(error => {
        logEvent('AdMobRewardedFailedToLoad', {
          error: error.toString(),
          errorObj: JSON.stringify(error),
        });
      });
  };
}

export const adsInstance = new Ads();

export default Ads;
