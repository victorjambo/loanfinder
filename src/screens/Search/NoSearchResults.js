import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AdBanner from '../../utils/Ads/AdBanner';

const NoSearchResults = () => {
  return (
    <>
      <View style={[styles.container, styles.body]}>
        <Text style={styles.features}>No Search Results</Text>
      </View>
      <AdBanner screen="NoSearchResults" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  features: {
    padding: 30,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default NoSearchResults;
