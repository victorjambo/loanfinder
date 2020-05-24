import React from 'react';
import {View} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {logError, logInfo} from '../../utils/logger';

const FB = () => {
  return (
    <View>
      <LoginButton
        publishPermissions={['email']}
        onLoginFinished={(error, result) => {
          console.log(result.grantedPermissions);
          if (error) {
            logError('login has error: ' + result.error);
          } else if (result.isCancelled) {
            logInfo('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then((data) => {
              console.log(data.accessToken.toString());
              logInfo('login success.', data);
            });
          }
        }}
        onLogoutFinished={() => logInfo('logout.')}
      />
    </View>
  );
};

export default FB;
