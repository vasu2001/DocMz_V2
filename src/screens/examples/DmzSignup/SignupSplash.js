import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LoginAsPatient from '../../../assets/svg/LoginAsPatient.svg';
import LoginAsDoctor from '../../../assets/svg/LoginAsDoctor.svg';
import Check from '../../../assets/svg/check.svg';
function SignupSplash() {
  const [signupAs, setLoginAs] = useState('patient');
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25,
      }}>
      <TouchableOpacity
        onPress={() => {
          setLoginAs('patient');
        }}>
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 12,
            position: 'relative',
          }}>
          <LoginAsPatient height={120} width={120} />
          {signupAs === 'patient' && (
            <View
              style={{
                position: 'absolute',
                bottom: -15,
                left: '50%',
                transform: [
                  {
                    translateX: -15,
                  },
                ],
                height: 30,
                width: 30,
                borderRadius: 20,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Check height={16} width={16} />
            </View>
          )}
        </View>
        <Text
          style={{
            color: '#007E96',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 10,
            width: '100%',
            textAlign: 'center',
          }}>
          PATIENT
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setLoginAs('doctor');
        }}>
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 11,
          }}>
          <LoginAsDoctor height={120} width={120} />
          {loginAs === 'doctor' && (
            <View
              style={{
                position: 'absolute',
                bottom: -15,
                left: '50%',
                transform: [
                  {
                    translateX: -15,
                  },
                ],
                height: 30,
                width: 30,
                borderRadius: 20,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Check height={16} width={16} />
            </View>
          )}
        </View>
        <Text
          style={{
            color: '#007E96',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 10,
            width: '100%',
            textAlign: 'center',
          }}>
          DOCTOR
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignupSplash;
