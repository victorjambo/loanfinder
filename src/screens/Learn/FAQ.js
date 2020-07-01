import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FAQ = () => {
  return (
    <View style={styles.container}>
      <Text>FAQ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default FAQ;
