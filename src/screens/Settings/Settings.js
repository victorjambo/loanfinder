import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ListItem} from 'react-native-elements';
import {View, Share, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {logoutRequest, skipAuth} from '../../redux/actions';
import localStorage from '../../utils/localStorage';

const containerStyle = {paddingVertical: 20};

const Settings = ({undoSkipAuth, logout, settings, isLoggedIn}) => {
  const {appStoreUrl, devStoreUel, privacyPolicy, email} = settings;

  const settingsItems = [
    {
      title: isLoggedIn ? 'logout' : 'login',
      onPress: () => (isLoggedIn ? logout() : undoSkipAuth(false)),
      icon: isLoggedIn ? 'logout' : 'login',
    },
    {
      title: 'Clear app data',
      onPress: () => localStorage.clearAll(), // TODO why is it not returning to Auth page?
      icon: 'delete',
    },
    {
      title: 'Rate the App',
      onPress: () => Linking.openURL(appStoreUrl),
      icon: 'staro',
    },
    {
      title: 'Privacy Policy',
      onPress: () => Linking.openURL(privacyPolicy),
      icon: 'infocirlceo',
    },
    {
      title: 'More Apps',
      onPress: () => Linking.openURL(devStoreUel),
      icon: 'appstore-o',
    },
    {
      title: 'Feedback',
      onPress: () => Linking.openURL(`mailto:${email}`),
      icon: 'mail',
    },
    {
      title: 'Share with Friends',
      onPress: () => {
        Share.share({
          message: `Hi, Try this amazing app \n ${appStoreUrl}`,
        });
      },
      icon: 'sharealt',
    },
  ];

  return (
    <View>
      {settingsItems.map((item, i) => (
        <ListItem
          key={i}
          bottomDivider
          title={item.title}
          onPress={item.onPress}
          containerStyle={containerStyle}
          leftAvatar={<Icon name={item.icon} size={24} />}
        />
      ))}
    </View>
  );
};

const mapStateToProps = state => ({
  settings: state.settings,
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logoutRequest, dispatch),
  undoSkipAuth: bindActionCreators(skipAuth, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
