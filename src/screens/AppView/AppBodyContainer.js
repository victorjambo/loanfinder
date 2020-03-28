import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../Apps/styles';

const AppBodyContainer = ({whatsNew}) => {
  return (
    <View style={styles.verticalSpace}>
      <Text style={styles.title}>What's new</Text>
      <ScrollView>
        <Text style={styles.desc}>{whatsNew}</Text>
      </ScrollView>
    </View>
  );
};

export default AppBodyContainer;
