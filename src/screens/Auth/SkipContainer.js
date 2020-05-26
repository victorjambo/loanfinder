import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TouchableOpacity, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import colors from '../../utils/colors';
import ads from '../../utils/AdsV2/triggerAds';
import {logInfo, INFO} from '../../utils/logger';
import {skipAuth} from '../../redux/actions';

const SkipContainer = ({skip}) => {
  const handleClick = () => {
    ads.showInterstitial();
    skip();
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

const mapDispatchToProps = dispatch => ({
  skip: bindActionCreators(skipAuth, dispatch),
});

export default connect(null, mapDispatchToProps)(SkipContainer);
