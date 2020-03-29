import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from '../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {ABOUT_APP_FULL_DESC} from '../../../Navigation/routes';

const AboutApp = ({navigation, currentAppData}) => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate(ABOUT_APP_FULL_DESC.name);
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
