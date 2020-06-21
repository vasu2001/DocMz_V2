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
    <View style={{flex: 1}}>
      <LinearGradient
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
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '45%',
          borderBottomRightRadius: 60,
          backgroundColor: '#95CCE0',
        }}>
        <RadialGradient
          style={{
            width: '100%',
            height: '80%',
            borderBottomRightRadius: 50,
          }}
          colors={['#DEF1F9', '#C0E0EC', '#95CCE0']}
          stops={[0.0, 0.47, 1]}
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
            color: '#027E97',
          }}
          completed={100}
          completedColor={'#027E97'}
          incompletedColor={'#D5E9F4'}
        />
        <Text
          style={{
            fontSize: 28,
            color: '#027E97',
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
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
          style={styles.inputStyle}
          textStyle={styles.textStyle}
        />
        <TextInputIcon
          placeholder="City of Residence"
          inputHandler={handleCity}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
          style={styles.inputStyle}
          textStyle={styles.textStyle}
        />
        <TextInputIcon
          placeholder="Country"
          inputHandler={handleCountry}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
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
              backgroundColor: '#FF7A59',
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
    borderBottomColor: 'rgba(2, 126, 151, 0.33)',
    borderBottomWidth: 2,
    height: 'auto',
    alignSelf: 'center',
  },
  textStyle: {
    color: '#027E97',
    fontSize: 14,
    marginTop: 20,
  },
});
