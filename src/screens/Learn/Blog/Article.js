/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import {articles} from '../../../utils/blog';

const Article = ({navigation, route}) => {
  const {params, name} = route;
  const [item, setItem] = useState({});

  useEffect(() => {
    if (!params) {
      return navigation.navigate('Bottom Tab');
    } else {
      const article = articles.find(i => i.id === params.id);
      if (!article && name === 'learn') {
        return navigation.navigate('Onboarding');
      } else {
        setItem(article);
      }
    }

    if (name === 'learn') {
      navigation.dispatch(state => {
        const routes = [{name: 'Onboarding'}, ...state.routes];
        return CommonActions.reset({
          ...state,
          routes,
          index: routes.length - 1,
        });
      });
    }
  }, [params, name]);

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
