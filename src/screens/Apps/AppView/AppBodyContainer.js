import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import AboutApp from './AboutApp';
import Screenshots from './Screenshots';
import AppCategory from './AppCategory';
import DeveloperContact from './DeveloperContact';

const AppBodyContainer = ({navigation, item}) => {
  return (
    <View style={[styles.verticalSpace, styles.appBodyContainer]}>
      {item.recentChanges && (
        <View>
          <Text style={styles.appBodySectionTitle}>What's new</Text>
          <Text style={styles.desc}>{item.recentChanges}</Text>
        </View>
      )}
      <AboutApp navigation={navigation} item={item} />
      <AppCategory />
      <Screenshots />
      <DeveloperContact />
    </View>
  );
};

export default AppBodyContainer;
