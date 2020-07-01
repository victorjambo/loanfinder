/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import colors from '../../utils/colors';

const temp1 = {backgroundColor: '#fef4ca'};
const temp2 = {backgroundColor: '#d5e5f5'};
const temp3 = {backgroundColor: '#dcbdf8'};
const temp4 = {backgroundColor: '#fabec0'};

const {width} = Dimensions.get('window');

const RecentArticles = () => {
  return (
    <View style={styles.topSpacer}>
      <Text style={styles.sectionHeader}>Recent articles</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled>
        <TouchableOpacity style={[styles.boxer, temp1]}>
          <View style={{flex: 4}}>
            <Text style={styles.title}>5 tips to reopen your business</Text>
            <Text style={styles.subTitle}>Loans</Text>
          </View>
          <View style={styles.readmore}>
            <Text>Read more </Text>
            <FontAwesome
              name="chevron-right"
              size={10}
              color={colors.primaryText}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boxer, temp2]}>
          <View style={{flex: 4}}>
            <Text style={styles.title}>How to adapt your business</Text>
            <Text style={styles.subTitle}>Business</Text>
          </View>
          <View style={styles.readmore}>
            <Text>Read more </Text>
            <FontAwesome
              name="chevron-right"
              size={10}
              color={colors.primaryText}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boxer, temp3]}>
          <View style={{flex: 4}}>
            <Text style={styles.title}>4 tips to get money</Text>
            <Text style={styles.subTitle}>Business</Text>
          </View>
          <View style={styles.readmore}>
            <Text>Read more </Text>
            <FontAwesome
              name="chevron-right"
              size={10}
              color={colors.primaryText}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boxer, temp4]}>
          <View style={{flex: 4}}>
            <Text style={styles.title}>5 tips to get money</Text>
            <Text style={styles.subTitle}>Business</Text>
          </View>
          <View style={styles.readmore}>
            <Text>Read more </Text>
            <FontAwesome
              name="chevron-right"
              size={10}
              color={colors.primaryText}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topSpacer: {
    marginTop: 35,
  },
  boxer: {
    height: 150,
    width: width / 2,
    marginRight: 15,
    borderRadius: 10,
    padding: 15,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.grey,
  },
  readmore: {
    flex: 1,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
  },
});

export default RecentArticles;
