import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  Dimensions,
} from 'react-native';
import {Input, Button, CheckBox} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import img from '../../assets/09.png';

const {width} = Dimensions.get('window');

const REGISTER_HEIGHT = 290;
const LOGIN_HEIGHT = 437;

const Auth = () => {
  const REGISTER = 'REGISTER';
  const LOGIN = 'LOGIN';
  const anim = new Animated.Value(0);
  const [form, setForm] = useState(LOGIN);
  const [check, setCheck] = useState(false);
  const isRegister = form === REGISTER;
  const [clickEvent, setclickEvent] = useState('');
  const [heightAnim] = useState(new Animated.Value(LOGIN_HEIGHT));

  useEffect(() => {
    const height = isRegister ? REGISTER_HEIGHT : LOGIN_HEIGHT;
    Animated.timing(anim, {toValue: 3000, duration: 2000}).start();
    Animated.timing(heightAnim, {
      toValue: height,
      duration: 500,
    }).start();
  });

  const fadeIn = (delay, from = 0) => {
    if (clickEvent) {
      return;
    }
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [
        {
          translateY: anim.interpolate({
            inputRange: [delay, Math.min(delay + 500, 3000)],
            outputRange: [from, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  };

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Animated.View style={{height: heightAnim}}>
          <ImageBackground
            resizeMode="cover"
            source={img}
            style={[styles.img, styles.header]}>
            <View style={styles.imgBg}>
              {isRegister && (
                <TouchableOpacity
                  style={styles.imgBgBack}
                  onPress={() => {
                    LayoutAnimation.spring();
                    setForm(isRegister ? LOGIN : REGISTER);
                  }}>
                  <FontAwesome name="chevron-left" size={24} color="white" />
                  <Text style={styles.imgBgBackText}> Back</Text>
                </TouchableOpacity>
              )}

              <View style={styles.line} />
              <Text style={[styles.title, styles.white]}>
                {isRegister ? 'Create Account' : 'Welcome back'}
              </Text>
              {!isRegister && (
                <View>
                  <Text style={[styles.subTitle, styles.white]}>
                    to Loan Finder
                  </Text>
                </View>
              )}
            </View>
          </ImageBackground>
        </Animated.View>

        <View style={styles.body}>
          <Animated.View
            style={[styles.section, styles.middle, fadeIn(700, -20)]}>
            <Input
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
              placeholder="Username"
              leftIcon={<AntDesign name="user" size={24} color="#8E939C" />}
            />

            {isRegister && (
              <Input
                containerStyle={styles.inputContainer}
                inputStyle={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                leftIcon={<AntDesign name="mail" size={24} color="#8E939C" />}
              />
            )}

            <Input
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
              placeholder="Password"
              secureTextEntry
              leftIcon={<AntDesign name="lock1" size={24} color="#8E939C" />}
            />

            <Animated.View
              style={[styles.section, styles.bottom, fadeIn(700, -20)]}>
              {isRegister && (
                <CheckBox
                  title="I have accepted the Terms & Condition"
                  checked={check}
                  containerStyle={styles.checkBox}
                  onPress={() => {
                    setclickEvent('checkbox');
                    setCheck(!check);
                  }}
                />
              )}

              <Button
                buttonStyle={styles.btn}
                title={form === LOGIN ? LOGIN : REGISTER}
                onPress={() => console.log(form)}
              />

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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    position: 'relative',
    height: '100%',
  },
  header: {
    padding: 34,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
  },
  subTitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '400',
  },
  white: {
    color: Colors.white,
  },
  imgBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imgBgBack: {
    flexDirection: 'row',
    paddingBottom: 80,
  },
  imgBgBackText: {
    color: Colors.white,
    fontSize: 20,
    marginTop: -2,
  },
  checkBox: {
    marginBottom: 24,
  },
  line: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 4,
    marginBottom: 8,
    width: 90,
    borderRadius: 100 / 2,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 2,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  bottom: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 20,
  },
  scrollView: {
    backgroundColor: Colors.white,
  },
  body: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  sectionContainer: {
    margin: 32,
    paddingHorizontal: 24,
  },
  switcherContainer: {
    paddingTop: 20,
    flexDirection: 'row',
  },
  switcher: {
    color: '#00B4AC',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  btn: {
    alignSelf: 'stretch',
    marginBottom: 10,
    backgroundColor: '#00A79B',
    width: width / 2,
  },
  inputContainer: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 15,
  },
  input: {
    padding: 15,
  },
});

export default Auth;
