import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from '../styles';
import ads from '../../../utils/AdsV2/triggerAds';

const AboutApp = ({navigation, currentAppData}) => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate('About this app');
        ads.showInterstitial();
      }}>
      <View>
        <Text style={styles.aboutAppTitle}>About this app</Text>
        <Text numberOfLines={2} style={styles.desc}>
          {currentAppData.summary}
        </Text>
      </View>
      <Icon name="arrowright" size={24} style={styles.aboutAppIcon} />
    </TouchableOpacity>
  );
};

const mapStateToProps = state => ({
  currentAppData: state.appState.currentAppData,
});

export default connect(mapStateToProps)(AboutApp);
