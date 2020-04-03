import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Flag from 'react-native-flags';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {idxSearch, countrySearch} from '../utils/searchQuery';
import colors from '../utils/colors';
import {SEARCH_RESULTS} from '../Navigation/routes';
import {setSearchResults, showSpinner, hideSpinner} from '../redux/actions';

const INITIAL = '';

const Rows = ({row, handleClick}) => {
  return (
    <View style={styles.row}>
      {row.map(item => {
        if (item.visible) {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.item}
              onPress={() => handleClick(item.code)}>
              <Flag code={item.code} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

const Search = ({navigation, searchResults, showSpin, hideSpin, countries}) => {
  const [search, setSearch] = useState(INITIAL);

  const handleSearch = () => {
    if (search) {
      showSpin();
      const res = idxSearch(search);
      searchResults(res);
      navigation.navigate(SEARCH_RESULTS.name, {search});
      hideSpin();
      setSearch(INITIAL);
    }
  };

  const handleCountryClick = country => {
    showSpin();
    const res = countrySearch(country);
    searchResults(res);
    navigation.navigate(SEARCH_RESULTS.name, {search: country});
    hideSpin();
  };

  return (
    <View>
      <SearchBar
        placeholder="Search App..."
        onChangeText={setSearch}
        value={search}
        lightTheme
        round
        onBlur={handleSearch}
      />
      <View style={styles.container}>
        <Text style={styles.sectionHeader}>FILTER BY COUNTRY</Text>
        {countries.map((row, i) => (
          <Rows key={i} row={row} handleClick={handleCountryClick} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  sectionHeader: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    width: 120,
    height: 120,
    margin: 5,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: colors.primaryText,
    backgroundColor: colors.primaryOffset,
  },
});

const mapStateToProps = state => ({
  countries: state.appState.countries,
});

const mapDispatchToProps = dispatch => ({
  searchResults: bindActionCreators(setSearchResults, dispatch),
  showSpin: bindActionCreators(showSpinner, dispatch),
  hideSpin: bindActionCreators(hideSpinner, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
