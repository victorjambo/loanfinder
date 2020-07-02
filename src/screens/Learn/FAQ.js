import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../utils/colors';
import Accordian from '../../Components/Accordian';
import {faqs} from '../../utils/blog';

const FAQ = () => {
  return (
    <>
      <LinearGradient
        style={styles.solid}
        colors={[colors.primary, colors.white]}
      />
      <ScrollView style={styles.container}>
        {faqs.map(faq => (
          <Accordian key={faq.id} title={faq.title} data={faq.desc} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.white,
  },
  solid: {
    height: 120,
    width: '100%',
  },
});

export default FAQ;
