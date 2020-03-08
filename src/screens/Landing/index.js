import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import colors from '../../utils/colors';
import App from '../Apps/App';

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
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => <App item={item} navigation={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryOffset,
    height: '100%',
    paddingTop: 20,
  },
});

export default Landing;
