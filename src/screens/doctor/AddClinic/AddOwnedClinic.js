import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import {
  SECONDARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
  INPUT_PLACEHOLDER,
  GREY_BACKGROUND,
} from '../../../styles/colors';

const AddOwnedClinic = ({navigation}) => {
  const [fees, setFees] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [clinicNo, setClinicNo] = useState('');
  const [mapLocation, setmapLocation] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TopNavBar
        hideRightComp
        style={{Container: {marginVertical: 15}}}
        navigation={navigation}
      />
      <ScrollView style={styles.body}>
        <Text style={styles.heading}>Add Details</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text}
            value={clinicName}
            onChangeText={setClinicName}
            placeholder="Clinic Name"
            placeholderTextColor={INPUT_PLACEHOLDER}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text}
            value={city}
            onChangeText={setCity}
            placeholder="City"
            placeholderTextColor={INPUT_PLACEHOLDER}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text}
            value={locality}
            onChangeText={setLocality}
            placeholder="Locality"
            placeholderTextColor={INPUT_PLACEHOLDER}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text}
            value={streetAddress}
            onChangeText={setStreetAddress}
            placeholder="Street Address"
            placeholderTextColor={INPUT_PLACEHOLDER}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text}
            value={mapLocation}
            onChangeText={setmapLocation}
            placeholder="Pick a location on map"
            placeholderTextColor={INPUT_PLACEHOLDER}
            editable={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text}
            value={clinicNo}
            onChangeText={setClinicNo}
            placeholder="Clinic Number"
            placeholderTextColor={INPUT_PLACEHOLDER}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text}
            value={fees}
            onChangeText={setFees}
            placeholder="Fees"
            placeholderTextColor={INPUT_PLACEHOLDER}
            keyboardType="number-pad"
          />
        </View>

        <DmzButton
          onPress={() => {}}
          style={{Text: styles.buttonText, Container: styles.buttonContainer}}
          text="SUBMIT"
        />
      </ScrollView>
    </View>
  );
};

export default AddOwnedClinic;

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 35,
    marginTop: 5,
    flex: 1,
  },
  heading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    marginBottom: 25,
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    flex: 1,
    padding: 5,
  },

  buttonText: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  buttonContainer: {
    width: 250,
    height: 46,
    borderRadius: 23,
    backgroundColor: SECONDARY_COLOR,
    alignSelf: 'center',
    elevation: 2,
    marginTop: 20,
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 30,
    alignSelf: 'stretch',
    borderBottomWidth: 1.5,
    borderColor: NEW_PRIMARY_BACKGROUND,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
