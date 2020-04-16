import React from 'react';
import {connect} from 'react-redux';
import {View, FlatList, StyleSheet} from 'react-native';

import colors from '../../utils/colors';
import SingleAppItem from '../Apps/SingleAppItem';
import NoSearchResults from './NoSearchResults';

const SearchResults = ({navigation, searchResults}) => {
  if (!searchResults.length) {
    return <NoSearchResults />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={searchResults}
        renderItem={({item}) => (
          <SingleAppItem item={item} navigation={navigation} />
        )}
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
});

const mapStateToProps = state => ({
  searchResults: state.appState.searchResults,
});

export default connect(mapStateToProps)(SearchResults);
