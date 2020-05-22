import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AdMobInterstitial} from 'react-native-admob';

import {logError, logInfo, ERROR, INFO} from '../logger';
import {
  adLoadedInterstitial,
  adRequestedInterstitial,
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
    const {ads} = this.props;

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

    // Request either Rewarded or Interstitial
    AdMobInterstitial.requestAd()
      .then(() => {
        this.props.adRequestedInterstitial();
        logInfo(INFO.AD.REQUEST.INTERSTITIAL);
      })
      .catch(error => logError(ERROR.AD.REQUEST.INTERSTITIAL, error));
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  ads: state.ads,
});

const mapDispatchToProps = dispatch => ({
  adLoadedInterstitial: bindActionCreators(adLoadedInterstitial, dispatch),
  adRequestedInterstitial: bindActionCreators(
    adRequestedInterstitial,
    dispatch,
  ),
  resetAdLoadedInterstitial: bindActionCreators(
    resetAdLoadedInterstitial,
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdManager);
