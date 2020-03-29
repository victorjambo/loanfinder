import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {Image, Overlay} from 'react-native-elements';

import styles from '../styles';
import colors from '../../../utils/colors';

const Screenshot = ({image}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Image
          source={{uri: image}}
          style={st.img}
          containerStyle={st.imgContainer}
          resizeMode="cover"
          borderRadius={100 / 6}
          borderWidth={3}
          borderColor={colors.aliceblue}
          PlaceholderContent={<ActivityIndicator />}
        />
      </TouchableOpacity>
      <Overlay
        isVisible={isVisible}
        overlayBackgroundColor={colors.aliceblue}
        onBackdropPress={() => setIsVisible(false)}>
        <Image
          source={{uri: image}}
          style={st.overlayImage}
          resizeMode="cover"
          PlaceholderContent={<ActivityIndicator />}
        />
      </Overlay>
    </>
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
  overlayImage: {
    height: '100%',
    width: '100%',
  },
});

const mapStateToProps = state => ({
  currentAppData: state.appState.currentAppData,
});

export default connect(mapStateToProps)(Screenshots);
