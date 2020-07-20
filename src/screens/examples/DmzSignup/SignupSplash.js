/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LoginAsPatient from '../../../assets/svg/LoginAsPatient.svg';
import LoginAsDoctor from '../../../assets/svg/LoginAsDoctor.svg';
import Check from '../../../assets/svg/check.svg';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import {
  PRIMARY_COLOR,
  TERTIARY_TEXT,
  NEW_PRIMARY_BACKGROUND,
  SEARCH_PLACEHOLDER_COLOR,
  NEW_HEADER_TEXT,
  SECONDARY_COLOR,
} from '../../../styles/colors';
function SignupSplash({onPress, signupAs, setSignupAs}) {
  return (
    <View style={{justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
      <DmzText text="Welcome!" style={styles.HeaderText} />
      <DmzText style={styles.HeaderDesc} text="Choose your account type" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 50,
        }}>
        <TouchableOpacity
          onPress={() => {
            setSignupAs('patient');
            onPress();
          }}>
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 12,
              position: 'relative',
            }}>
            <LoginAsPatient height={120} width={120} />
          </View>
          <Text
            style={{
              color: NEW_HEADER_TEXT,
              fontSize: 18,
              fontFamily: 'Montserrat-SemiBold',
              marginTop: 10,
              width: '100%',
              textAlign: 'center',
            }}>
            PATIENT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSignupAs('doctor');
            onPress();
          }}>
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 11,
            }}>
            <LoginAsDoctor height={120} width={120} />
          </View>
          <Text
            style={{
              color: NEW_HEADER_TEXT,
              fontSize: 18,
              fontFamily: 'Montserrat-SemiBold',
              marginTop: 10,
              width: '100%',
              textAlign: 'center',
            }}>
            DOCTOR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderText: {
    fontSize: 35,
    fontFamily: 'Montserrat-Bold',
    color: NEW_HEADER_TEXT,
    marginTop: 40,
    width: '100%',
    textAlign: 'center',
    lineHeight: 50,
  },
  HeaderDesc: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 22,
    color: NEW_HEADER_TEXT,
    marginTop: 5,
    width: '100%',
    textAlign: 'center',
    opacity: 1,
    letterSpacing: 0.8,
  },
});

export default SignupSplash;
