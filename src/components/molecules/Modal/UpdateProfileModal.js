import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import BottomModal from './BottomModal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  NEW_PRIMARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
  INPUT_PLACEHOLDER,
} from '../../../styles/colors';

const UpdateProfileModal = ({visible, onCancel, uploadPhoto, removePhoto}) => {
  return (
    <BottomModal {...{visible, onCancel}} contentHeight={230}>
      <Text
        style={{
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 20,
          marginBottom: 25,
          marginTop: 15,
        }}>
        Update Profile Details
      </Text>

      <TextInput
        style={[styles.text, {marginHorizontal: 50, marginBottom: 15}]}
        placeholder="Name"
        placeholderTextColor={INPUT_PLACEHOLDER}
      />

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          marginHorizontal: 50,
        }}>
        <TextInput
          style={[styles.text, {marginRight: 50}]}
          placeholder="Age"
          placeholderTextColor={INPUT_PLACEHOLDER}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.text}
          placeholder="Gender"
          placeholderTextColor={INPUT_PLACEHOLDER}
        />
      </View>
    </BottomModal>
  );
};

export default UpdateProfileModal;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    alignSelf: 'stretch',
    borderBottomWidth: 1.5,
    borderColor: NEW_PRIMARY_BACKGROUND,
    padding: 5,
    marginBottom: 7,
    flex: 1,
  },
  inputContainer: {},
});
