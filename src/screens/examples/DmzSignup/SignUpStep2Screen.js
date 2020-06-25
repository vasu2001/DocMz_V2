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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  TERTIARY_TEXT,
  HEADER_TEXT,
  PRIMARY_COLOR,
} from '../../../styles/colors';

const height = Dimensions.get('screen').height;

export default function SignUpStep2Screen(props) {
  const {credential, setCredential, onChoosePicture} = props;
  const handleRegistrationNumber = (registration_number) => {
    setCredential({...credential, registration_number});
  };
  const handleSpecialty = (specialty) => {
    setCredential({...credential, specialty});
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        useAngle
        angle={120}
        colors={[
          'rgba(2, 126, 151, 0)',
          'rgba(2, 126, 151, 0)',
          'rgba(2, 126, 151, 0.31)',
        ]}
        style={{flex: 1, opacity: 0.4}}
      /> */}
      <ScrollView
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: height * 0.45,
            borderBottomRightRadius: 60,
            overflow: 'hidden',
          }}>
          <RadialGradient
            style={{
              width: '100%',
              height: '100%',
              borderBottomRightRadius: 50,
            }}
            colors={['#F8F7FF', '#E9E5FF']}
            stops={[0.0, 1]}
            center={[150, 100]}
            radius={200}
          />
        </View>
        <StepsTracker
          text="Step 2"
          textStyle={{
            fontSize: 16,
            color: TERTIARY_TEXT,
          }}
          completed={67}
          completedColor={TERTIARY_TEXT}
          incompletedColor={'#F8F7FF'}
        />
        <DmzText
          style={{
            fontSize: 38,
            fontWeight: 'bold',
            color: HEADER_TEXT,
            marginTop: 40,
            width: '100%',
            textAlign: 'center',
            lineHeight: 50,
          }}
          text="Build your profile"
        />
        <TouchableOpacity
          onPress={onChoosePicture}
          style={{
            width: 180,
            height: 180,
            borderRadius: 14,
            backgroundColor: '#fff',
            alignSelf: 'center',
            marginTop: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImagePlaceholder />
          <Text
            style={{
              position: 'absolute',
              textAlign: 'center',
              fontSize: 18,
              color: TERTIARY_TEXT,
              fontWeight: 'bold',
            }}>
            Upload {'\n'}Picture/Video
          </Text>
        </TouchableOpacity>
        <TextInputIcon
          placeholder="Registration Number"
          keyboardType="numbers-and-punctuation"
          inputHandler={handleRegistrationNumber}
          placeholderTextColor="rgba(0, 0, 0, 0.15)"
          style={styles.inputStyle}
          textStyle={styles.textStyle}
          maxLength={15}
        />

        <TextInputIcon
          placeholder="Mention area of Expertise"
          inputHandler={handleSpecialty}
          placeholderTextColor="rgba(0, 0, 0, 0.15)"
          style={styles.inputStyle}
          textStyle={styles.textStyle}
        />
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
              width: 131,
              height: 46,
              borderRadius: 17,
              backgroundColor: PRIMARY_COLOR,
              alignSelf: 'center',
              marginTop: 40,
              elevation: 10,
            },
          }}
          text="Submit"
        />
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.15)',
            fontSize: 14,
            marginTop: 10,
          }}>
          Just one more step to complete{'\n'}your registration process!
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    width: '70%',
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 2,
    height: 'auto',
    alignSelf: 'center',
  },
  textStyle: {
    color: HEADER_TEXT,
    fontSize: 14,
    marginTop: 20,
  },
});
