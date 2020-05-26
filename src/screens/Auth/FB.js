import React from 'react';
import {View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginButton} from 'react-native-fbsdk';

import {fbLoginSuccess} from '../../redux/actions';
import {logError, logInfo} from '../../utils/logger';

const FB = ({login}) => {
  return (
    <View>
      <LoginButton
        publishPermissions={['email']}
        onLoginFinished={(error, result) => {
          if (error) {
            logError('FB_LOGIN_ERROR_' + result.error);
          } else if (result.isCancelled) {
            logInfo('FB_LOGIN_CANCELLED');
          } else {
            login();
          }
        }}
      />
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(fbLoginSuccess, dispatch),
});

export default connect(null, mapDispatchToProps)(FB);
