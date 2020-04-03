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
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {bindActionCreators} from 'redux';

import styles from './styles';
import colors from '../../utils/colors';

import {loginRequest} from '../../redux/actions';
import ImageBackgroundContainer from './ImageBackgroundContainer';
import SkipContainer from './SkipContainer';
import GoogleButton from './GoogleButton';
import validateInput from '../../utils/validator';

const REGISTER_HEIGHT = 290;
const LOGIN_HEIGHT = 290;
const INITIAL_VALUE = '';
const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const INITIAL_ERROR = {
  email: '',
  username: '',
  password: '',
};

const Auth = ({login}) => {
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
      toValue: isRegister ? REGISTER_HEIGHT : LOGIN_HEIGHT,
      duration: 500,
    }).start();
  });

  const handleSubmit = () => {
    const {errors, isValid} = validateInput({email, password});
    if (isValid) {
      isRegister ? null : login(email, password);
    } else {
      setErrMsg(errors);
    }
  };

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Animated.View style={{height}}>
          <ImageBackgroundContainer isRegister={isRegister} setForm={setForm} />
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
            </Animated.View>
          </Animated.View>
        </View>
        <SkipContainer />
      </ScrollView>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(loginRequest, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
