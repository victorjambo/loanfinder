import React, {useState} from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {SEARCH_RESULTS} from '../../Navigation/routes';
import {idxSearch, countrySearch} from '../../utils/searchQuery';
import CountriesContainer from './CountriesContainer';
import ads from '../../utils/Ads/triggerAds';
import {
  setSearchResults,
  showSpinner,
  hideSpinner,
  incrementAdCounter,
} from '../../redux/actions';

const INITIAL = '';

const Search = ({
  navigation,
  searchResults,
  showSpin,
  hideSpin,
  incrementAd,
}) => {
  const [search, setSearch] = useState(INITIAL);

  const handleSearch = () => {
    if (search) {
      showSpin();
      const res = idxSearch(search);
      searchResults(res);
      navigation.navigate(SEARCH_RESULTS.name, {search});
      hideSpin();
      setSearch(INITIAL);
      ads.showAds(incrementAd);
    }
  };

  const handleCountryClick = country => {
    showSpin();
    const res = countrySearch(country);
    searchResults(res);
    navigation.navigate(SEARCH_RESULTS.name, {search: country});
    hideSpin();
    ads.showAds(incrementAd);
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
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(Search);
