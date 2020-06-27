/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  PermissionsAndroid,
  StyleSheet,
  Button,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AnimInput from '../../../components/molecules/AnimInput/AnimInput';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {UploadProfilePic} from '../../../redux/action/patientAccountAction';
import {TERTIARY_TEXT, PRIMARY_COLOR} from '../../../styles/colors';
import {Picker} from '@react-native-community/picker';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import DatePicker from 'react-native-datepicker';

function Profile({navigation}) {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.AuthReducer);
  const {patient} = useSelector((state) => state.PatientAccountReducer);
  const dimen = useWindowDimensions();
  const screenWidth = dimen.width;
  const [inputFields, setInputFields] = useState({
    name: data.name ? data.name : '',
    phone: data.phone ? data.phone : '',
    email: data.email ? data.email : '',
    sex: data.sex ? data.sex : '',
    dob: data.dob ? data.dob : '',
    bloodGroup: data.bloodGroup ? data.bloodGroup : '',
    height: data.height.val ? data.height.val : '',
    weight: data.weight.val ? data.weight.val : '',
  });

  useEffect(() => {
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    // const {name, phone, email, sex, dob, bloodGroup, height, weight} = patient;
    console.log(patient);
    console.log('###########', data);
    // console.log(patient.name);
    // console.log(patient.phone);
    // console.log(patient.email);
    // console.log(patient.sex);
    // console.log(patient.dob);
    // console.log(patient.bloodGroup);
    // console.log(patient.height);
    // console.log(patient.weight);
    // setInputFields({
    //   name: `${name}`,
    //   phone,
    //   email,
    //   sex,
    //   dob,
    //   bloodGroup,
    //   height,
    //   weight,
    // });
  }, []);
  const onChoosePicture = async () => {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.log(granted);
    if (granted) {
      PickImage();
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
        PickImage();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const PickImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // const source = {uri: response.uri};
        // console.log(source);
        // const path = response.fileName;
        // setData({...inputFields, imagePath: path});
        dispatch(UploadProfilePic(data.id, response));
        // console.log(
        //   '###################---------------------------------#############################################--------------------------------------###',
        // );
        // console.log(data.id);
        // console.log(
        //   '###################---------------------------------#############################################--------------------------------------###',
        // );
        // console.log(response);
      }
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{marginBottom: 70, flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 5,
            paddingBottom: 5,
          }}>
          <TouchableOpacity
            style={{
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'stretch',
            }}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <FontAwesome size={30} color={'#ff1f75'} name="angle-left" />
          </TouchableOpacity>
          <Text style={{fontSize: 18, marginLeft: 15}}>Profile</Text>
        </View>
        <View
          style={{
            flex: 4,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 8,
            paddingBottom: 8,
          }}>
          <TouchableOpacity onPress={onChoosePicture}>
            <View
              style={{
                height: 150,
                width: 150,
                borderRadius: 150,
                backgroundColor: '#fff',
                overflow: 'hidden',
              }}>
              <Image
                style={{height: '100%', width: '100%'}}
                source={require('../../../assets/jpg/person1.jpg')}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  height: 30,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(80,80,80,0.7)',
                }}>
                <Text style={{color: '#f2f2f2', fontSize: 12}}>Upload</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 10,
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 8,
            paddingBottom: 8,
          }}>
          <AnimInput
            placeholder="Name"
            inputHandler={(txt) => setInputFields({...inputFields, name: txt})}
            value={inputFields.name}
            style={{
              Container: styles.Container,
              Input: styles.Input,
              Placeholder: styles.Placeholder,
            }}
          />
          <AnimInput
            placeholder="Contact Number"
            keyboardType="number-pad"
            maxLength={10}
            inputHandler={(txt) => setInputFields({...inputFields, phone: txt})}
            value={inputFields.phone}
            style={{
              Container: styles.Container,
              Input: styles.Input,
              Placeholder: styles.Placeholder,
            }}
          />
          <AnimInput
            placeholder="Email Id"
            inputHandler={(txt) => setInputFields({...inputFields, email: txt})}
            value={inputFields.email}
            style={{
              Container: styles.Container,
              Input: styles.Input,
              Placeholder: styles.Placeholder,
            }}
          />
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}>
            <DmzText
              lite
              text="Gender"
              style={[styles.Placeholder, {marginTop: 20}]}
            />
            <Picker
              selectedValue={inputFields.sex}
              onValueChange={(txt) =>
                setInputFields({...inputFields, sex: txt})
              }>
              <Picker.Item label="Select Gender" value={null} />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Transgender" value="Transgender" />
            </Picker>
          </View>
          <View>
            <DmzText
              lite
              text="Date of Birth"
              style={[styles.Placeholder, {marginTop: 20}]}
            />
            <DatePicker
              // style={{width: 200}}
              date={inputFields.dob}
              mode="date"
              placeholder="Select date of birth"
              format="DD-MM-YYYY"
              minDate="01-01-1950"
              maxDate="01-01-2019"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              allowFontScaling={true}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderWidth: 0,
                  fontSize: 15,
                  height: 40,
                },
              }}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                width: '100%',
                marginTop: 20,
                alignItems: 'center',
              }}
              onDateChange={(date) => {
                console.log(date);
                setInputFields({...inputFields, dob: date});
              }}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}>
            <DmzText
              lite
              text="Blood Group"
              style={[styles.Placeholder, {marginTop: 20}]}
            />
            <Picker
              selectedValue={inputFields.bloodGroup}
              mode={'dropdown'}
              onValueChange={(txt) =>
                setInputFields({...inputFields, bloodGroup: txt})
              }>
              <Picker.Item label="Select Blood Group" value={null} />
              <Picker.Item label="A+" value="A+" />
              <Picker.Item label="A-" value="A-" />
              <Picker.Item label="B+" value="B+" />
              <Picker.Item label="B-" value="B-" />
              <Picker.Item label="O+" value="O+" />
              <Picker.Item label="O-" value="O-" />
              <Picker.Item label="AB+" value="AB+" />
              <Picker.Item label="AB-" value="A-B" />
            </Picker>
          </View>
          <AnimInput
            placeholder="Height (in cm)"
            keyboardType="number-pad"
            inputHandler={(txt) =>
              setInputFields({...inputFields, height: txt})
            }
            value={inputFields.height}
            style={{
              Container: styles.Container,
              Input: styles.Input,
              Placeholder: styles.Placeholder,
            }}
          />
          <AnimInput
            placeholder="Weight (in Kgs)"
            keyboardType="number-pad"
            inputHandler={(txt) =>
              setInputFields({...inputFields, weight: txt})
            }
            value={inputFields.weight}
            style={{
              Container: styles.Container,
              Input: styles.Input,
              Placeholder: styles.Placeholder,
            }}
          />
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          paddingBottom: 10,
          bottom: 0,
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            width: screenWidth * 0.6,
            height: 52,
            backgroundColor: '#ff1f75',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 15,
            elevation: 3,
          }}>
          <Text style={{color: '#f1f1f1'}}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  Container: {height: 60, marginTop: 20, left: 0},
  Input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    left: 0,
    marginTop: 15,
    marginBottom: 0,
  },
  Placeholder: {
    fontSize: 16,
    color: TERTIARY_TEXT,
  },
});
