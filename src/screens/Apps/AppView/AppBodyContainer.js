import React from 'react';
import {View} from 'react-native';

import styles from '../styles';
import AboutApp from './AboutApp';
import Screenshots from './Screenshots';

const AppBodyContainer = ({navigation}) => {
  return (
    <View style={[styles.verticalSpace, styles.appBodyContainer]}>
      <AboutApp navigation={navigation} />
      <Screenshots />
    </View>
  );
};

export default AppBodyContainer;
