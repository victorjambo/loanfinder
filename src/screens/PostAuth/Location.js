import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setLocation, incrementAdCounter} from '../../redux/actions';
import CountriesContainer from '../Search/CountriesContainer';
import ads from '../../utils/Ads/triggerAds';

const Location = ({changeLocation, incrementAd}) => {
  const handleClick = country => {
    ads.showAds(incrementAd);
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
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(Location);
