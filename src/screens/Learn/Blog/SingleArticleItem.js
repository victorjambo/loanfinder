import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../../utils/colors';

const SingleArticleItem = ({navigation, item}) => {
  const handleClick = () => {
    navigation.navigate('Article', {
      id: item.id,
    });
  };

  return (
    <View style={[styles.container, styles.shadow]}>
      <TouchableOpacity onPress={handleClick}>
        <View style={styles.top}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={[styles.row, styles.icons]}>
          <Text style={styles.category}>{item.category.toUpperCase()}</Text>
          <View style={[styles.row, styles.icon]}>
            <AntDesign
              name="sharealt"
              size={27}
              color={colors.primary}
              style={styles.ico}
            />
            <AntDesign
              name="arrowright"
              size={30}
              color={colors.primary}
              style={styles.ico}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 10,
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderColor: colors.grey,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    borderTopWidth: 1,
    borderTopColor: colors.lightgrey,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  ico: {
    marginHorizontal: 10,
  },
  shadow: {
    shadowOpacity: 0.9,
    elevation: 5,
  },
  top: {
    padding: 15,
  },
  category: {
    color: '#A0A0A0',
    fontSize: 18,
    padding: 10,
    paddingLeft: 15,
  },
});

export default SingleArticleItem;
