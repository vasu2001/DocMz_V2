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

const width = Dimensions.get('screen').width;

export default function SignUpStep2Screen(props) {
  const [email, setEmail] = useState();
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
          text="Step 2"
          textStyle={{
            fontSize: 16,
            color: '#027E97',
          }}
          completed={67}
          completedColor={'#027E97'}
          incompletedColor={'#D5E9F4'}
        />
        <DmzText
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#027E97',
            marginTop: 20,
            width: '100%',
            textAlign: 'center',
            lineHeight: 50,
          }}
          text="Build your profile"
        />
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
          <Svg width="159" height="158" viewBox="0 0 159 158" fill="none">
            <Path
              d="M0 17.5556V140.444C0 145.1 1.8613 149.566 5.17445 152.858C8.48759 156.15 12.9812 158 17.6667 158H141.333C151.05 158 159 150.1 159 140.444V17.5556C159 7.9 151.05 0 141.333 0H17.6667C12.9812 0 8.48759 1.8496 5.17445 5.1419C1.8613 8.43421 0 12.8995 0 17.5556ZM106 52.6667C106 67.2378 94.1633 79 79.5 79C64.8367 79 53 67.2378 53 52.6667C53 38.0956 64.8367 26.3333 79.5 26.3333C94.1633 26.3333 106 38.0956 106 52.6667ZM26.5 122.889C26.5 105.333 61.8333 95.6778 79.5 95.6778C97.1667 95.6778 132.5 105.333 132.5 122.889V131.667H26.5V122.889Z"
              fill="black"
              fillOpacity="0.1"
            />
          </Svg>
          <Text
            style={{
              position: 'absolute',
              textAlign: 'center',
              fontSize: 18,
              color: 'rgba(0, 0, 0, 0.43)',
              fontWeight: 'bold',
            }}>
            Upload {'\n'}Picture/Video
          </Text>
        </View>
        <TextInputIcon
          placeholder="Registration Number"
          value={email}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
          style={styles.inputStyle}
          textStyle={styles.textStyle}
        />

        <TextInputIcon
          placeholder="Mention area of Expertise"
          value={email}
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
          text="Submit"
        />
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.25)',
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
