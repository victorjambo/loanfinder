/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Article = ({navigation, route}) => {
  const {params} = route;
  const [item, setItem] = useState({});

  useEffect(() => {
    if (!params) {
      return navigation.goBack();
    } else {
      setItem(params.item);
    }
  }, [params]);

  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text>{item.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Article;
