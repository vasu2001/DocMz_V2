/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {floor} from 'lodash';

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
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[textStyle ? textStyle : null]}>
        {text}
      </Text>
      <View style={{marginTop: 5, flexDirection: 'row'}}>
        {[25, 50, 75, 100].map((no) => (
          <View
            style={[
              styles.indicator,
              {
                backgroundColor:
                  no <= completed ? completedColor : incompletedColor,
                marginRight: no == 100 ? 0 : 20,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    height: 5,
    borderRadius: 5,
  },
});
