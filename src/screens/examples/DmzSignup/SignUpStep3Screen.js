/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
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
  NEW_HEADER_TEXT,
  SECONDARY_COLOR,
  NEW_PRIMARY_COLOR,
  INPUT_PLACEHOLDER,
} from '../../../styles/colors';

const height = Dimensions.get('screen').height;

export default function SignUpStep3Screen(props) {
  const {credential, setCredential, onChoosePicture, imageData} = props;
  const handleRegistrationNumber = (registration_number) => {
    setCredential({...credential, registration_number});
  };
  const handleSpecialty = (specialty) => {
    setCredential({...credential, specialty});
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
          }}></View>
        <StepsTracker
          text="Step 3"
          textStyle={{
            fontSize: 16,
            color: TERTIARY_TEXT,
          }}
          completed={75}
          completedColor={TERTIARY_TEXT}
          incompletedColor={'#F8F7FF'}
        />
        <DmzText
          style={{
            fontSize: 35,
            fontFamily: 'Montserrat-SemiBold',
            color: NEW_HEADER_TEXT,
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
          {imageData?.uri ? (
            <Image
              source={{uri: imageData.uri}}
              style={{height: 200, width: 200}}
            />
          ) : (
            <>
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
            </>
          )}
        </TouchableOpacity>
        <TextInputIcon
          placeholder="Registration Number"
          keyboardType="numbers-and-punctuation"
          inputHandler={handleRegistrationNumber}
          placeholderTextColor={INPUT_PLACEHOLDER}
          style={styles.inputStyle}
          textStyle={styles.textStyle}
          maxLength={15}
          validationCallback={() => credential.registration_number.length >= 8}
          value={credential.registration_number}
        />

        <TextInputIcon
          placeholder="Mention area of Expertise"
          inputHandler={handleSpecialty}
          placeholderTextColor={INPUT_PLACEHOLDER}
          style={styles.inputStyle}
          textStyle={styles.textStyle}
          validationCallback={() => credential.specialty.length > 0}
          value={credential.specialty}
        />
        <DmzButton
          onPress={props.onPress}
          style={{
            Text: {
              width: '100%',
              textAlign: 'center',
              color: 'white',
              fontSize: 18,
              fontFamily: 'Montserrat-SemiBold',
            },
            Container: {
              width: 250,
              height: 46,
              borderRadius: 23,
              backgroundColor: SECONDARY_COLOR,
              alignSelf: 'center',
              marginTop: 40,
              elevation: 2,
            },
          }}
          text="SUBMIT"
        />
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            color: INPUT_PLACEHOLDER,
            fontSize: 14,
            marginTop: 10,
          }}>
          Just one more step to complete{'\n'}your registration process!
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            paddingTop: 5,
            paddingBottom: 15,
          }}>
          <Image
            source={require('../../../assets/icons/docmz.png')}
            style={{height: 21, width: 91}}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    width: '70%',
    borderBottomColor: NEW_PRIMARY_COLOR,
    borderBottomWidth: 1,
    height: 'auto',
    alignSelf: 'center',
  },
  textStyle: {
    color: NEW_HEADER_TEXT,
    fontSize: 13,
    marginTop: 20,
    fontFamily: 'Montserrat-Medium',
  },
});
