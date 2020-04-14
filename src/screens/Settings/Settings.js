import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ListItem} from 'react-native-elements';
import {View, Share, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {logoutRequest, skipAuth, loginSuccess} from '../../redux/actions';
import Toast from '../../Components/Toast';
import {configureStore} from '../../redux/store';

const containerStyle = {paddingVertical: 20};

const Settings = ({logout, settings, isLoggedIn, undoSkipAuth, login}) => {
  const {appStoreUrl, devStoreUel, privacyPolicy, email} = settings;

  const [visibleToast, setvisibleToast] = useState(false);

  useEffect(() => setvisibleToast(false), [visibleToast]);

  const {persistor} = configureStore();

  const settingsItems = [
    {
      title: isLoggedIn ? 'logout' : 'login',
      onPress: () => (isLoggedIn ? logout() : login()), // TODO undoSkipAuth(false) REMOVE login
      icon: isLoggedIn ? 'logout' : 'login', // TODO handle disable while waiting to logut
    },
    {
      title: 'Clear app data',
      onPress: () => {
        persistor
          .purge()
          .then(() => setvisibleToast(true))
          .catch(error => console.log(error));
      },
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
      <Toast visible={visibleToast} message="DONE!!!" />
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
  login: bindActionCreators(loginSuccess, dispatch), // TODO should call undoSkipAuth. REMOVE this Line
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
