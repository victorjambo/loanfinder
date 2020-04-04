import React, {useState} from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {SEARCH_RESULTS} from '../../Navigation/routes';
import {idxSearch, countrySearch} from '../../utils/searchQuery';
import {setSearchResults, showSpinner, hideSpinner} from '../../redux/actions';
import CountriesContainer from './CountriesContainer';

const INITIAL = '';

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
      <CountriesContainer
        header="FILTER BY COUNTRY"
        handleCountryClick={handleCountryClick}
      />
    </View>
  );
};

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
