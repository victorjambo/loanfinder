/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {connect} from 'react-redux';
import Flag from 'react-native-flags';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import AdBanner from '../../utils/Ads/AdBanner';

export const CountriesRowContainer = ({row, handleClick}) => {
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

const CountriesContainer = ({countries, header, handleCountryClick}) => (
  <>
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>{header}</Text>
      {countries.map((row, i) => (
        <CountriesRowContainer
          key={i}
          row={row}
          handleClick={handleCountryClick}
        />
      ))}
    </View>
    <View style={{paddingTop: 30}}>
      <AdBanner screen="CountriesContainer" />
    </View>
  </>
);

const mapStateToProps = state => ({
  countries: state.appState.countries,
});

export default connect(mapStateToProps)(CountriesContainer);
