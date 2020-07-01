import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import colors from '../../utils/colors';

const {width} = Dimensions.get('window');

const topics = [
  {
    id: 1,
    title: 'Loans',
    color: '#f0b3c5',
    icon: 'API',
  },
  {
    id: 2,
    title: 'Savings',
    color: '#c4e5d6',
    icon: 'pay-circle-o1',
  },
  {
    id: 3,
    title: 'Business',
    color: '#d7f2fd',
    icon: 'woman',
  },
  {
    id: 4,
    title: 'General',
    color: '#ecd1fc',
    icon: 'shake',
  },
];

const TopTopics = ({navigation}) => {
  return (
    <View style={styles.topSpacer}>
      <Text style={styles.sectionHeader}>Top topics</Text>
      <View style={styles.topics}>
        {topics.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[styles.boxer, styles.shadow, {backgroundColor: item.color}]}
            onPress={() =>
              navigation.navigate('Articles', {category: item.title})
            }>
            <AntDesign name={item.icon} size={40} color={colors.backDrop} />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topSpacer: {
    marginTop: 35,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  topics: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  boxer: {
    height: 100,
    width: width / 5,
    marginRight: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.9,
    elevation: 10,
  },
});

export default TopTopics;
