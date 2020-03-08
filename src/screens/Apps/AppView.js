import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import {Image, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import img from '../../../assets/promo.png';
import ico from '../../../assets/tala.png';
import colors from '../../utils/colors';

import styles from './styles';

const description =
  'Once I was drawing a perfect chair for myself in my head. But I could not finish her design... And so I found her! \n\n Features: \n\t\u2022 24 hrs loan \n\t\u2022 100k loan limit \n\t\u2022 share promo code \n\t\u2022 loan interest rate';

const AppView = () => {
  const disabled = false;
  const isInstalled = false;
  const bgColor = {backgroundColor: isInstalled ? 'green' : colors.primary};

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={img} style={styles.img} />
        <View style={styles.detailsContainer}>
          <View style={[styles.row, styles.iconNameContainer]}>
            <Image
              source={ico}
              style={styles.ico}
              containerStyle={[styles.icoContainer, styles.shadow]}
              borderRadius={10}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>Victor Mutai</Text>
              <Text style={styles.subTitle}>Nairobi kenya</Text>
            </View>
          </View>
          <View style={[styles.row, styles.badgeContainer]}>
            <View style={[styles.row, styles.badge]}>
              <Icon color={colors.grey} size={24} name="book" />
              <Text style={styles.badgeLabel}>100K</Text>
            </View>
            <View style={[styles.row, styles.badge]}>
              <Icon color={colors.grey} size={24} name="clouddownloado" />
              <Text style={styles.badgeLabel}>800</Text>
            </View>
            <View style={[styles.row, styles.badge]}>
              <Icon color={colors.grey} size={24} name="like2" />
              <Text style={styles.badgeLabel}>91</Text>
            </View>
            <View style={[styles.row, styles.badge]}>
              <Icon color={colors.grey} size={24} name="heart" />
              <Text style={styles.badgeLabel}>465</Text>
            </View>
          </View>
          <View style={styles.verticalSpace}>
            <Text style={styles.title}>App Description</Text>
            <ScrollView>
              <Text style={styles.desc}>{description}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title={isInstalled ? 'Installed' : 'Get App'}
          disabled={disabled}
          buttonStyle={[styles.btn, bgColor]}
          titleStyle={styles.btnLabel}
          containerStyle={styles.btnContainer}
          icon={
            <Icon
              name={isInstalled ? 'checkcircle' : 'clouddownloado'}
              size={25}
              color="white"
            />
          }
        />
      </View>
    </View>
  );
};

export default AppView;
