import React from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {View} from 'react-native-animatable';

import styles from './styles';
import colors from '../../utils/colors';

const OverlaySpinner = ({showSpinner}) => {
  console.log(showSpinner);
  return (
    showSpinner && (
      <View style={styles.container}>
        <View
          style={styles.wrapperContainer}
          animation="zoomIn"
          duration={1000}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      </View>
    )
  );
};

const mapStateToProps = state => ({
  showSpinner: state.appState.showSpinner,
});

export default connect(mapStateToProps)(OverlaySpinner);
