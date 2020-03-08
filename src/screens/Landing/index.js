import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import colors from '../../utils/colors';
import TopApps from '../Apps/TopApps';
import FeaturedApps from '../Apps/FeaturedApps';

const data = [
  {
    id: '1',
    name: 'Kenneth Erickson',
    location: 'San Diego, CA',
  },
  {
    id: '2',
    name: 'Kenneth Erickson',
    location: 'San Diego, CA',
  },
  {
    id: '3',
    name: 'Kenneth Erickson',
    location: 'San Diego, CA',
  },
  {
    id: '4',
    name: 'Kenneth Erickson',
    location: 'San Diego, CA',
  },
  {
    id: '5',
    name: 'Kenneth Erickson',
    location: 'San Diego, CA',
  },
  {
    id: '6',
    name: 'Kenneth Erickson',
    location: 'San Diego, CA',
  },
  {
    id: '7',
    name: 'Kenneth Erickson',
    location: 'San Diego, CA',
  },
  {
    id: '8',
    name: 'Kenneth Erickson',
    location: 'San Diego, CA',
  },
  {
    id: '9',
    name: 'Kenneth Erickson',
    location: 'San Diego, CA',
  },
  {
    id: '10',
    name: 'Kenneth Erickson',
    location: 'San Diego, CA',
  },
];

const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.featured}>
        <Text style={styles.header}>Featured Apps</Text>
        <FlatList
          horizontal
          keyExtractor={item => item.id}
          data={data}
          renderItem={({item}) => (
            <FeaturedApps item={item} navigation={navigation} />
          )}
        />
      </View>
      <View style={styles.top}>
        <Text style={styles.header}>Top Apps</Text>
        <FlatList
          keyExtractor={item => item.id}
          data={data}
          renderItem={({item}) => (
            <TopApps item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryOffset,
    height: '100%',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    paddingVertical: 5,
    paddingLeft: 30,
  },
  featured: {
    flex: 3,
  },
  top: {
    flex: 9,
  },
});

export default Landing;
