import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  AsyncStorage,
  Button,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import NavigationActions from 'react-navigation/src/NavigationActions';
import axios from 'axios';
import {Host} from '../../../utils/connection';
import {PRIMARY, BACKGROUND, BLACK, WHITE} from '../../../styles/colors';
// import Button from '../../../../xsrc/components/primitive/Button/Button';
import Switch from '../../../components/atoms/SwitchButton/Switch';
import ImagePicker from 'react-native-image-picker';
import SMbutton from '../../../components/atoms/SMbutton/SMbutton';

const SignUp = props => {
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    registration_id: '',
    specialty: '',
    city: '',
    state: '',
    country: '',
    description: '',
    fee: '',
    imagePath: '',
  });
  const {signupAs} = props.navigation.state.params;
  const [loading, setLoading] = useState(true);
  const [isDoctor, setDoctor] = useState(signupAs === 'doctor');

  const onChoosePicture = async () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.log(granted);
    if (granted) {
      ImagePicker.showImagePicker(options, response => {
        // console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          // const source = {uri: response.uri};
          // console.log(source);
          const path = response.fileName;
          setData({...data, imagePath: path});
        }
      });
    } else {
      askPermission();
    }
  };
  const askPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'DocMz needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // ImagePicker();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handelSignupMode = () => {
    console.log('click~');
    setDoctor(!isDoctor);
  };

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  const handelEmailChange = e => {
    console.log(e.target);
    setData({...data, email: e});
  };

  const handelPasswordChange = e => {
    setData({...data, password: e});
  };

  const handelNameChange = e => {
    setData({...data, name: e});
  };

  const handelPhoneChange = e => {
    setData({...data, phone: e});
  };

  const handelRegistrationChange = e => {
    setData({...data, registration_id: e});
  };

  const handelSpecialty = e => {
    setData({...data, specialty: e});
  };

  const handelCityChange = e => {
    setData({...data, city: e});
  };
  const handelStateChange = e => {
    setData({...data, state: e});
  };

  const handelCountryChange = e => {
    setData({...data, country: e});
  };
  const handleDescriptionChange = e => {
    setData({...data, description: e});
  };
  const handleFeeChange = e => {
    setData({...data, fee: e});
  };

  const _save = async userData => {
    await AsyncStorage.setItem('userData', JSON.stringify(userData), () => {
      isDoctor
        ? props.navigation.navigate('Doctor')
        : props.navigation.navigate('Home');
    });
  };

  const handelPatientSubmit = () => {
    console.log(data);

    const config = {
      'Content-Type': 'application/json',
    };

    axios
      .post(`${Host}/patient/register`, data, config)
      .then(result => {
        console.log('result');
        if (result.data.status) {
          const __data = {
            mode: isDoctor ? 'doctor' : 'patient',
            email: result.data.data.email,
            name: result.data.data.name,
            phone: result.data.data.phone,
            id: result.data.data._id,
          };
          _save(__data);

          // dispatch(addUserToRedux(data))
        }
        console.log(result.data.status);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handelDoctorSubmit = () => {
    console.log('DOctor submit.');
  };

  return loading ? (
    <ActivityIndicator />
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: BACKGROUND}}>
      <View>
        <Icons
          name="ios-arrow-round-back"
          color={PRIMARY}
          size={35}
          onPress={() => props.navigation.goBack(null)}
          style={{position: 'absolute', margin: 20}}
        />
        <HeadText
          headmsg={'Create Account,'}
          subMsg={'Sign up as ' + signupAs}
          onTougle={handelSignupMode}
        />
        <InputBox
          label={'Full Name'}
          secureText={false}
          onChange={handelNameChange}
        />
        <InputBox
          label={'Email Id'}
          secureText={false}
          onChange={handelEmailChange}
        />
        <InputBox
          label={'Phone No'}
          secureText={false}
          onChange={handelPhoneChange}
        />
        <InputBox
          label={'Password'}
          secureText={true}
          onChange={handelPasswordChange}
        />
        {isDoctor && (
          <React.Fragment>
            <InputBox
              label={'Registration Number'}
              secureText={false}
              onChange={handelRegistrationChange}
            />
            <InputBox
              label={'Specialty'}
              secureText={false}
              onChange={handelSpecialty}
            />
            <InputBox
              label={'City'}
              secureText={false}
              onChange={handelCityChange}
            />
            <InputBox
              label={'State'}
              secureText={false}
              onChange={handelStateChange}
            />
            <InputBox
              label={'Country'}
              secureText={false}
              onChange={handelCountryChange}
            />
            <InputBox
              label={'Fees'}
              secureText={false}
              onChange={handleFeeChange}
            />
            <InputBox
              label={'Description'}
              secureText={false}
              onChange={handleDescriptionChange}
              multiline
              numberOfLines={5}
            />
            <View
              style={{
                backgroundColor: '#ddd',
                padding: 10,
                borderRadius: 10,
                marginLeft: 20,
                marginRight: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={onChoosePicture}>
                <Text>
                  {!data.imagePath ? 'Upload picture' : 'Picture path'}
                </Text>
              </TouchableOpacity>
              <Text>{data.imagePath}</Text>
            </View>
          </React.Fragment>
        )}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginVertical: 50,
          }}>
          <SMbutton
            name="LOGIN"
            active={true}
            onClick={() => props.navigation.navigate('loginScreen')}
          />
          <SMbutton
            name="SINGUP"
            active={0}
            onClick={() =>
              isDoctor ? handelDoctorSubmit() : handelPatientSubmit()
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

const HeadText = props => {
  return (
    <View style={HeadTextStyle.container}>
      <Text style={HeadTextStyle.mainmsg}>{props.headmsg}</Text>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Text style={HeadTextStyle.subMsg}>{props.subMsg}</Text>
        {/* <Switch option1="Patient" option2="Doctor" onClick={props.onTougle} /> */}
      </View>
    </View>
  );
};

const HeadTextStyle = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 80,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    marginBottom: 30,
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

const InputBox = props => {
  const {multiline = false, numberOfLines = 1} = props;
  return (
    <View style={InputBoxStyle.container}>
      <View style={InputBoxStyle.inputHolder}>
        <Text style={InputBoxStyle.label}>{`Enter ${props.label}`}</Text>
        <TextInput
          onChangeText={e => props.onChange(e)}
          name={''}
          style={[
            InputBoxStyle.input,
            multiline && {textAlignVertical: 'top', borderRadius: 15},
          ]}
          secureTextEntry={props.secureText}
          placeholder={`Enter your ${props.label}`}
          placeholderTextColor={'#616061'}
          multiline={multiline}
          numberOfLines={numberOfLines}
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
    borderColor: PRIMARY,
    borderRadius: 100,
    borderWidth: 1,
    paddingHorizontal: 15,
    width: '100%',
  },
});

const ActionButton = props => {
  return (
    <View style={ActionButtonStyle.container}>
      <TouchableOpacity
        style={[
          ActionButtonStyle.btn,
          {backgroundColor: props.backgroundColor, color: props.color},
        ]}
        onPress={props.onClick}>
        <View style={ActionButtonStyle.row_Box}>
          {props.icon ? (
            <Icon
              style={ActionButtonStyle.icon}
              name="facebook"
              color={'#fff'}
              size={16}
            />
          ) : null}
          <Text style={[ActionButtonStyle.btnText, {color: props.color}]}>
            {props.label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ActionButtonStyle = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,

    marginEnd: 10,
    marginStart: 10,
  },
  btn: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'normal',
    letterSpacing: 1,
  },
  row_Box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginEnd: 5,
    backgroundColor: '#3b1ce7',
    padding: 2,
    borderRadius: 2,
  },
});

const BottomText = props => {
  return (
    <View style={[BottomTextStyle.container, BottomTextStyle.row_Box]}>
      <Text style={BottomTextStyle.text}>{props.text}</Text>
      <TouchableOpacity>
        <Text
          style={[
            BottomTextStyle.text,
            {color: props.color, fontWeight: 'bold'},
          ]}>
          {props.linkText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const BottomTextStyle = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    marginEnd: 10,
    marginStart: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
    marginEnd: 2,
  },
  row_Box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUp;
