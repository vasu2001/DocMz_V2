import React from 'react';
import {Text, View} from 'react-native';
import BottomModal from './BottomModal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
import {
  NEW_PRIMARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
} from '../../../styles/colors';

const ProfilePicModal = ({visible, onCancel, uploadPhoto, removePhoto}) => {
  return (
    <BottomModal {...{visible, onCancel}} contentHeight={210}>
      <Text
        style={{
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 20,
          marginBottom: 25,
          marginTop: 15,
        }}>
        Update Profile Picture
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <CustomButton
          onPress={() => {}}
          iconname="camera"
          buttonName="Gallery"
        />
        <CustomButton onPress={() => {}} iconname="image" buttonName="Camera" />
        <CustomButton
          onPress={() => {}}
          iconname="trash"
          buttonName="Remove Photo"
        />
      </View>
    </BottomModal>
  );
};

const CustomButton = ({onPress, iconname, buttonName}) => (
  <View style={{alignItems: 'center'}}>
    <TouchableOpacity
      style={{
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: NEW_PRIMARY_BACKGROUND,
      }}
      {...{onPress}}>
      <FontAwesome5 name={iconname} size={25} color="white" />
    </TouchableOpacity>
    <Text
      style={{
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        marginTop: 5,
      }}>
      {buttonName}
    </Text>
  </View>
);

export default ProfilePicModal;
