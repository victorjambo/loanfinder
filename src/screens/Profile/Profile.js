import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Image as IconImage} from 'react-native-elements';

import colors from '../../utils/colors';
import {APPVIEW} from '../../Navigation/routes';
import {setCurrentAppData} from '../../redux/actions';

const Profile = ({navigation, savedApps, setAppDataProps}) => {
  const handleNavigate = item => {
    setAppDataProps(item);
    navigation.navigate(APPVIEW.name);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            }}
          />

          <Text style={styles.name}>John Doe</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          {savedApps &&
            savedApps.map(item => (
              <TouchableOpacity
                style={styles.menuBox}
                key={item.id}
                onPress={() => handleNavigate(item)}>
                <IconImage
                  source={{uri: item.media.image.icon}}
                  style={styles.icon}
                  containerStyle={[
                    styles.imgContainer,
                    styles.shadow,
                    styles.radiusRound,
                  ]}
                  borderRadius={20}
                  PlaceholderContent={<ActivityIndicator />}
                />
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: colors.white,
    fontWeight: '600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,

    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuBox: {
    backgroundColor: '#DCDCDC',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
    borderRadius: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  info: {
    fontSize: 22,
    color: '#696969',
  },
});

const mapStateToProps = state => ({
  savedApps: state.appState.savedApps,
});

const mapDispatchToProps = dispatch => ({
  setAppDataProps: bindActionCreators(setCurrentAppData, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
