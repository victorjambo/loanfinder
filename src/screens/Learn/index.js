import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../../utils/colors';
import RecentArticles from './RecentArticles';
import TopTopics from './TopTopics';
import ads from '../../utils/AdsV2/triggerAds';

const Learn = ({navigation}) => {
  const handleClick = () => {
    // ads.showInterstitial(); // TODO ADS
    navigation.navigate('FAQS');
  };

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Discover Something new</Text>
        <Text style={styles.heroSubTitle}>
          Financial advice to grow your money
        </Text>
      </View>

      <View style={styles.body}>
        <RecentArticles navigation={navigation} />
        <TopTopics navigation={navigation} />

        <TouchableOpacity
          style={[styles.faqContainer, styles.shadow, styles.row]}
          onPress={handleClick}>
          <Text style={styles.faqText}>FAQs</Text>
          <FontAwesome
            name="chevron-right"
            size={30}
            color={colors.primaryText}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
  },
  hero: {
    height: 125,
    padding: 20,
    paddingTop: 25,
    backgroundColor: '#dbefe1',
  },
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: '#000',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  heroSubTitle: {
    color: colors.grey,
  },
  body: {
    marginLeft: 10,
  },
  faqContainer: {
    padding: 20,
    backgroundColor: colors.white,
    marginLeft: -10,
    marginTop: 50,
  },
  faqText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    alignSelf: 'center',
    position: 'absolute',
    right: 20,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.9,
    elevation: 10,
  },
  row: {
    flexDirection: 'row',
  },
});

export default Learn;
