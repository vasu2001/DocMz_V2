import React from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../styles/index';

import Overlay_circle from '../../../assets/svg/header_overlay_circle.svg';
import SplashOverlayTransparent from '../../../assets/svg/SplashOverlayTransparent.svg';
import OverlaySplashLite from '../../../assets/svg/overlaySplashLite.svg';
import Overlay_plus from '../../../assets/svg/header_overlay_plus.svg';
import Overlay_tablet from '../../../assets/svg/header_overlay_tablet.svg';
import Overlay_tri from '../../../assets/svg/header_overlay_tri.svg';
import Overlay_tri_hollow from '../../../assets/svg/header_overlay_tri_hollow.svg';

import DmzButton from '../../../components/atoms/DmzButton/DmzButton';

function Splash() {
  const dimen = useWindowDimensions();
  const screenHeight = dimen.height;
  const screenWidth = dimen.width;
  return (
    <LinearGradient
      colors={[Colors.header_grad_one, Colors.header_grad_two]}
      useAngle={true}
      angle={180}
      style={[
        SplashStyles.Container,
        {height: screenHeight, width: screenWidth},
      ]}>
      <SplashOverlayTransparent
        style={[OverlayStyles.common, OverlayStyles.SplashOverlayTransparent]}
      />
      <OverlaySplashLite
        style={[OverlayStyles.common, OverlayStyles.OverlaySplashLite]}
      />
      <Overlay_circle
        style={[OverlayStyles.common, OverlayStyles.Overlay_circle]}
      />
      <Overlay_plus
        style={[OverlayStyles.common, OverlayStyles.Overlay_plus]}
      />
      <Overlay_tablet
        style={[OverlayStyles.common, OverlayStyles.Overlay_tablet]}
      />
      <Overlay_tri style={[OverlayStyles.common, OverlayStyles.Overlay_tri]} />
      <Overlay_tri_hollow
        style={[OverlayStyles.common, OverlayStyles.Overlay_tri_secondary]}
      />
      <Overlay_tri_hollow
        style={[OverlayStyles.common, OverlayStyles.Overlay_tri_hollow]}
      />
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../../assets/png/DocmzTitle.png')}
          style={{height: 38, width: 170, resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          flex: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: 300, width: 300, resizeMode: 'contain'}}
          source={require('../../../assets/png/illustration.png')}
        />
      </View>
      <View style={SplashStyles.BottomInfo}>
        <Text
          style={{
            color: '#f1f1f1',
            fontSize: 24,
            fontWeight: '700',
            letterSpacing: 1,
          }}>
          Find your specialist!
        </Text>
        <Text style={{textAlign: 'center', color: '#ddd'}}>
          Now it’s so easy to make an appointment with your doctor
        </Text>
        <TouchableOpacity style={SplashStyles.Button}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const SplashStyles = StyleSheet.create({
  Container: {
    width: '100%',
    backgroundColor: '#6E21D1', //fallback to gradient
    position: 'relative',
  },
  BottomInfo: {
    flex: 2,
    padding: 20,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Button: {
    height: 50,
    width: '50%',
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7C033',
  },
});

const OverlayStyles = StyleSheet.create({
  common: {
    position: 'absolute',
    opacity: 0.75,
  },
  SplashOverlayTransparent: {
    top: '5%',
    left: '0%',
    opacity: 1,
  },
  OverlaySplashLite: {
    bottom: '5%',
    right: '0%',
    opacity: 0.91,
  },
  Overlay_circle: {
    top: '15%',
    left: '35%',
  },
  Overlay_plus: {
    left: '15%',
    top: '0%',
  },
  Overlay_tablet: {
    left: '5%',
    bottom: '30%',
  },
  Overlay_tri: {
    top: '4%',
    right: '10%',
  },
  Overlay_tri_hollow: {
    top: '30%',
    right: '15%',
  },
  Overlay_tri_secondary: {
    bottom: '2%',
    left: '10%',
  },
});

export default Splash;
