import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BlurModal from './BlurModal';
import {
  INPUT_PLACEHOLDER,
  NEW_PRIMARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
  SECONDARY_COLOR,
} from '../../../styles/colors';
import DmzButton from '../../atoms/DmzButton/DmzButton';

const AddDoctor = ({visible, onCancel, onUpdate, onInvite}) => {
  const [doc, setDoc] = useState('');

  return (
    <BlurModal {...{visible, onCancel}}>
      <Text
        style={{
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 20,
          marginBottom: 15,
        }}>
        Add Doctor
      </Text>

      <TextInput
        style={{
          fontFamily: 'Montserrat-Regular',
          fontSize: 13,
          padding: 3,
          borderColor: NEW_PRIMARY_BACKGROUND,
          borderBottomWidth: 1.5,
          alignSelf: 'stretch',
          marginHorizontal: 20,
          marginBottom: 15,
        }}
        placeholder="Doctor's Name"
        placeholderTextColor={INPUT_PLACEHOLDER}
      />

      <DmzButton
        onPress={() => {
          onUpdate(doc);
        }}
        style={{
          Text: {
            width: '100%',
            textAlign: 'center',
            color: '#fff',
            fontSize: 18,
            fontFamily: 'Montserrat-SemiBold',
          },
          Container: {
            width: '100%',
            height: 46,
            borderRadius: 25,
            backgroundColor: SECONDARY_COLOR,
            alignSelf: 'center',
            marginTop: 10,
            elevation: 3,
            marginBottom: 35,
          },
        }}
        text="UPDATE"
      />

      <Text
        style={{
          fontFamily: 'Montserrat-Regular',
          fontSize: 12,
        }}>
        Concerned Doctor not available?
      </Text>
      <Text
        style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: 12,
          color: NEW_PRIMARY_BACKGROUND,
        }}>
        Invite them to join DocEz
      </Text>

      <DmzButton
        onPress={() => {
          onInvite(doc);
        }}
        style={{
          Text: {
            width: '100%',
            textAlign: 'center',
            color: '#fff',
            fontSize: 18,
            fontFamily: 'Montserrat-SemiBold',
          },
          Container: {
            width: '100%',
            height: 46,
            borderRadius: 25,
            backgroundColor: SECONDARY_COLOR,
            alignSelf: 'center',
            marginTop: 15,
            elevation: 3,
          },
        }}
        text="INVITE"
      />
    </BlurModal>
  );
};

export default AddDoctor;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    padding: 5,
    marginTop: 7,
  },
});
