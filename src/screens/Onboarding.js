import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import Swiper from '../Components/Swiper';
import colors from '../utils/colors';

import onboarding1 from '../../assets/onboarding1.png';
import onboarding2 from '../../assets/onboarding2.png';
import onboarding3 from '../../assets/onboarding3.png';

const {width} = Dimensions.get('window');

const Onboarding = ({navigation}) => {
  return (
    <Swiper navigation={navigation}>
      <View style={styles.slide}>
        <Image style={styles.avatar} source={onboarding1} />
        <Text style={styles.header}>Better Deals</Text>
        <Text style={styles.text}>
          Loaner compares short-term cash solutions to cover you until your next
          paycheck
        </Text>
      </View>

      <View style={styles.slide}>
        <Image style={styles.avatar} source={onboarding2} />
        <Text style={styles.header}>Loans on your terms</Text>
        <Text style={styles.text}>
          Take control of your finances with a few taps on your phone.
        </Text>
      </View>

      <View style={styles.slide}>
        <Image style={styles.avatar} source={onboarding3} />
        <Text style={styles.header}>Approved</Text>
        <Text style={styles.text}>
          Get loan approved by your selected personal loan provider
        </Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  header: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
  avatar: {
    width: width / 1.5,
    height: width / 1.5,
    marginBottom: 50,
    marginTop: -100,
  },
});

export default Onboarding;
