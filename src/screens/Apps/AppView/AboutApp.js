import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from '../styles';
import ads from '../../../utils/Ads/triggerAds';
import {incrementAdCounter} from '../../../redux/actions';

const AboutApp = ({navigation, currentAppData, incrementAd}) => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate('About this app');
        ads.showAds(incrementAd);
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

const mapDispatchToProps = dispatch => ({
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutApp);
