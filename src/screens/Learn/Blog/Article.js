/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-elements';

import {articles} from '../../../utils/blog';
import colors from '../../../utils/colors';

const {width} = Dimensions.get('window');

const Article = ({navigation, route}) => {
  const {params} = route;
  const [item, setItem] = useState({});

  useEffect(() => {
    if (!params) {
      return navigation.goBack();
    } else {
      const article = articles.find(i => i.id === params.id);
      if (!article) {
        return navigation.goBack();
      } else {
        setItem(article);
      }
    }
  }, [params]);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        style={styles.solid}
        colors={[colors.primary, colors.white]}
      />
      <Text h3 style={styles.title}>
        {item.title}
      </Text>
      <View style={styles.dashes}>
        <View style={[styles.dash]} />
        <View style={[styles.dash, styles.black]} />
      </View>
      <Text style={styles.description}>{item.desc}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  solid: {
    height: 120,
    width: width,
  },
  dashes: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  dash: {
    borderColor: colors.grey,
    borderWidth: 3,
    borderRadius: 10,
    width: 30,
    marginRight: 7,
  },
  black: {
    borderColor: colors.black,
  },
  title: {
    margin: 15,
    marginTop: -30,
    marginBottom: 10,
  },
  category: {
    fontStyle: 'italic',
    marginTop: 5,
    fontSize: 16,
  },
  description: {
    margin: 15,
    marginTop: 20,
    textAlign: 'justify',
    lineHeight: 30,
    color: '#A0A0A0',
    fontSize: 18,
  },
});

export default Article;
