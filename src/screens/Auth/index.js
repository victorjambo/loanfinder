/**
 * 1. Handle login with wrong info. no user in db
 * 3. Handle screen redirect. Change state to logged in
 */
import React, {useState} from 'react';
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {bindActionCreators} from 'redux';

import styles from './styles';
import colors from '../../utils/colors';

import {
  loginRequest,
  registerRequest,
  hideGenericError,
} from '../../redux/actions';
import ImageBackgroundContainer from './ImageBackgroundContainer';
import SkipContainer from './SkipContainer';
import validateInput from '../../utils/validator';
import ads from '../../utils/AdsV2/triggerAds';

const screenHeight = Dimensions.get('window').height;

const REGISTER_HEIGHT = screenHeight / 4;
const LOGIN_HEIGHT = screenHeight / 4;
const ERROR_HEIGHT = screenHeight / 5;
const INITIAL_VALUE = '';

const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const INITIAL_ERROR = {
  email: '',
  username: '',
  password: '',
};

const Auth = ({login, register, auth, hideGenError}) => {
  const [form, setForm] = useState(LOGIN);
  const [email, setEmail] = useState(INITIAL_VALUE);
  const [username, setUsername] = useState(INITIAL_VALUE);
  const [password, setPassword] = useState(INITIAL_VALUE);
  const [errMsg, setErrMsg] = useState(INITIAL_ERROR);

  const [refEmail, setRefEmail] = useState();
  const [refPassword, setRefPassword] = useState();

  const isRegister = form === REGISTER;

  const {genericError} = auth;

  const setHeight = () => {
    if (errMsg.email) {
      return ERROR_HEIGHT;
    }
    if (isRegister) {
      return REGISTER_HEIGHT;
    } else {
      return LOGIN_HEIGHT;
    }
  };

  const handleSubmit = () => {
    const dataToValidate = isRegister
      ? {email, password, username}
      : {email, password};

    const {errors, isValid} = validateInput(dataToValidate);

    if (isValid) {
      isRegister ? register(email, password, username) : login(email, password);
    } else {
      setErrMsg(errors);
    }
  };

  const handleFocus = init => {
    hideGenError();
    setErrMsg({...errMsg, ...init});
  };

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={{height: setHeight()}}>
          <ImageBackgroundContainer
            isRegister={isRegister}
            setForm={setForm}
            setErrMsg={setErrMsg}
            hideGenError={hideGenError}
          />
        </View>

        {!!genericError && (
          <View style={styles.genericErrorContainer}>
            <Text style={styles.genericErrorText}>{genericError}</Text>
          </View>
        )}

        <View style={styles.body}>
          <View style={[styles.section, styles.middle]}>
            {isRegister && (
              <Input
                containerStyle={styles.inputContainer}
                inputStyle={styles.input}
                placeholder="Display name"
                value={username}
                onChangeText={setUsername}
                errorMessage={errMsg.username}
                onFocus={() => handleFocus({username: INITIAL_VALUE})}
                returnKeyType="next"
                autoCapitalize="none"
                onSubmitEditing={() => refEmail.focus()}
                leftIcon={
                  <AntDesign name="user" size={24} color={colors.grey} />
                }
              />
            )}

            <Input
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              errorMessage={errMsg.email}
              onFocus={() => handleFocus({email: INITIAL_VALUE})}
              returnKeyType="next"
              autoCapitalize="none"
              ref={input => setRefEmail(input)}
              onSubmitEditing={() => refPassword.focus()}
              leftIcon={<AntDesign name="mail" size={24} color={colors.grey} />}
            />

            <Input
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              errorMessage={errMsg.password}
              onFocus={() => handleFocus({password: INITIAL_VALUE})}
              returnKeyType="done"
              ref={input => setRefPassword(input)}
              leftIcon={
                <AntDesign name="lock1" size={24} color={colors.grey} />
              }
            />

            <View style={[styles.section, styles.bottom]}>
              <Button
                buttonStyle={styles.btn}
                title={form === LOGIN ? LOGIN : REGISTER}
                onPress={handleSubmit}
              />
              <TouchableOpacity
                onPress={() => {
                  if (isRegister) {
                    ads.showInterstitial();
                  }
                  setForm(isRegister ? LOGIN : REGISTER);
                  setErrMsg(INITIAL_ERROR);
                  hideGenError();
                }}
                style={styles.switcherContainer}>
                <Text
                  style={{
                    color: Colors.black,
                  }}>
                  {isRegister
                    ? 'Already have an account?'
                    : "Don't have an account?"}
                </Text>
                <Text style={styles.switcher}>
                  {isRegister ? 'Login' : 'Register'}
                </Text>
              </TouchableOpacity>
              <SkipContainer />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(loginRequest, dispatch),
  register: bindActionCreators(registerRequest, dispatch),
  hideGenError: bindActionCreators(hideGenericError, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
