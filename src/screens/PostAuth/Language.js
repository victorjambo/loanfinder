import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Button} from 'react-native-elements';

import ads from '../../utils/Ads/triggerAds';
import {setLanguage, incrementAdCounter} from '../../redux/actions';
import colors from '../../utils/colors';

const SELECT_LANGUAGE = 'SELECT LANGUAGE';
const PROCEED = 'PROCEED';
export const LANG = {
  EN: {
    label: '🇺🇸 English',
    value: 'EN',
  },
};

const Languge = ({changeLanguage, incrementAd}) => {
  const [selectedValue, setSelectedValue] = useState(LANG.EN.value);

  const handleClick = () => {
    ads.showAds(incrementAd);
    changeLanguage();
  };

  return (
    <View style={styles.parentContainer}>
      <View style={[styles.topContainer, styles.languageContainer]}>
        <Text style={styles.languageSectionHeader}>{SELECT_LANGUAGE}</Text>
        <View style={styles.languagePickerBorder}>
          <Picker
            selectedValue={selectedValue}
            style={styles.languagePicker}
            onValueChange={(itemValue, _) => setSelectedValue(itemValue)}>
            <Picker.Item label={LANG.EN.label} value={LANG.EN.value} />
          </Picker>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title={PROCEED}
          buttonStyle={styles.buttonStyle}
          onPress={handleClick}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 10,
    marginHorizontal: 50,
    backgroundColor: colors.primary,
  },
  btnGroup: {
    marginTop: 20,
  },
  parentContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
  },
  languageContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  languageSectionHeader: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  languagePicker: {
    width: '100%',
  },
  languagePickerBorder: {
    borderColor: colors.lightgrey,
    borderWidth: 1,
    marginTop: 20,
  },
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: bindActionCreators(setLanguage, dispatch),
  incrementAd: bindActionCreators(incrementAdCounter, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(Languge);
