import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';

import styles from '../styles';

const Screenshot = ({image}) => {
  return (
    <Image
      source={{uri: image}}
      style={st.img}
      containerStyle={st.imgContainer}
      resizeMode="cover"
      borderRadius={100 / 6}
      borderWidth={3}
      borderColor="#f0f8ff"
      overflow="visible"
      PlaceholderContent={<ActivityIndicator />}
    />
  );
};

const Screenshots = ({currentAppData}) => {
  const data = currentAppData.media.image.screenshot;

  return (
    <View>
      <Text style={styles.appBodySectionTitle}>Screenshots</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Screenshot image={item} />}
      />
    </View>
  );
};

const st = StyleSheet.create({
  imgContainer: {
    margin: 5,
    height: '100%',
  },
  img: {
    height: 200,
    width: 100,
  },
});

const mapStateToProps = state => ({
  currentAppData: state.appState.currentAppData,
});

export default connect(mapStateToProps)(Screenshots);
