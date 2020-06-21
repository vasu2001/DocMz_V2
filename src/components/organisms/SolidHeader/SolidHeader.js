import React, {useEffect, useState} from 'react';
import {StyleSheet, Animated} from 'react-native';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector} from 'react-redux';
import RadialGradient from 'react-native-radial-gradient';
import {View} from 'react-native-animatable';

function SolidHeader({children, style}) {
  const {theme, isThemeChanging} = useSelector((state) => state.themeReducer);
  const AnimatedRadialGradient = Animated.createAnimatedComponent(
    RadialGradient,
  );

  return (
    <View
      style={[
        {
          overflow: 'hidden',
          backgroundColor: 'red',
        },
        Styles.Container,
        style ? style.Container : null,
      ]}>
      <AnimatedRadialGradient
        colors={['#DEF1F9', '#C0E0EC', '#95CCE0']}
        stops={[0.0, 0.15, 0.2]}
        center={[100, 100]}
        radius={200}
        style={{height: '100%', width: '100%'}}></AnimatedRadialGradient>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {height: 'auto'},
  themeOne: {
    backgroundColor: '#2D6CCB',
  },
  themeTwo: {
    backgroundColor: '#2FCCFF',
  },
});
export default SolidHeader;
