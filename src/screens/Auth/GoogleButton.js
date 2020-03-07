import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {GoogleSigninButton} from '@react-native-community/google-signin';

import {loginAndSignupWithGoogleAuth} from '../../redux/actions';

import styles from './styles';

const GoogleButton = ({login}) => {
  return (
    <View style={styles.googleContainer}>
      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={login}
      />
      <View style={styles.googleLinesContainter}>
        <View style={styles.googleLine} />
        <Text>OR</Text>
        <View style={styles.googleLine} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(loginAndSignupWithGoogleAuth, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoogleButton);
