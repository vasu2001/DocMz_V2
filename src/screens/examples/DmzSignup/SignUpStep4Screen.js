/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import StepsTracker from '../../../components/atoms/StepsTracker/StepsTracker';
import TextInputIcon from '../../../components/atoms/TextInputCustom/TextInputIcon';
import {
  TERTIARY_TEXT,
  HEADER_TEXT,
  PRIMARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
  NEW_PRIMARY_COLOR,
  NEW_HEADER_TEXT,
  SECONDARY_COLOR,
} from '../../../styles/colors';

const height = Dimensions.get('screen').height;

export default function SignUpStep4Screen(props) {
  const {credential, setCredential, isLoading} = props;
  const handlePhone = (phone) => {
    setCredential({...credential, phone});
  };
  const handleCity = (city) => {
    setCredential({...credential, city});
  };
  const handleCountry = (country) => {
    setCredential({...credential, country});
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
        }}>
        <StepsTracker
          text="Step 4"
          textStyle={{
            fontSize: 16,
            color: NEW_HEADER_TEXT,
          }}
          completed={100}
          completedColor={NEW_PRIMARY_COLOR}
          incompletedColor={'#F8F7FF'}
        />
        <Text
          style={{
            fontSize: 38,
            color: NEW_HEADER_TEXT,
            marginTop: 49,
            alignSelf: 'center',
            fontWeight: 'bold',
          }}>
          Contact Details
        </Text>
        <View
          style={{
            width: 180,
            height: 180,
            borderRadius: 90,
            backgroundColor: '#fff',
            alignSelf: 'center',
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/images/doc_3.jpg')}
            resizeMode="contain"
            style={{width: '80%', height: '80%', borderRadius: 90}}
          />
        </View>
        <TextInputIcon
          placeholder="Contact Number"
          inputHandler={handlePhone}
          keyboardType="number-pad"
          placeholderTextColor="rgba(0, 0, 0, 0.15)"
          style={styles.inputStyle}
          textStyle={styles.textStyle}
          maxLength={10}
        />
        <TextInputIcon
          placeholder="City of Residence"
          inputHandler={handleCity}
          placeholderTextColor="rgba(0, 0, 0, 0.15)"
          style={styles.inputStyle}
          textStyle={styles.textStyle}
        />
        <TextInputIcon
          placeholder="Country"
          inputHandler={handleCountry}
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
              width: 200,
              height: 46,
              borderRadius: 26,
              backgroundColor: SECONDARY_COLOR,
              alignSelf: 'center',
              marginTop: 40,
              elevation: 10,
              marginBottom: 10,
            },
          }}
          text="Complete"
          isLoading={isLoading}
          disabled={isLoading}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    width: '70%',
    borderBottomColor: NEW_PRIMARY_BACKGROUND,
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
