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
import {recentArticles} from '../../utils/blog';

const {width} = Dimensions.get('window');

const RecentArticles = ({navigation}) => {
  const handleClick = id => {
    navigation.navigate('Article', {id});
  };

  return (
    <View style={styles.topSpacer}>
      <Text style={styles.sectionHeader}>Recent articles</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled>
        {recentArticles.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[styles.boxer, {backgroundColor: item.color}]}
            onPress={() => handleClick(item.id)}>
            <View style={{flex: 4}}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.category}</Text>
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
        ))}
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
