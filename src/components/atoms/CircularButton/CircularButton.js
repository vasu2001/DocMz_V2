import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CircularButton({style}) {
  return (
    <View>
      <MaterialCommunityIcons
        name="check"
        style={[styles.Btn, style ? style : null]}
        color="white"
        size={40}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Btn: {
    width: 70,
    borderRadius: 35,
    height: 70,
    backgroundColor: '#6859A2',
    position: 'absolute',
    bottom: -105,
    alignSelf: 'center',
    alignContent: 'center',
    padding: 15,
  },
});
