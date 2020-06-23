/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import Svg, {Path} from 'react-native-svg';
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

const width = Dimensions.get('screen').width;

export default function SignUpStep2Screen(props) {
  const {credential, setCredential, onChoosePicture} = props;
  const handleRegistrationNumber = (registration_number) => {
    setCredential({...credential, registration_number});
  };
  const handleSpecialty = (specialty) => {
    setCredential({...credential, specialty});
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
          {/* <Svg width="159" height="158" viewBox="0 0 159 158" fill="none">
            <Path
              d="M0 17.5556V140.444C0 145.1 1.8613 149.566 5.17445 152.858C8.48759 156.15 12.9812 158 17.6667 158H141.333C151.05 158 159 150.1 159 140.444V17.5556C159 7.9 151.05 0 141.333 0H17.6667C12.9812 0 8.48759 1.8496 5.17445 5.1419C1.8613 8.43421 0 12.8995 0 17.5556ZM106 52.6667C106 67.2378 94.1633 79 79.5 79C64.8367 79 53 67.2378 53 52.6667C53 38.0956 64.8367 26.3333 79.5 26.3333C94.1633 26.3333 106 38.0956 106 52.6667ZM26.5 122.889C26.5 105.333 61.8333 95.6778 79.5 95.6778C97.1667 95.6778 132.5 105.333 132.5 122.889V131.667H26.5V122.889Z"
              fill="black"
              fillOpacity="0.1"
            />
          </Svg> */}
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
          inputHandler={handleRegistrationNumber}
          placeholderTextColor="rgba(0, 0, 0, 0.15)"
          style={styles.inputStyle}
          textStyle={styles.textStyle}
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
