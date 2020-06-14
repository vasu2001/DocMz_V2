import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

function RadioBtn({
  size = 1,
  active,
  keyName,
  value = 'null',
  setKeyName = () => {},
}) {
  size = size > 3 ? 3 : size;
  const Size = [10, 20, 30, 40];
  const customContainer = [
    Styles.Container,
    {
      height: size ? Size[size] : Size[0],
      width: size ? Size[size] : Size[0],
      borderRadius: size ? Size[size] : Size[0],
    },
  ];
  const customCircle = [
    Styles.circle,
    {
      height: size ? Math.floor(Size[size] / 2) : Math.floor(Size[0] / 2),
      width: size ? Math.floor(Size[size] / 2) : Math.floor(Size[0] / 2),
      borderRadius: size ? Math.floor(Size[size] / 2) : Math.floor(Size[0] / 2),
    },
  ];
  const customText = [
    Styles.Text,
    {
      fontSize: size ? Size[size] : Size[0],
      lineHeight: size ? Size[size] : Size[0],
    },
  ];
  const onPress = () => {
    setKeyName(keyName);
  };
  return (
    <TouchableWithoutFeedback onPress={onPress} style={Styles.Touchable}>
      <View style={customContainer}>
        {active && <View style={customCircle} />}
      </View>
      <Text style={customText}>{value}</Text>
    </TouchableWithoutFeedback>
  );
}

const Styles = StyleSheet.create({
  Touchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Container: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: 'black',
  },
  Text: {
    marginLeft: 4,
  },
});
export default RadioBtn;
