import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TouchableOpacity, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import colors from '../../utils/colors';
import {skipAuth} from '../../redux/actions';

const SkipContainer = ({skip}) => {
  return (
    <TouchableOpacity
      style={[styles.skip, styles.fixedPosition]}
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
