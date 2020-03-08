import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TouchableOpacity, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSafeArea} from 'react-native-safe-area-context';

import styles from './styles';
import colors from '../../utils/colors';
import {skipAuth} from '../../redux/actions';

const SkipContainer = ({skip}) => {
  const insets = useSafeArea();
  return (
    <TouchableOpacity
      style={[styles.skip, {paddingBottom: insets.bottom}]}
      onPress={skip}>
      <Text style={styles.skipText}>Skip </Text>
      <FontAwesome name="chevron-right" size={14} color={colors.primaryText} />
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch => ({
  skip: bindActionCreators(skipAuth, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(SkipContainer);
