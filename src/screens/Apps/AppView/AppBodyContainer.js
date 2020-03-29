import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import styles from '../styles';
import AboutApp from './AboutApp';
import Screenshots from './Screenshots';
import DeveloperContact from './DeveloperContact';

const AppBodyContainer = ({navigation, currentAppData}) => {
  return (
    <View style={[styles.verticalSpace, styles.appBodyContainer]}>
      {currentAppData.recentChanges && (
        <View>
          <Text style={styles.appBodySectionTitle}>What's new</Text>
          <Text style={styles.desc}>{currentAppData.recentChanges}</Text>
        </View>
      )}
      <AboutApp navigation={navigation} />
      <Screenshots />
      <DeveloperContact />
    </View>
  );
};

const mapStateToProps = state => ({
  currentAppData: state.appState.currentAppData,
});

export default connect(mapStateToProps)(AppBodyContainer);
