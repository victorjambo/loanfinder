import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from '../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {ABOUT_APP_FULL_DESC} from '../../../Navigation/routes';

const AboutApp = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.aboutAppContainer}
      onPress={() => {
        navigation.navigate(ABOUT_APP_FULL_DESC.name);
      }}>
      <Text style={[styles.verticalSpace, styles.aboutAppTitle]}>
        About this app
      </Text>
      <Icon name="arrowright" size={24} style={styles.aboutAppIcon} />
    </TouchableOpacity>
  );
};

export default AboutApp;
