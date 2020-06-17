import React from 'react';
import {View, TextInput} from 'react-native';

function SearchBarSolid({
  withIcon,
  icon,
  placeholder,
  placeholderTextColor,
  onChangeText,
  onEndEditing,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#fafafa',
          borderRadius: 40,
          paddingHorizontal: 20,
          paddingVertical: 2,
          elevation: 25,
          width: '85%',
        }}>
        <TextInput
          style={{height: 40, lineHeight: 14, fontSize: 14}}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : 'black'
          }
          placeholder={
            placeholder ? placeholder : 'Search by conditions, symptoms...'
          }
          onEndEditing={onEndEditing}
          onChangeText={onChangeText}
          enablesReturnKeyAutomatically
        />
      </View>
      {withIcon && icon}
    </View>
  );
}

export default SearchBarSolid;
