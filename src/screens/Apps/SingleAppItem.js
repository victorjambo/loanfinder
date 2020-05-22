import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../../utils/colors';
import ads from '../../utils/Ads/triggerAds';
import {setCurrentAppData, incrementAdCounter} from '../../redux/actions';

const TopApps = ({navigation, item, setAppDataProps, incrementAd}) => {
  const maxlimit = 35;
  const handleNavigate = () => {
    setAppDataProps(item);
    navigation.navigate('AppViewContainer');
    ads.showAds(incrementAd);
  };

  return (
    <TouchableOpacity
      style={[styles.container, styles.shadow, styles.radius]}
      onPress={handleNavigate}>
      <View style={styles.row}>
        <Image
          source={{uri: item.media.image.icon}}
          style={styles.img}
          containerStyle={[
            styles.imgContainer,
            styles.shadow,
            styles.radiusRound,
          ]}
          borderRadius={20}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.textContainer}>
          <Text>
            {item.title.length > maxlimit
              ? item.title.substring(0, maxlimit - 3) + '...'
              : item.title}
          </Text>
          <View style={styles.row}>
            <View style={[styles.row, styles.icoContainer]}>
              <Text>{item.scoreText}</Text>
              <Icon style={styles.ico} color={colors.grey} name="star" />
            </View>
            <View style={[styles.row, styles.icoContainer]}>
              <Text>{item.size}</Text>
              <Icon
                size={15}
                style={styles.ico}
                color={colors.grey}
                name="clouddownload"
              />
            </View>
          </View>
        </View>
        <Icon name="ellipsis1" color="#C3C6D1" size={30} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 30,
    padding: 20,
    // backgroundColor: '#465DE2',
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
  },
  img: {
    width: 50,
    height: 50,
  },
  imgContainer: {
    marginRight: 20,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  white: {
    color: colors.white,
  },
  ico: {
    alignSelf: 'center',
    marginHorizontal: 2,
  },
  icoContainer: {
    marginHorizontal: 5,
  },
  icon: {
    alignSelf: 'center',
    position: 'absolute',
    right: 5,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.9,
    elevation: 10,
  },
  radius: {
    borderRadius: 20,
  },
  radiusRound: {
    borderRadius: 100 / 4,
  },
});

const mapDispatchToProps = dispatch => ({
  setAppDataProps: bindActionCreators(setCurrentAppData, dispatch),
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(TopApps);
