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

const temp1 = {backgroundColor: '#f0b3c5'};
const temp2 = {backgroundColor: '#c4e5d6'};
const temp3 = {backgroundColor: '#d7f2fd'};
const temp4 = {backgroundColor: '#ecd1fc'};

const {width} = Dimensions.get('window');

const TopTopics = ({navigation}) => {
  const handleClick = () => {
    navigation.navigate('Articles');
  };

  return (
    <View style={styles.topSpacer}>
      <Text style={styles.sectionHeader}>Top topics</Text>
      <View style={styles.topics}>
        <TouchableOpacity
          style={[styles.boxer, styles.shadow, temp1]}
          onPress={handleClick}>
          <AntDesign name="aliwangwang-o1" size={40} color={colors.backDrop} />
          <Text>Loans</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.boxer, styles.shadow, temp2]}
          onPress={handleClick}>
          <AntDesign name="pay-circle1" size={40} color={colors.backDrop} />
          <Text>Savings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.boxer, styles.shadow, temp3]}
          onPress={handleClick}>
          <AntDesign name="sound" size={40} color={colors.backDrop} />
          <Text>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.boxer, styles.shadow, temp4]}
          onPress={handleClick}>
          <AntDesign name="alipay-square" size={40} color={colors.backDrop} />
          <Text>General</Text>
        </TouchableOpacity>
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
