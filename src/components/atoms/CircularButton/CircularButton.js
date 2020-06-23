import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HEADER_TEXT} from '../../../styles/colors';

export default function CircularButton({style}) {
  return (
    // <View>
    <TouchableOpacity style={[styles.Btn, style ? style : null]}>
      <MaterialCommunityIcons
        onPress={() => {
          alert('asdf');
        }}
        name="check"
        // style={[styles.Btn, style ? style : null]}
        color="white"
        size={40}
      />
    </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  Btn: {
    width: 70,
    borderRadius: 35,
    height: 70,
    backgroundColor: HEADER_TEXT,
    padding: 15,
  },
});
