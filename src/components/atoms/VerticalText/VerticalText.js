import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function VerticalText({text, isActive = false}) {
  return (
    <View style={[Styles.Day, isActive && Styles.DayActive]}>
      <Text
        style={[Styles.DayText, Styles.Up, isActive && Styles.DayTextActive]}>
        {text.Top}
      </Text>
      <Text
        style={[Styles.DayText, Styles.Down, isActive && Styles.DayTextActive]}>
        {text.Bottom}
      </Text>
    </View>
  );
}
const Styles = StyleSheet.create({
  Day: {
    height: 70,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  DayText: {
    fontSize: 16,
    color: '#9C77BC',
  },
  DayTextActive: {
    color: '#fff',
  },
  Up: {
    fontWeight: 'bold',
  },
  Down: {
    fontWeight: '500',
  },
  DayActive: {
    backgroundColor: '#9C77BC',
  },
});

export default VerticalText;
