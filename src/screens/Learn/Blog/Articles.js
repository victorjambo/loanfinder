import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Articles = () => {
  return (
    <View style={styles.container}>
      <Text>Articles</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Articles;
