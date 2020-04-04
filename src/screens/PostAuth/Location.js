import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setLocation} from '../../redux/actions';
import CountriesContainer from '../Search/CountriesContainer';

const Location = ({changeLocation}) => {
  const handleClick = country => {
    changeLocation(country);
    // TODO use this info for apps in storage
    // TODO check if local storage has location
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

export default connect(
  null,
  mapDispatchToProps,
)(Location);
