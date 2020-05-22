import React from 'react';
import {ImageBackground, View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import img from '../../../assets/09.png';

const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const INITIAL_ERROR = {
  email: '',
  username: '',
  password: '',
};

const ImageBackgroundContainer = ({isRegister, setForm, setErrMsg}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={img}
      style={[styles.img, styles.header]}>
      <View style={styles.imgBg}>
        {isRegister && (
          <TouchableOpacity
            style={styles.imgBgBack}
            onPress={() => {
              setForm(isRegister ? LOGIN : REGISTER);
              setErrMsg(INITIAL_ERROR);
            }}>
            <FontAwesome name="chevron-left" size={20} color="white" />
            <Text h4 style={styles.imgBgBackText}>
              &nbsp;Back
            </Text>
          </TouchableOpacity>
        )}

        <View style={styles.line} />
        <Text style={[styles.appBodySectionTitle, styles.white]}>
          {isRegister ? 'Create Account' : 'Welcome back'}
        </Text>
        {!isRegister && (
          <View>
            <Text style={[styles.subTitle, styles.white]}>
              to Loaner - Personal loan finder
            </Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default ImageBackgroundContainer;
