import React from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {View} from 'react-native-animatable';

import styles from './styles';
import colors from '../../utils/colors';

export const OverlaySpinnerContainer = ({animation, duration}) => (
  <View style={styles.container}>
    <View
      style={styles.wrapperContainer}
      animation={animation}
      duration={duration}>
      <ActivityIndicator color={colors.primary} size="large" />
    </View>
  </View>
);

const OverlaySpinner = ({showSpinner}) => {
  return (
    showSpinner && (
      <OverlaySpinnerContainer animation="zoomIn" duration={1000} />
    )
  );
};

const mapStateToProps = state => ({
  showSpinner: state.appState.showSpinner,
});

export default connect(mapStateToProps)(OverlaySpinner);
