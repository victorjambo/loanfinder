import React from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator, View} from 'react-native';

import styles from './styles';
import colors from '../../utils/colors';

export const OverlaySpinnerContainer = () => (
  <View style={styles.container}>
    <View style={styles.wrapperContainer}>
      <ActivityIndicator color={colors.primary} size="large" />
    </View>
  </View>
);

const OverlaySpinner = ({showSpinner}) => {
  return showSpinner && <OverlaySpinnerContainer />;
};

const mapStateToProps = state => ({
  showSpinner: state.appState.showSpinner,
});

export default connect(mapStateToProps)(OverlaySpinner);
