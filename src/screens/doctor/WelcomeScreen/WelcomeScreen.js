import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  NEW_PRIMARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
  GREY_OUTLINE,
  INPUT_PLACEHOLDER,
  SECONDARY_COLOR,
} from '../../../styles/colors';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';

const DocWelcomeScreen = ({params}) => {
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [degree, setDegree] = useState('');
  const [college, setCollege] = useState('');
  const [year, setYear] = useState('');
  const [regNo, setRegNo] = useState('');
  const [regCouncil, setRegCouncil] = useState('');
  const [regYr, setRegYr] = useState('');
  const [yrOfExp, setYrOfExp] = useState('');
  const [clinic, setClinic] = useState(['']);

  return (
    <ScrollView
      bounces={false}
      style={{flex: 1, backgroundColor: 'white'}}
      contentContainerStyle={{alignItems: 'center'}}>
      <View style={[styles.row, {marginTop: 35}]}>
        <Text style={styles.medText}>Welcome to </Text>
        <Text style={styles.boldText}>DocMz</Text>
      </View>
      <Text style={[styles.regText, {marginTop: 5}]}>
        Finish your profile to get started!
      </Text>

      <Image
        source={require('../../../assets/jpg/person2.jpg')}
        style={styles.profilePhoto}
      />
      <Text style={styles.medTextSmall}>Co Ekatarine</Text>

      <View style={[styles.rowContainer, styles.topRow]}>
        <TouchableOpacity onPress={() => setGender('f')}>
          <View style={styles.radioButton}>
            <View style={gender === 'f' ? styles.radioButtonFill : null} />
          </View>
        </TouchableOpacity>
        <Text style={[styles.inputText, {flex: null, marginRight: 40}]}>
          Female
        </Text>

        <TouchableOpacity onPress={() => setGender('m')}>
          <View style={styles.radioButton}>
            <View style={gender === 'm' ? styles.radioButtonFill : null} />
          </View>
        </TouchableOpacity>
        <Text style={[styles.inputText, {flex: null}]}>Male</Text>
      </View>
      <View style={[styles.rowContainer]}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor={INPUT_PLACEHOLDER}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
      </View>
      <View style={[styles.rowContainer, styles.bottomRow]}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor={INPUT_PLACEHOLDER}
          placeholder="Speciality"
          value={speciality}
          onChangeText={setSpeciality}
        />
      </View>

      <Text style={styles.sectionHeaderText}>Education Qualifications</Text>
      <View style={[styles.rowContainer, styles.topRow]}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor={INPUT_PLACEHOLDER}
          placeholder="Degree"
          value={degree}
          onChangeText={setCollege}
        />
      </View>
      <View style={[styles.rowContainer]}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor={INPUT_PLACEHOLDER}
          placeholder="College/ University"
          value={college}
          onChangeText={setCollege}
        />
      </View>
      <View style={[styles.rowContainer, styles.bottomRow]}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor={INPUT_PLACEHOLDER}
          placeholder="Year"
          value={year}
          onChangeText={setYear}
          keyboardType="number-pad"
        />
      </View>

      <Text style={styles.sectionHeaderText}>Registration Details</Text>
      <View style={[styles.rowContainer, styles.topRow]}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor={INPUT_PLACEHOLDER}
          placeholder="Registration Number"
          value={regNo}
          onChangeText={setRegNo}
        />
      </View>
      <View style={[styles.rowContainer]}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor={INPUT_PLACEHOLDER}
          placeholder="Registration Council"
          value={regCouncil}
          onChangeText={setRegCouncil}
        />
      </View>
      <View style={[styles.rowContainer, styles.bottomRow]}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor={INPUT_PLACEHOLDER}
          placeholder="Registration Year"
          value={regYr}
          onChangeText={setRegYr}
          keyboardType="number-pad"
        />
      </View>

      <Text style={styles.sectionHeaderText}>Practice</Text>
      <View style={[styles.rowContainer, styles.topRow]}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor={INPUT_PLACEHOLDER}
          placeholder="Years of Experience"
          value={yrOfExp}
          onChangeText={setYrOfExp}
          keyboardType="number-pad"
        />
      </View>

      {clinic.map((clinicName, i) => {
        const isLast = i + 1 === clinic.length;
        return isLast ? (
          <View style={[styles.rowContainer, styles.bottomRow]}>
            <TextInput
              style={styles.inputText}
              placeholderTextColor={INPUT_PLACEHOLDER}
              placeholder="Add Clinic/Hospital"
              value={clinicName}
              onChangeText={(text) => {
                const newClinic = [...clinic];
                newClinic[i] = text;
                setClinic(newClinic);
              }}
              onEndEditing={() => {
                const newClinic = [...clinic];
                newClinic.push('');
                setClinic(newClinic);
              }}
            />
          </View>
        ) : (
          <View style={[styles.rowContainer]}>
            <Text style={styles.inputText}>{clinicName}</Text>
          </View>
        );
      })}

      <DmzButton
        onPress={() => {}}
        style={{
          Text: {
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontSize: 18,
            fontFamily: 'Montserrat-SemiBold',
          },
          Container: {
            width: 250,
            height: 46,
            borderRadius: 23,
            backgroundColor: SECONDARY_COLOR,
            alignSelf: 'center',
            marginTop: 30,
            elevation: 2,
            marginBottom: 25,
          },
        }}
        text="SUBMIT"
      />
    </ScrollView>
  );
};

export default DocWelcomeScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  medText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 24,
  },
  boldText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: NEW_PRIMARY_BACKGROUND,
  },
  regText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  profilePhoto: {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginTop: 40,
    marginBottom: 10,
  },
  medTextSmall: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 17,
    marginBottom: 30,
  },
  rowContainer: {
    height: 50,
    alignSelf: 'stretch',
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: GREY_OUTLINE,
    borderTopWidth: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  topRow: {
    borderTopWidth: 1,
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  },
  bottomRow: {
    borderBottomRightRadius: 13,
    borderBottomLeftRadius: 13,
  },
  inputText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    flex: 1,
  },
  sectionHeaderText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginHorizontal: 30,
    marginTop: 35,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  radioButton: {
    height: 16,
    width: 16,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: NEW_PRIMARY_COLOR,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  radioButtonFill: {
    height: 9,
    width: 9,
    borderRadius: 5,
    backgroundColor: NEW_PRIMARY_COLOR,
  },
});
