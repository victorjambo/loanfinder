import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Flag from 'react-native-flags';

import {idxSearch} from '../utils/searchQuery';
import colors from '../utils/colors';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search) {
      const res = idxSearch(search);
      console.log(res.length);
    }
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
        <View style={styles.row}>
          <TouchableOpacity style={styles.item}>
            <Flag code="KE" />
            <Text>Kenya</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Flag code="NG" />
            <Text>Nigeria</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Flag code="US" />
            <Text>USA</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.item}>
            <Flag code="IN" />
            <Text>India</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Flag code="MX" />
            <Text>Mexico</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Flag code="PH" />
            <Text>Philippines</Text>
          </TouchableOpacity>
        </View>
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

export default Search;

{/* <Flag code="KE" />
<Flag code="PK" />
<Flag code="US" />
<Flag code="NG" />
<Flag code="IN" />
<Flag code="MX" />
<Flag code="ID" />
<Flag code="PH" /> */}
