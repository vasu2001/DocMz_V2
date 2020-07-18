/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import StepsTracker from '../../../components/atoms/StepsTracker/StepsTracker';
import TextInputIcon from '../../../components/atoms/TextInputCustom/TextInputIcon';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import ImagePlaceholder from '../../../assets/svg/imagePlaceholder.svg';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {
  TERTIARY_TEXT,
  HEADER_TEXT,
  PRIMARY_COLOR,
  NEW_PRIMARY_COLOR,
  NEW_HEADER_TEXT,
  SECONDARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
} from '../../../styles/colors';

const height = Dimensions.get('screen').height;

export default function SignUpStep2Screen(props) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [null, null, null, null];

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}
        contentContainerStyle={{alignItems: 'center'}}>
        <StepsTracker
          text="Step 2"
          textStyle={{
            fontSize: 16,
            color: NEW_HEADER_TEXT,
          }}
          completed={50}
          completedColor={NEW_PRIMARY_COLOR}
          incompletedColor={'#F8F7FF'}
        />

        <View style={{margin: 40, alignItems: 'center'}}>
          <Text
            style={{color: NEW_HEADER_TEXT, fontSize: 32, fontWeight: 'bold'}}>
            Verify your email
          </Text>
          <Text
            style={{
              color: NEW_HEADER_TEXT,
              fontSize: 20,
              textAlign: 'center',
              marginHorizontal: 20,
              letterSpacing: 0.3,
            }}>
            Please enter the 4 digit OTP sent to you
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          {[0, 1, 2, 3].map((i) => (
            <TextInput
              //   maxLength={1}
              style={styles.inputStyle}
              keyboardType="number-pad"
              value={otp[i]}
              onChangeText={(text) => {
                inputRefs[i + 1]?.focus();
                const newOtp = [...otp];
                newOtp[i] = text[0];
                setOtp(newOtp);
              }}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace' && i > 0) {
                  inputRefs[i - 1].focus();
                  const newOtp = [...otp];
                  newOtp[i - 1] = '';
                  setOtp(newOtp);
                }
              }}
              ref={(ref) => (inputRefs[i] = ref)}
              textStyle={styles.textStyle}
            />
          ))}
        </View>

        <DmzButton
          onPress={props.onPress}
          style={{
            Text: {
              width: '100%',
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
            },
            Container: {
              width: 200,
              height: 46,
              borderRadius: 23,
              backgroundColor: SECONDARY_COLOR,
              alignSelf: 'center',
              marginTop: 40,
              elevation: 10,
              marginBottom: 15,
            },
          }}
          text="CONFIRM"
        />
        <View style={{flexDirection: 'row', margin: 15}}>
          <Text>Didn't recieve OTP? </Text>
          <TouchableOpacity>
            <Text style={{color: NEW_PRIMARY_BACKGROUND}}>Resend</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={{color: NEW_PRIMARY_BACKGROUND, fontSize: 12}}>
            Change email address
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    width: 30,
    borderBottomColor: NEW_PRIMARY_COLOR,
    borderBottomWidth: 2,
    height: 'auto',
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  textStyle: {
    color: NEW_HEADER_TEXT,
    fontSize: 20,
    marginTop: 20,
  },
});
