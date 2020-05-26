import React, {useState} from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {idxSearch, countrySearch} from '../../utils/searchQuery';
import CountriesContainer from './CountriesContainer';
import ads from '../../utils/AdsV2/triggerAds';
import {setSearchResults, showSpinner, hideSpinner} from '../../redux/actions';

const INITIAL = '';

const Search = ({navigation, searchResults, showSpin, hideSpin}) => {
  const [search, setSearch] = useState(INITIAL);

  const handleSearch = () => {
    if (search) {
      showSpin();
      const res = idxSearch(search);
      searchResults(res);
      navigation.navigate('Search Results', {search});
      hideSpin();
      setSearch(INITIAL);
      ads.showInterstitial();
    }
  };

  const handleCountryClick = country => {
    showSpin();
    const res = countrySearch(country);
    searchResults(res);
    navigation.navigate('Search Results', {search: country});
    hideSpin();
    ads.showInterstitial();
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

const mapDispatchToProps = dispatch => ({
  searchResults: bindActionCreators(setSearchResults, dispatch),
  showSpin: bindActionCreators(showSpinner, dispatch),
  hideSpin: bindActionCreators(hideSpinner, dispatch),
});

export default connect(null, mapDispatchToProps)(Search);
