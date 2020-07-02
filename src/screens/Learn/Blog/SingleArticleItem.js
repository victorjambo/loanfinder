import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../../utils/colors';

const SingleArticleItem = ({navigation, item, category}) => {
  const handleClick = () => {
    navigation.navigate('Article', {
      id: item.id, // TODO this will determine which item to show
      item,
      category: category.category ? category.category : '',
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={handleClick}>
        <Text style={styles.title}>{item.title}</Text>
        <AntDesign name="arrowright" size={30} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.lightgrey,
  },
  title: {
    fontSize: 19, // TODO font family
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    alignItems: 'flex-end',
  },
});

export default SingleArticleItem;
