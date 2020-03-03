import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import img from '../../../assets/09.png';
import styles from './Auth.styles';
import colors from '../../utils/colors';

const REGISTER_HEIGHT = 290;
const LOGIN_HEIGHT = 437;

const Auth = () => {
  const REGISTER = 'REGISTER';
  const LOGIN = 'LOGIN';
  const anim = new Animated.Value(0);
  const [form, setForm] = useState(LOGIN);
  const isRegister = form === REGISTER;
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
                  <FontAwesome name="chevron-left" size={20} color="white" />
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
        <TouchableOpacity
          style={styles.skip}
          onPress={() => console.log('SKIP')}>
          <Text style={styles.skipText}>Skip </Text>
          <FontAwesome
            name="chevron-right"
            size={14}
            color={colors.primaryText}
          />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Auth;
