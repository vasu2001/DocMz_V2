import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import Svg from 'react-native-svg';

function DmzSignupV2() {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        useAngle
        angle={100}
        colors={[
          'rgba(2, 126, 151, 0)',
          'rgba(2, 126, 151, 0)',
          'rgba(2, 126, 151, 0)',
          'rgba(2, 126, 151, 0.31)',
        ]}
        style={{flex: 1, opacity: 0.4}}
      />
    </View>
  );
}

export default DmzSignupV2;
