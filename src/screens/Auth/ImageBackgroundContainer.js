import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import img from '../../../assets/09.png';

const ImageBackgroundContainer = ({isRegister, setForm}) => {
  const REGISTER = 'REGISTER';
  const LOGIN = 'LOGIN';

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
            <Text style={[styles.subTitle, styles.white]}>to Loan Finder</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default ImageBackgroundContainer;
