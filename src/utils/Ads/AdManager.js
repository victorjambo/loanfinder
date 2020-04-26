import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AdMobInterstitial, AdMobRewarded} from 'react-native-admob';

import {logError, logInfo, ERROR, INFO} from '../logger';
import {
  adLoadedRewarded,
  adLoadedInterstitial,
  resetAdLoadedRewarded,
  resetAdLoadedInterstitial,
} from '../../redux/actions';

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
    if (this.props.FS_INTERSTETIAL) {
      this.admobInterstitial();

      this.admobRewarded();

      // Request either Rewarded or Interstitial
      AdMobInterstitial.requestAd()
        .then(() => logInfo(INFO.AD.REQUEST.INTERSTITIAL))
        .catch(error => logError(ERROR.AD.REQUEST.INTERSTITIAL, error));
      AdMobRewarded.requestAd()
        .then(() => logInfo(INFO.AD.REQUEST.REWARDED))
        .catch(error => logError(ERROR.AD.REQUEST.REWARDED, error));
    }
  }

  componentWillUnmount() {
    if (this.props.FS_INTERSTETIAL) {
      AdMobRewarded.removeAllListeners();
      AdMobInterstitial.removeAllListeners();
    }
  }

  admobInterstitial = () => {
    const {ads} = this.props;
    // AdMobInterstitial
    AdMobInterstitial.simulatorId = ads.interstetial;
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID(ads.interstetial);

    AdMobInterstitial.addEventListener(EVENT_LISTENER.LOADED, () => {
      this.props.adLoadedInterstitial();
      logInfo(INFO.AD.LOADED.INTERSTITIAL);
    });
    AdMobInterstitial.addEventListener(EVENT_LISTENER.FAILEDTOLOAD, error =>
      logError(ERROR.AD.FAILED_TO_LOAD.INTERSTITIAL, error),
    );
    AdMobInterstitial.addEventListener(EVENT_LISTENER.OPENED, () => {
      logInfo(INFO.AD.OPENED.INTERSTITIAL);
    });
    AdMobInterstitial.addEventListener(EVENT_LISTENER.CLOSED, () => {
      this.props.resetAdLoadedInterstitial();
      AdMobInterstitial.requestAd()
        .then(() => logInfo(INFO.AD.REQUEST.INTERSTITIAL))
        .catch(error => logError(ERROR.AD.REQUEST.INTERSTITIAL, error));
      logInfo(INFO.AD.CLOSED.INTERSTITIAL);
    });
  };

  admobRewarded = () => {
    const {ads} = this.props;
    // AdMobRewarded
    AdMobRewarded.simulatorId = ads.reward;
    AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId]);
    AdMobRewarded.setAdUnitID(ads.reward);

    AdMobRewarded.addEventListener(EVENT_LISTENER.REWARDED, () =>
      logInfo(INFO.AD.REWARDED.SUCCESS),
    );
    AdMobRewarded.addEventListener(EVENT_LISTENER.OPENED, () => {
      logInfo(INFO.AD.OPENED.REWARDED);
    });
    AdMobRewarded.addEventListener(EVENT_LISTENER.LOADED, () => {
      this.props.adLoadedRewarded();
      logInfo(INFO.AD.LOADED.REWARDED);
    });
    AdMobRewarded.addEventListener(EVENT_LISTENER.FAILEDTOLOAD, error =>
      logError(ERROR.AD.FAILED_TO_LOAD.REWARDED, error),
    );
    AdMobRewarded.addEventListener(EVENT_LISTENER.CLOSED, () => {
      this.props.resetAdLoadedRewarded();
      AdMobRewarded.requestAd()
        .then(() => logInfo(INFO.AD.REQUEST.INTERSTITIAL))
        .catch(error => logError(ERROR.AD.REQUEST.REWARDED, error));
      logInfo(INFO.AD.CLOSED.REWARDED);
    });
    // log churn rate
    AdMobRewarded.addEventListener(EVENT_LISTENER.LEFTAPPLICATION, () =>
      logInfo(INFO.AD.REWARDED.CHURN),
    );
  };

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  ads: state.ads,
  FS_INTERSTETIAL: state.featureSwitch.FS_INTERSTETIAL,
});

const mapDispatchToProps = dispatch => ({
  adLoadedRewarded: bindActionCreators(adLoadedRewarded, dispatch),
  adLoadedInterstitial: bindActionCreators(adLoadedInterstitial, dispatch),
  resetAdLoadedRewarded: bindActionCreators(resetAdLoadedRewarded, dispatch),
  resetAdLoadedInterstitial: bindActionCreators(
    resetAdLoadedInterstitial,
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdManager);
