import React from 'react';
import {connect} from 'react-redux';
import {PublisherBanner} from 'react-native-admob';

import {logError, ERROR, logInfo, INFO} from '../logger';

export const AD_SIZE = {
  BANNER: 'banner',
  FULL_BANNER: 'fullBanner',
  LEADER_BOARD: 'leaderboard',
  SMART_BANNER: 'smartBanner',
  LARGE_BANNER: 'largeBanner',
  MEDIUM_RECTANGLE: 'mediumRectangle',
  SMART_BANNER_PORTRAIT: 'smartBannerPortrait',
  SMART_BANNER_LANDSCAPE: 'smartBannerLandscape',
};

class AdBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    PublisherBanner.simulatorId = this.props.banner;
  }

  render() {
    const {
      banner,
      FS_BANNER,
      screen = '',
      adSize = AD_SIZE.SMART_BANNER,
    } = this.props;

    if (!FS_BANNER) {
      return null;
    }

    return (
      <PublisherBanner
        adSize={adSize}
        adUnitID={banner}
        testDevices={[PublisherBanner.simulatorId]}
        onAdLoaded={() => logInfo(INFO.AD.LOADED.BANNER + '_' + screen)}
        onAdFailedToLoad={error =>
          logError(ERROR.AD.FAILED_TO_LOAD.BANNER, error)
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  banner: state.ads.banner,
  FS_BANNER: state.featureSwitch.FS_BANNER,
});

export default connect(mapStateToProps)(AdBanner);
