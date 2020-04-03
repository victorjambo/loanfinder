import React from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import colors from '../../utils/colors';
import SingleAppItem from '../Apps/SingleAppItem';

const Landing = ({navigation, apps}) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={apps}
        renderItem={({item}) => (
          <SingleAppItem item={item} navigation={navigation} />
        )}
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

const mapStateToProps = state => ({
  apps: state.appState.apps,
});

export default connect(mapStateToProps)(Landing);
