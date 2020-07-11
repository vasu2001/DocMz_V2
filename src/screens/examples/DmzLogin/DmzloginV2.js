/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-root-toast';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import TextInputIcon from '../../../components/atoms/TextInputCustom/TextInputIcon';
import LoginAsPatient from '../../../assets/svg/LoginAsPatient.svg';
import LoginAsDoctor from '../../../assets/svg/LoginAsDoctor.svg';
import Check from '../../../assets/svg/check.svg';
import {useDispatch} from 'react-redux/lib/hooks/useDispatch';
import {LoginDoctor, LoginPatient} from '../../../redux/action/auth';
import {GetPatientInfo} from '../../../redux/action/patientAccountAction';
import {call} from 'react-native-reanimated';
import {useSelector} from 'react-redux/lib/hooks/useSelector';
import {
  HEADER_TEXT,
  TERTIARY_TEXT,
  PRIMARY_COLOR,
} from '../../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
export default function DmzLoginV2(props) {
  const [credential, setCredential] = useState({email: '', password: ''});
  const [loginAs, setLoginAs] = useState('patient');
  const {isLoading, data} = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const handleEmail = (email) => {
    setCredential({...credential, email});
  };
  const handlePassword = (pass) => {
    setCredential({...credential, password: pass});
  };

  const handlePatientLogin = () => {
    dispatch(LoginPatient(credential, successCallback, errorCallback));
    console.log('++++++++++++++', data);
  };
  const handleDoctorLogin = () => {
    dispatch(LoginDoctor(credential, successCallback, errorCallback));
  };

  BackHandler.addEventListener('hardwareBackPress', () => {
    props.navigation.navigate('pageNavigation');
  });
  const handleLogin = () => {
    const reg = new RegExp(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    );
    const {email, password} = credential;
    if (
      email !== '' &&
      password !== '' &&
      reg.test(email) &&
      password.length >= 4
    ) {
      loginAs === 'patient' && handlePatientLogin();
      loginAs === 'doctor' && handleDoctorLogin();
    } else {
      password.length < 4
        ? Alert.alert('Password must be atleast 4 characters')
        : reg.test(email)
        ? Alert.alert('One or more fields empty')
        : Alert.alert('Not a valid Email.');
    }
  };
  const successCallback = (successResponce) => {
    showTost(successResponce.message.toString(), () => {
      console.log('444444444444444444444', loginAs);
      console.log('++++++++++++++', successResponce.id);

      loginAs === 'patient'
        ? dispatch(GetPatientInfo(successResponce.id))
        : null;
      loginAs === 'patient'
        ? props.navigation.navigate('PatientHomePage')
        : props.navigation.navigate('DoctorHomePage');
    });
  };

  const errorCallback = (faildResponce) => {
    Alert.alert(faildResponce.message);
    showTost(faildResponce.message, () => {});
    console.log(`PatientLoginAction(error):  ${faildResponce.message}`);
  };

  const [passVisible, setPass] = useState(false);
  const viewPassword = () => {
    setPass(!passVisible);
  };

  const showTost = (msg = '...', callback) => {
    Toast.show(msg, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {
        // calls on toast\`s appear animation start
      },
      onShown: () => {
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        // calls on toast\`s hide animation start.
      },
      onHidden: () => {
        // calls on toast\`s hide animation end.
      },
    });
    callback && callback();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 80, y: 0}}
        useAngle
        angle={100}
        colors={[
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(2, 126, 151, 0)',
          'rgba(2, 126, 151, 0.3)',
        ]}
        style={{flex: 1, opacity: 0.4}}
      /> */}
      <ScrollView style={styles.MainContainer}>
        <TopNavBar
          hideRightComp={true}
          // onLeftButtonPress={() => {}}
          onRightButtonPress={() => {
            props.navigation.navigate('pageNavigation');
          }}
          navigation={props.navigation}
          style={{
            Container: {
              height: 'auto',
              marginTop: 5,
            },
          }}
        />
        <DmzText text="Welcome!" style={styles.HeaderText} />
        <DmzText style={styles.HeaderDesc} text="Choose Account Type" />
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
              {loginAs === 'patient' && (
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
                color: loginAs == 'patient' ? PRIMARY_COLOR : TERTIARY_TEXT,
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
                color: loginAs == 'doctor' ? PRIMARY_COLOR : TERTIARY_TEXT,
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
        <DmzText
          numberOfLines={3}
          adjustsFontSizeToFit={true}
          lite
          style={{
            fontSize: 16,
            lineHeight: 19,
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.15)',
            marginTop: 15,
            textTransform: 'none',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          text={
            loginAs === 'patient'
              ? 'Hello patient! \n Please fill out the form below to get started'
              : 'Hello doctor! \n Please fill out the form below to get started'
          }
        />
        {/* <View
          style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <DmzText
            style={{
              fontWeight: 'normal',
              fontSize: 16,
              lineHeight: 19,
              textAlign: 'center',
              color: 'rgba(0, 0, 0, 0.15)',
              marginHorizontal: 15,
            }}
            text="Please fill out the form below to get started"
          />
        </View> */}
        <TextInputIcon
          style={styles.inputContainer}
          inputHandler={handleEmail}
          textContentType="emailAddress"
          keyboardType={'email-address'}
          textStyle={{
            paddingLeft: 20,
            color: TERTIARY_TEXT,
            fontSize: 14,
            fontWeight: '700',
            flex: 1,
          }}
          placeholderTextColor="rgba(0, 0, 0, 0.15)"
          hasIcon={true}
          iconName="email"
          placeholder="Email Id"
          iconStyle={{alignSelf: 'center'}}
          iconColor={TERTIARY_TEXT}
          size={30}
        />
        <TextInputIcon
          style={styles.inputContainer}
          textStyle={{
            paddingLeft: 20,
            color: TERTIARY_TEXT,
            fontSize: 14,
            fontWeight: '700',
            flex: 1,
          }}
          secureTextEntry={!passVisible}
          hasIcon={true}
          inputHandler={handlePassword}
          iconName="lock"
          placeholderTextColor="rgba(0, 0, 0, 0.15)"
          placeholder="Password"
          iconStyle={{alignSelf: 'center'}}
          iconColor={TERTIARY_TEXT}
          size={30}>
          <Icon
            onPress={viewPassword}
            name={passVisible ? 'eye' : 'eye-off'}
            style={{
              alignSelf: 'center',
            }}
            size={25}
          />
        </TextInputIcon>
        <DmzButton
          onPress={handleLogin}
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
              borderRadius: 25,
              backgroundColor: PRIMARY_COLOR,
              alignSelf: 'center',
              marginTop: 40,
              elevation: 10,
            },
          }}
          text="SIGN IN"
          isLoading={isLoading}
          disabled={isLoading}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: 'auto',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#AAA4C5',
              fontSize: 14,
              marginTop: 10,
            }}>
            No account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('signupScreen');
            }}>
            <Text
              style={{
                color: '#EA508F',
                textAlign: 'center',
                fontSize: 14,
                marginTop: 10,
                paddingLeft: 10,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        {/*  <DmzText
          style={{
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.15)',
            fontSize: 14,
            marginTop: 10,
            marginLeft: '30%',
            backgroundColor: 'red',
          }}
          text="No account ?"
          children={
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('signupScreen');
              }}>
              <DmzText
                style={{
                  color: HEADER_TEXT,
                  textAlign: 'center',
                  fontSize: 14,
                  marginTop: 10,
                  paddingLeft: 10,
                }}
                text="Sign Up"
              />
            </TouchableOpacity>
          }
        /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '85%',
    borderBottomColor: 'rgba(2, 126, 151, 0.48)',
    borderBottomWidth: 0.5,
    height: 'auto',
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: 'transparent',
  },
  MainContainer: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  HeaderText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: HEADER_TEXT,
    marginTop: 5,
    width: '100%',
    textAlign: 'center',
    lineHeight: 50,
  },
  HeaderDesc: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 18,
    color: TERTIARY_TEXT,
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
    opacity: 1,
    letterSpacing: 0.8,
  },
});
