import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {useFocusEffect} from '@react-navigation/native';

import {setLocation} from '../../redux/actions';
import CountriesContainer from '../Search/CountriesContainer';
import ads from '../../utils/AdsV2/triggerAds';

const Location = ({changeLocation}) => {
  useFocusEffect(
    React.useCallback(() => {
      ads.requestInterstitial();

      return () => {};
    }, []),
  );

  const handleClick = country => {
    ads.showInterstitial();
    changeLocation(country);
  };

  return (
    <CountriesContainer
      header="SELECT LOCATION"
      handleCountryClick={handleClick}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  changeLocation: bindActionCreators(setLocation, dispatch),
});

export default connect(null, mapDispatchToProps)(Location);
