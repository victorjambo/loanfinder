import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TouchableOpacity, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import colors from '../../utils/colors';
import ads from '../../utils/Ads/triggerAds';
import {logInfo, INFO} from '../../utils/logger';
import {skipAuth, incrementAdCounter} from '../../redux/actions';

const SkipContainer = ({skip, incrementAd, adCount}) => {
  const handleClick = e => {
    ads.interstitial();
    skip();
    if (adCount === 0) {
      ads.showAds(incrementAd);
    }
    logInfo(INFO.SKIP_AUTH);
  };

  return (
    <TouchableOpacity style={styles.skip} onPress={handleClick}>
      <Text style={styles.skipText}>SKIP </Text>
      <FontAwesome name="chevron-right" size={14} color={colors.primaryText} />
      <FontAwesome name="chevron-right" size={14} color={colors.primaryText} />
      <FontAwesome name="chevron-right" size={14} color={colors.primaryText} />
    </TouchableOpacity>
  );
};

const mapStateToProps = state => ({
  adCount: state.ads.adCount,
});

const mapDispatchToProps = dispatch => ({
  skip: bindActionCreators(skipAuth, dispatch),
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SkipContainer);
