/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {TouchableHighlight} from 'react-native-gesture-handler';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import TextInputIcon from '../../../components/atoms/TextInputCustom/TextInputIcon';

export default function WelcomeScreen(props) {
  const [email, setEmail] = useState('emanuel34@gmail.com');
  const [pass, setPass] = useState('');

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        useAngle
        angle={100}
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
          flex: 1,
          width: '100%',
          height: '100%',
        }}>
        <DmzText
          text="Welcome!"
          style={{
            fontSize: 45,
            fontWeight: 'bold',
            color: '#027E97',
            marginTop: 40,
            width: '100%',
            textAlign: 'center',
            lineHeight: 50,
          }}
        />
        <DmzText
          style={{
            fontSize: 24,
            fontWeight: 'normal',
            lineHeight: 29,
            color: '#027E97',
            marginTop: 10,
            width: '100%',
            textAlign: 'center',
            opacity: 1,
          }}
          text="Choose Account Type"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 25,
          }}>
          <View>
            <View
              style={{
                width: 133,
                height: 133,
                elevation: 10,
                borderRadius: 11,
                backgroundColor: '#fff',
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 10,
                width: '100%',
                textAlign: 'center',
              }}>
              PATIENT
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 133,
                height: 133,
                elevation: 10,
                borderRadius: 11,
                backgroundColor: '#fff',
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 10,
                width: '100%',
                textAlign: 'center',
              }}>
              DOCTOR
            </Text>
          </View>
        </View>
        <DmzText
          style={{
            fontWeight: 'normal',
            fontSize: 16,
            lineHeight: 19,
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.25)',
            marginTop: 40,
            marginLeft: 'auto',
            marginRight: 'auto',
            alignSelf: 'center',
          }}
          text="Hello patient"
        />
        <DmzText
          style={{
            fontWeight: 'normal',
            fontSize: 16,
            lineHeight: 19,
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.25)',
            marginHorizontal: 15,
            alignSelf: 'center',
          }}
          text="Please fill out the form below to get started"
        />
        <TextInputIcon
          style={styles.inputContainer}
          value={email}
          inputHandler={(txt) => setEmail(txt)}
          textContentType="emailAddress"
          textStyle={{paddingLeft: 20, color: '#027E97', fontSize: 14}}
          hasIcon={true}
          iconName="email"
          placeholder="Email Id"
          iconStyle={{alignSelf: 'center'}}
          iconColor="rgba(0, 0, 0, 0.15)"
          size={30}
        />
        <TextInputIcon
          style={styles.inputContainer}
          textStyle={{paddingLeft: 20, color: '#027E97', fontSize: 14}}
          hasIcon={true}
          iconName="lock"
          placeholder="Password"
          iconStyle={{alignSelf: 'center'}}
          iconColor="rgba(0, 0, 0, 0.15)"
          size={30}
        />
        <DmzButton
          onPress={() => {
            alert('hello');
          }}
          style={{
            Text: {
              width: '100%',
              textAlign: 'center',
              color: '#fff',
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
          text="SIGN IN"
        />
        <DmzText
          onPress={() => {
            this.props.navigation.navigate('SignUpStep1Screen');
          }}
          style={{
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.25)',
            fontSize: 14,
            marginTop: 10,
            marginLeft: '30%',
          }}
          text="No account ?"
          children={
            <DmzText
              style={{
                color: '#FF7A59',
                textAlign: 'center',
                fontSize: 14,
                marginTop: 10,
                paddingLeft: 10,
              }}
              text="Sign Up"
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '85%',
    borderBottomColor: 'rgba(2, 126, 151, 0.33)',
    borderBottomWidth: 0.5,
    height: 'auto',
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: 'transparent',
  },
});
