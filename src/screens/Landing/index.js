import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import colors from '../../utils/colors';
import TopApps from '../Apps/TopApps';
import data from '../../../_data_collector/data';

const _data = data.slice(0, 10);

const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => <TopApps item={item} navigation={navigation} />}
        ListHeaderComponent={() => <Text style={styles.header}>Top Apps</Text>}
      />
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
