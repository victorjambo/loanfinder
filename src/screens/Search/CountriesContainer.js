import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export const FLAGS = {
  KE: '🇰🇪',
  NG: '🇳🇬',
  US: '🇺🇸',
  IN: '🇮🇳',
  MX: '🇲🇽',
  PH: '🇵🇭',
  PK: '🇵🇰',
};

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
              <Text style={styles.flag}>{FLAGS[item.code]}</Text>
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
  </>
);

const mapStateToProps = state => ({
  countries: state.appState.countries,
});

export default connect(mapStateToProps)(CountriesContainer);
