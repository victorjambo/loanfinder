import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../utils/colors';
import SingleArticleItem from './SingleArticleItem';
import {loans, business, savings, general} from '../../../utils/blog';

const Articles = ({navigation, route}) => {
  let _articles = [];

  if (route.params.category) {
    switch (route.params.category) {
      case 'Loans':
        _articles = loans;
        break;
      case 'Business':
        _articles = business;
        break;
      case 'Savings':
        _articles = savings;
        break;
      case 'General':
        _articles = general;
        break;
      default:
        break;
    }
  }

  return (
    <>
      <LinearGradient
        style={styles.solid}
        colors={[colors.primary, colors.white]}
      />
      <ScrollView style={styles.container}>
        {_articles.map(item => (
          <SingleArticleItem
            key={item.id}
            item={item}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.white,
  },
  solid: {
    height: 80,
    width: '100%',
  },
});

export default Articles;
