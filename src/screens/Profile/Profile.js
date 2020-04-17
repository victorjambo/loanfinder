import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Image as IconImage, Header, Text} from 'react-native-elements';

import colors from '../../utils/colors';
import {APPVIEW, SETTINGS} from '../../Navigation/routes';
import {setCurrentAppData} from '../../redux/actions';
import Icon from 'react-native-vector-icons/AntDesign';

const Profile = ({navigation, savedApps, setAppDataProps, user}) => {
  const handleNavigate = item => {
    setAppDataProps(item);
    navigation.navigate(APPVIEW.name);
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        rightComponent={
          <Icon
            name="setting"
            color={colors.white}
            size={30}
            onPress={() => navigation.navigate(SETTINGS.name)}
          />
        }
        containerStyle={styles.settingsIcon}
      />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar1.png', // TODO A nicer Icon
            }}
          />

          <Text style={styles.name}>
            {user ? user.displayName || user.email : 'Hello 👋'}
          </Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text h4 style={styles.savedAppsTitle}>
          Saved Apps
        </Text>
        {!savedApps.length ? (
          <View style={styles.noSavedAppsContainer}>
            <Text style={styles.noSavedAppsText}>
              Tap on the&nbsp;
              <Icon name="heart" size={20} color={colors.magenta} />
              &nbsp;to save an App
            </Text>
          </View>
        ) : (
          <View style={styles.bodyContent}>
            {savedApps.map(item => (
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
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
  },
  headerContent: {
    paddingTop: 0,
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
    paddingTop: 10,
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
  settingsIcon: {
    height: 40,
    paddingTop: 0,
    backgroundColor: colors.primary,
    borderBottomColor: colors.primary,
  },
  savedAppsTitle: {
    color: colors.grey,
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  noSavedAppsContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  noSavedAppsText: {
    fontSize: 20,
  },
});

const mapStateToProps = state => ({
  savedApps: state.appState.savedApps,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  setAppDataProps: bindActionCreators(setCurrentAppData, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
