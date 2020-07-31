import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BlurModal from './BlurModal';
import {
  INPUT_PLACEHOLDER,
  NEW_PRIMARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
  SECONDARY_COLOR,
} from '../../../styles/colors';
import DmzButton from '../../atoms/DmzButton/DmzButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {array} from 'prop-types';

const AddFamily = ({visible, onCancel, onUpdate}) => {
  const [details, setDetails] = useState({
    name: '',
    relation: '',
    age: '',
    bloodType: '',
    medicalHistory: [''],
  });

  return (
    <BlurModal {...{visible, onCancel}}>
      <Text
        style={{
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 20,
          marginBottom: 15,
        }}>
        Add Member
      </Text>
      <TextInput
        value={details.name}
        onChangeText={(text) => setDetails({...details, name: text})}
        placeholderTextColor={INPUT_PLACEHOLDER}
        placeholder="Name"
        style={styles.text}
      />

      <TextInput
        value={details.relation}
        onChangeText={(text) => setDetails({...details, relation: text})}
        placeholderTextColor={INPUT_PLACEHOLDER}
        placeholder="Relationship"
        style={styles.text}
      />

      {/* <TextInput
        value={details.otor}
        onChangeText={(text) => setDetails({...details, otor: text})}
        placeholderTextColor={INPUT_PLACEHOLDER}
        placeholder="OT/OR"
        style={styles.text}
      /> */}

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}>
        <TextInput
          value={details.age}
          onChangeText={(text) => setDetails({...details, age: text})}
          placeholderTextColor={INPUT_PLACEHOLDER}
          placeholder="Age"
          style={[styles.text, {width: '45%'}]}
          keyboardType="number-pad"
        />
        <TextInput
          value={details.bloodType}
          onChangeText={(text) => setDetails({...details, bloodType: text})}
          placeholderTextColor={INPUT_PLACEHOLDER}
          placeholder="Bloodtype"
          style={[styles.text, {width: '45%'}]}
        />
      </View>

      {details.medicalHistory.map((item, i) => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: NEW_PRIMARY_BACKGROUND,
            borderBottomWidth: 1.5,
            marginBottom: 10,
          }}>
          <TextInput
            value={item}
            onChangeText={(text) => {
              let temp = details.medicalHistory;
              temp[i] = text;
              setDetails({...details, medicalHistory: temp});
            }}
            placeholderTextColor={INPUT_PLACEHOLDER}
            placeholder="Medical History"
            style={[
              styles.text,
              {borderBottomWidth: 0, flex: 1, marginBottom: 0},
            ]}
          />
          <TouchableOpacity
            onPress={() => {
              let temp = details.medicalHistory;
              if (i + 1 === details.medicalHistory.length) temp.push('');
              else temp.splice(i, 1);
              setDetails({...details, medicalHistory: temp});
            }}>
            <FontAwesome5
              name={i + 1 === details.medicalHistory.length ? 'plus' : 'minus'}
              size={10}
              color={INPUT_PLACEHOLDER}
              style={{marginHorizontal: 5}}
            />
          </TouchableOpacity>
        </View>
      ))}

      <DmzButton
        onPress={() => {
          onUpdate(details);
        }}
        style={{
          Text: {
            width: '100%',
            textAlign: 'center',
            color: '#fff',
            fontSize: 18,
            fontFamily: 'Montserrat-SemiBold',
          },
          Container: {
            width: '100%',
            height: 46,
            borderRadius: 25,
            backgroundColor: SECONDARY_COLOR,
            alignSelf: 'center',
            marginTop: 30,
            elevation: 3,
          },
        }}
        text="UPDATE"
      />
    </BlurModal>
  );
};

export default AddFamily;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    alignSelf: 'stretch',
    borderBottomWidth: 1.5,
    borderColor: NEW_PRIMARY_BACKGROUND,
    padding: 5,
    marginBottom: 7,
  },
});
