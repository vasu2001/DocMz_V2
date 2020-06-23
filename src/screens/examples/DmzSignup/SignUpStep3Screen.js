/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import StepsTracker from '../../../components/atoms/StepsTracker/StepsTracker';
import TextInputIcon from '../../../components/atoms/TextInputCustom/TextInputIcon';
import {TERTIARY_TEXT, HEADER_TEXT, PRIMARY_COLOR} from '../../../styles/colors';

const width = Dimensions.get('screen').width;

export default function SignUpStep3Screen(props) {
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
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '45%',
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
      <View
        style={{
          position: 'absolute',
          flex: 1,
          width: '100%',
          height: '100%',
        }}>
        <StepsTracker
          text="Step 3"
          textStyle={{
            fontSize: 16,
            color: TERTIARY_TEXT,
          }}
          completed={100}
          completedColor={TERTIARY_TEXT}
          incompletedColor={'#F8F7FF'}
        />
        <Text
          style={{
            fontSize: 38,
            color: HEADER_TEXT,
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
            borderRadius: 14,
            backgroundColor: '#fff',
            alignSelf: 'center',
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/images/doc_3.jpg')}
            resizeMode="contain"
            style={{width: '80%', height: '80%', borderRadius: 14}}
          />
        </View>
        <TextInputIcon
          placeholder="Contact Number"
          inputHandler={handlePhone}
          placeholderTextColor="rgba(0, 0, 0, 0.15)"
          style={styles.inputStyle}
          textStyle={styles.textStyle}
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
              width: 131,
              height: 46,
              borderRadius: 17,
              backgroundColor: PRIMARY_COLOR,
              alignSelf: 'center',
              marginTop: 40,
              elevation: 10,
            },
          }}
          text="Complete"
          isLoading={isLoading}
          disabled={isLoading}
        />
      </View>
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
