import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import img from '../../../assets/tala.png';
import colors from '../../utils/colors';

const FeaturedApps = ({navigation, item}) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.shadow, styles.radius]}
      onPress={() => navigation.navigate('AppView')}>
      <View style={styles.row}>
        <Image
          source={img}
          style={styles.img}
          containerStyle={[
            styles.imgContainer,
            styles.shadow,
            styles.radiusRound,
          ]}
          borderRadius={20}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 30,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 100,
  },
  imgContainer: {
    marginRight: 20,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  white: {
    color: colors.white,
  },
  icon: {
    alignSelf: 'center',
    position: 'absolute',
    right: 5,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.9,
    elevation: 10,
  },
  radius: {
    borderRadius: 20,
  },
  radiusRound: {
    borderRadius: 100 / 4,
  },
});

export default FeaturedApps;
