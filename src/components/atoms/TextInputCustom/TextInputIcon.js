import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 *
 * @param {} param0
 */

function TextInputIcon({
  placeholder,
  textContentType,
  placeholderTextColor,
  keyboardType = 'default',
  style,
  value,
  hasIcon = false,
  iconPos = 'left',
  iconName = 'question',
  iconStyle,
  iconColor,
  textStyle,
  size,
  inputHandler,
  secureTextEntry = false,
  maxLength,
  onPress,
  children,
}) {
  return (
    <View
      style={[
        style ? style : TextInputCustomStyles.Container,
        {flexDirection: iconPos == 'right' ? 'row-reverse' : 'row'},
      ]}>
      {hasIcon ? (
        <MaterialCommunityIcons
          onPress={onPress}
          name={iconName}
          color={iconColor ? iconColor : '#000'}
          size={size}
          style={[
            TextInputCustomStyles.iconContainer,
            iconStyle ? iconStyle : null,
          ]}
        />
      ) : null}

      <TextInput
        value={value}
        textContentType={textContentType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={(text) => inputHandler(text)}
        style={[textStyle ? textStyle : null]}
        maxLength={maxLength}
      />
      {children}
    </View>
  );
}

const TextInputCustomStyles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 5,
    height: 'auto',
  },
  iconContainer: {
    backgroundColor: 'transparent',
    margin: 5,
    paddingLeft: 10,
  },
});

export default TextInputIcon;
