/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

export default function StepsTracker({
  text,
  completed,
  textStyle,
  completedColor,
  style,
  incompletedColor,
}) {
  return (
    <View
      style={[
        {width: '80%', alignSelf: 'center', marginTop: 30},
        style ? style : null,
      ]}>
      <Text style={[textStyle ? textStyle : null]}>{text}</Text>
      <View style={{marginTop: 5, flexDirection: 'row'}}>
        <View
          style={{
            height: 5,
            width: `${completed}%`,
            backgroundColor: completedColor ? completedColor : 'black',
          }}
        />
        <View
          style={{
            height: 5,
            width: `${100 - completed}%`,
            backgroundColor: incompletedColor ? incompletedColor : 'grey',
          }}
        />
      </View>
    </View>
  );
}
