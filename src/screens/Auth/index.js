/**
 * 1. Handle login with wrong info. no user in db
 * 2. Google login/signup
 * 3. Handle screen redirect. Change state to logged in
 */
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  ScrollView,
  View,
  Text,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
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
  incrementAdCounter,
} from '../../redux/actions';
import ImageBackgroundContainer from './ImageBackgroundContainer';
import SkipContainer from './SkipContainer';
import GoogleButton from './GoogleButton';
import validateInput from '../../utils/validator';
import AdBanner from '../../utils/Ads/AdBanner';
import ads from '../../utils/Ads/triggerAds';

const screenHeight = Dimensions.get('window').height;

const REGISTER_HEIGHT = screenHeight / 4;
const LOGIN_HEIGHT = screenHeight / 3;
const ERROR_HEIGHT = screenHeight / 6;
const INITIAL_VALUE = '';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const INITIAL_ERROR = {
  email: '',
  username: '',
  password: '',
};

const Auth = ({login, register, adCount, incrementAd}) => {
  const anim = new Animated.Value(0);

  const [form, setForm] = useState(LOGIN);
  const [email, setEmail] = useState(INITIAL_VALUE);
  const [username, setUsername] = useState(INITIAL_VALUE);
  const [password, setPassword] = useState(INITIAL_VALUE);
  const [errMsg, setErrMsg] = useState(INITIAL_ERROR);
  const [height] = useState(new Animated.Value(LOGIN_HEIGHT));

  const isRegister = form === REGISTER;

  useEffect(() => {
    Animated.timing(anim, {toValue: 3000, duration: 2000}).start();
    Animated.timing(height, {
      toValue: setHeight(),
      duration: 500,
    }).start();
  });

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

    if (adCount === 0) {
      ads.showAds(incrementAd);
    }
  };

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Animated.View style={{height}}>
          <ImageBackgroundContainer
            isRegister={isRegister}
            setForm={setForm}
            setErrMsg={setErrMsg}
          />
        </Animated.View>

        <View style={styles.body}>
          <Animated.View style={[styles.section, styles.middle]}>
            {isRegister && (
              <Input
                containerStyle={styles.inputContainer}
                inputStyle={styles.input}
                placeholder="Display name"
                value={username}
                onChangeText={setUsername}
                errorMessage={errMsg.username}
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
              leftIcon={
                <AntDesign name="lock1" size={24} color={colors.grey} />
              }
            />

            <Animated.View style={[styles.section, styles.bottom]}>
              <Button
                buttonStyle={styles.btn}
                title={form === LOGIN ? LOGIN : REGISTER}
                onPress={handleSubmit}
              />
              <GoogleButton />

              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.spring();
                  setForm(isRegister ? LOGIN : REGISTER);
                  setErrMsg(INITIAL_ERROR);
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
            </Animated.View>
          </Animated.View>
        </View>
      </ScrollView>
      <AdBanner screen="Auth" />
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(loginRequest, dispatch),
  register: bindActionCreators(registerRequest, dispatch),
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
