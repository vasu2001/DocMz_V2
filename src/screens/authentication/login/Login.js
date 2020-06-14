import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import NavigationActions from 'react-navigation/src/NavigationActions';
import { useDispatch, useSelector } from 'react-redux';

import { LoginDoctor, LoginPatient } from '../../../redux/action/auth';
import { _LoginPatient } from '../../../redux/action/authAction';

import { PRIMARY, SECONDARY, BLACK } from '../../../styles/colors';
// import Button from '../../../components/primitive/Button/Button';
import Switch from '../../../components/atoms/SwitchButton/SwitchButton';
import SwitchButton from '../../../components/atoms/SwitchButton/SwitchButton';
import { GetPatientInfo } from '../../../redux/action/patientAccountAction';

const Login = props => {
  const [data, setData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(true);
  const [isDoctor, setDoctor] = useState(false);
  const dispatch = useDispatch();
  const authData = useSelector(state => state.AuthReducer);

  const { loginAs = 'patient' } = props.navigation.state.params

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  const handelEmailInput = e => {
    console.log(e);
    setData({ ...data, email: e });
  };

  const handelPasswordInput = e => {
    setData({ ...data, password: e });
  };

  const handelLoginMode = () => {
    console.log('click~');
    setDoctor(!isDoctor);
  };

  const successCallback = successResponce => {
    console.log(`PatientLoginAction(success):  ${successResponce.message}`);
    console.log(authData);
    // dispatch(GetPatientInfo())
    isDoctor
      ? props.navigation.navigate(
        'pageNavigation',
        {},
        NavigationActions.navigate({ routeName: 'doctorHomePage' }),
      )
      : props.navigation.goBack(null);
    // props.navigation.navigate('pageNavigation', {}, NavigationActions.navigate({routeName: 'patientHomePage'}));
  };

  const errorCallback = faildResponce => {
    console.log(`PatientLoginAction(error):  ${faildResponce.message}`);
  };

  const _handelPatientLogin = () => {
    console.log(data);
    dispatch(LoginPatient(data, successCallback, errorCallback));
  };

  const _handelDoctorLogin = () => {
    console.log(data);
    dispatch(LoginDoctor(data, successCallback, errorCallback));
  };

  return loading ? (
    <ActivityIndicator />
  ) : (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#fff' }}>
        <View>
          <Icons
            name="ios-arrow-round-back"
            color={BLACK}
            size={35}
            // onPress={() => props.navigation.navigate('Setting')}
            onPress={() => props.navigation.goBack(null)}
            style={{ position: 'absolute', margin: 20 }}
          />
          <HeadText
            headmsg={'Welcome,'}
            subMsg={'Login as a ' + loginAs}
            onTougle={handelLoginMode}
          />
          <InputBox
            label={'Email Id'}
            secureText={false}
            onChange={handelEmailInput}
          />
          <InputBox
            label={'Password'}
            secureText={true}
            onChange={handelPasswordInput}
          />
          <SubText text={'Forgot Password?'} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              marginVertical: 50,
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate('signupScreen', {signupAs: loginAs})}>
              <Text style={{ color: PRIMARY}}>Signup</Text>
            </TouchableOpacity>

            {
              loginAs === 'doctor' ?
                <TouchableOpacity
                  style={[styles.button, styles.fill]}
                  onPress={() => _handelDoctorLogin()}>
                  <Text style={{ color: '#fff' }}>Login</Text>
                </TouchableOpacity> : <TouchableOpacity
                  style={[styles.button, styles.fill]}
                  onPress={() => _handelPatientLogin()}>
                  <Text style={{ color: '#fff' }}>Login </Text>
                </TouchableOpacity>
            }

          </View>
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  fill: {
    backgroundColor: PRIMARY,
  },
});

const HeadText = props => {
  return (
    <View style={HeadTextStyle.container}>
      <Text style={HeadTextStyle.mainmsg}>{props.headmsg}</Text>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Text style={HeadTextStyle.subMsg}>{props.subMsg}</Text>
        <Switch option1="Patient" option2="Doctor" onClick={props.onTougle} />
      </View>
    </View>
  );
};

const HeadTextStyle = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 90,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    marginBottom: 80,
  },
  mainmsg: {
    marginStart: 28,
    fontWeight: 'bold',
    fontSize: 30,
  },
  subMsg: {
    marginStart: 32,
    fontWeight: 'normal',
    fontSize: 20,
    color: '#000',
  },
});

const SubText = props => {
  return (
    <View style={SubTextStyle.container}>
      <TouchableOpacity>
        <Text style={SubTextStyle.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const SubTextStyle = StyleSheet.create({
  text: {
    textAlign: 'right',
    marginEnd: 20,
    fontSize: 12,
    color: BLACK,
    marginBottom: 10,
  },
});

const InputBox = props => {
  return (
    <View style={InputBoxStyle.container}>
      <View style={InputBoxStyle.inputHolder}>
        <Text style={InputBoxStyle.label}>{`Enter ${props.label}`}</Text>
        <TextInput
          onChangeText={e => props.onChange(e)}
          name={''}
          style={InputBoxStyle.input}
          secureTextEntry={props.secureText}
          placeholder={`Enter your ${props.label}`}
          placeholderTextColor={'#616061'}
        />
      </View>
    </View>
  );
};

const InputBoxStyle = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 5,
  },
  inputHolder: {
    marginStart: 10,
    marginEnd: 10,
  },
  label: {
    fontSize: 12,
    padding: 5,
    color: '#616061',
  },
  input: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: BLACK,
    borderRadius: 100,
    borderWidth: 1,
    paddingHorizontal: 15,
    width: '100%',
  },
});

export default Login;

// import React, {useRef, useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   Animated,
//   Easing,
//   useWindowDimensions,
// } from 'react-native';
// import Curve from '../../../components/atoms/Curve/Curve';
// import DmzButton from '../../../components/atoms/SwitchButton/SwitchButton';
// import LoginAsDoctor from '../../../components/organisms/LoginAsDoctor/LoginAsDoctor';
// import LoginAsPatient from '../../../components/organisms/LoginAsPatient/LoginAsPatient';
// import Fall from '../../../components/molecules/Fall/Fall';
// function Login() {
//   const dimen = useWindowDimensions();
//   const screenWidth = dimen.width;
//   const [isDoctor, setIsDoctor] = useState(false);
//   const switchPtoD = useRef(new Animated.Value(0)).current;
//   const onPress = () => {
//     Animated.timing(switchPtoD, {
//       toValue: isDoctor ? 0 : 1,
//       duration: 1200,
//       delay: 300,
//       easing: Easing.elastic(),
//       useNativeDriver: true,
//     }).start(() => setIsDoctor(!isDoctor));
//   };
//   return (
//     <View style={Styles.Container}>
//       <Curve
//         Size={300}
//         Rotate={3}
//         ScaleX={8}
//         top={-180}
//         left={-20}
//         gradientAngle={10}
//       />
//       <Curve
//         Size={100}
//         Rotate={3}
//         ScaleX={5}
//         top={0}
//         borderRadius={10}
//         right={-80}
//         style={{opacity: 0.2}}
//       />
//       <Curve
//         Size={100}
//         Rotate={3}
//         ScaleX={6}
//         top={300}
//         borderRadius={10}
//         left={-70}
//         style={{opacity: 0.2}}
//       />
//       <Curve
//         Size={200}
//         Rotate={6}
//         ScaleX={5}
//         bottom={-80}
//         left={-150}
//         gradientAngle={120}
//       />
//       {/* <Fall start /> */}
//       <View style={{flexDirection: 'row'}}>
//         <LoginAsPatient
//           style={{
//             transform: [
//               {
//                 translateX: switchPtoD.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [0, -screenWidth],
//                 }),
//               },
//             ],
//           }}
//         />
//         <LoginAsDoctor
//           style={{
//             transform: [
//               {
//                 translateX: switchPtoD.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [0, -screenWidth],
//                 }),
//               },
//             ],
//           }}
//         />
//       </View>
//       <DmzButton
//         onPress={onPress}
//         text={`Login as a ${!isDoctor ? 'doctor' : 'patient'}`}
//         style={{
//           Container: {
//             width: 'auto',
//             elevation: 3,
//             backgroundColor: '#fff',
//             position: 'absolute',
//             right: 0,
//             bottom: '10%',
//             padding: 10,
//             borderRadius: 30,
//             transform: [
//               {
//                 rotate: switchPtoD.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: ['-90deg', '90deg'],
//                 }),
//               },
//               {
//                 translateY: switchPtoD.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [50, screenWidth - 80],
//                 }),
//               },
//             ],
//           },
//         }}
//       />
//     </View>
//   );
// }

// const Styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
// });

// export default Login;
