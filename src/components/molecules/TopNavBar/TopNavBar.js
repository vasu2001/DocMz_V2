import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import NavBackButton from '../../../assets/svg/nav_back.svg';
import NavHamButton from '../../../assets/svg/nav_ham.svg';

import {PRIMARY} from '../../../styles/colors';

import DmzText from '../../atoms/DmzText/DmzText';

function TopNavBar({
  onLeftButtonPress = () => navigation.goBack(null),
  onRightButtonPress = () => navigation.openDrawer(),
  headerText,
  LeftComp,
  RightComp,
  isClap = false,
  navigation,
  style,
  hideRightComp,
  hideLeftComp,
}) {
  return (
    <Animated.View
      style={[
        Styles.Container,
        isClap && {
          backgroundColor: PRIMARY,
          height: 80,
          marginTop: 0,
        },
        hideLeftComp && hideRightComp ? {justifyContent: 'center'} : null,
        style ? style.Container : null,
      ]}>
      {!hideLeftComp && (
        <TouchableOpacity
          style={Styles.TouchableOpacity}
          onPress={onLeftButtonPress}>
          {!LeftComp ? (
            <NavBackButton
              style={[Styles.BackButton, style ? style.BackButton : null]}
            />
          ) : (
            LeftComp
          )}
        </TouchableOpacity>
      )}
      <DmzText
        text={headerText}
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[
          {
            fontSize: 20,
            color: '#fff',
            alignSelf: 'center',
          },
          style ? style.Header : null,
        ]}
      />
      {!hideRightComp && (
        <TouchableOpacity
          style={Styles.TouchableOpacity}
          // onPress={() => onRightButtonPress()}>
          onPress={() => onRightButtonPress()}>
          {!RightComp ? (
            <NavHamButton
              style={[
                Styles.HamburgerButton,
                style ? style.HamburgerButton : null,
              ]}
            />
          ) : (
            RightComp
          )}
        </TouchableOpacity>
      )}
    </Animated.View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    zIndex: 900,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  TouchableOpacity: {
    padding: 10,
    borderRadius: 20,
  },
  BackButton: {height: 20, marginLeft: 10},
  HamburgerButton: {height: 20, width: 20, marginRight: 15},
});
export default TopNavBar;
