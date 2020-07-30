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

const AddReport = ({visible, onCancel, onUpload}) => {
  const [file, setFile] = useState(null);

  return (
    <BlurModal {...{visible, onCancel}}>
      <Text
        style={{
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 20,
          marginBottom: 15,
        }}>
        Upload Report
      </Text>

      <TouchableOpacity>
        {file ? (
          <Text style={styles.text}>{file.name}</Text>
        ) : (
          <Text style={[styles.text, {color: INPUT_PLACEHOLDER}]}>
            Select Report file
          </Text>
        )}
      </TouchableOpacity>

      <DmzButton
        onPress={() => {
          onUpload(file);
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
            marginTop: 15,
            elevation: 3,
          },
        }}
        text="UPLOAD"
      />
    </BlurModal>
  );
};

export default AddReport;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    padding: 5,
    marginTop: 7,
  },
});
