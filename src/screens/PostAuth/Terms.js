import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CheckBox, Text, Button} from 'react-native-elements';
import {View, Linking, StyleSheet, TouchableOpacity} from 'react-native';

import {setTerms, incrementAdCounter} from '../../redux/actions';
import colors from '../../utils/colors';
import ads from '../../utils/Ads/triggerAds';

const Terms = ({changeTerms, privacyPolicy, incrementAd}) => {
  const [check, setCheck] = useState(false);

  const handleClick = e => {
    ads.showAds(incrementAd);
    changeTerms();
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text h4 style={styles.title}>
            Terms & Conditions
          </Text>
          <View>
            <View>
              <Text style={styles.proceedText}>
                By proceeding you agree to the Terms of Use and Privacy Policy.
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => Linking.openURL(privacyPolicy)}>
                <Text style={styles.privacyPolicy}>Privacy Policy</Text>
              </TouchableOpacity>
              <CheckBox
                center
                title="Accept Terms"
                checked={check}
                onPress={handleCheck}
                checkedColor={colors.primary}
                uncheckedColor={colors.primary}
                containerStyle={styles.checkBox}
              />
            </View>
          </View>
        </View>
        <Button
          title="PROCEED"
          disabled={!check}
          onPress={handleClick}
          buttonStyle={styles.btn}
          containerStyle={styles.btnContainer}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    height: '100%',
    backgroundColor: colors.white,
  },
  top: {
    flex: 9,
  },
  title: {
    textAlign: 'center',
    color: colors.primaryText,
  },
  checkBox: {
    backgroundColor: colors.white,
  },
  proceedText: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 25,
    paddingVertical: 50,
  },
  privacyPolicy: {
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  btn: {
    backgroundColor: colors.primary,
  },
  btnContainer: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  privacyPolicy: state.settings.privacyPolicy,
});

const mapDispatchToProps = dispatch => ({
  changeTerms: bindActionCreators(setTerms, dispatch),
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Terms);
