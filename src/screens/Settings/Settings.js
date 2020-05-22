import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ListItem} from 'react-native-elements';
import {View, Share, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {logoutRequest, skipAuth, setLocation} from '../../redux/actions';

const containerStyle = {paddingVertical: 20};

const settings = {
  email: 'mutaidev@gmail.com',
  privacyPolicy: 'https://sites.google.com/view/mutaidev-policy/home',
  devStoreUel: 'http://play.google.com/store/apps/dev?id=4753238511708918696',
  appStoreUrl:
    'http://play.google.com/store/apps/details?id=com.mutaidev.loanfinder',
};

const Settings = ({logout, isLoggedIn, undoSkipAuth, changeLocation}) => {
  const {appStoreUrl, devStoreUel, privacyPolicy, email} = settings;

  const settingsItems = [
    {
      title: isLoggedIn ? 'logout' : 'login',
      onPress: () => (isLoggedIn ? logout() : undoSkipAuth(false)),
      icon: isLoggedIn ? 'logout' : 'login',
    },
    {
      title: 'Change location',
      onPress: () => changeLocation(''),
      icon: 'enviromento',
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
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logoutRequest, dispatch),
  undoSkipAuth: bindActionCreators(skipAuth, dispatch),
  changeLocation: bindActionCreators(setLocation, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
