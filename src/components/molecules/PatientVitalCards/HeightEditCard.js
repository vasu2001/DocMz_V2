/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DmzText from '../../atoms/DmzText/DmzText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CircularButton from '../../atoms/CircularButton/CircularButton';
import {
  PRIMARY_TEXT,
  TERTIARY_TEXT,
  PRIMARY_COLOR,
} from '../../../styles/colors';
import AnimInput from '../AnimInput/AnimInput';

export default function WeightEditCard({style, onPress}) {
  const [height, setHeight] = useState('ft');
  return (
    <View style={{flex: 1, width: '100%', justifyContent: 'center'}}>
      <View style={[styles.Card, style ? style.Card : null]}>
        <DmzText
          text="Add your Height"
          style={{fontSize: 18, color: PRIMARY_TEXT}}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'baseline',
          }}>
          <AnimInput
            placeholder="Height"
            style={{
              Container: {...styles.Container, width: '60%'},
              Input: styles.Input,
              Placeholder: styles.Placeholder,
            }}
          />
          <DmzText
            text={height}
            style={{
              ...styles.Input,
              width: 'auto',
              lineHeight: 20,
              textTransform: 'none',
              paddingBottom: 20,
            }}
          />
          <Picker
            style={{width: '30%'}}
            selectedValue={height}
            onValueChange={(val) => {
              setHeight(val);
            }}>
            <Picker.Item value="ft" label="ft" />
            <Picker.Item value="cm" label="cm" />
          </Picker>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <AnimInput
            placeholder="Date"
            style={{
              Container: styles.Container,
              Input: styles.Input,
              Placeholder: styles.Placeholder,
            }}
          />
          <MaterialCommunityIcons
            name="calendar"
            size={23}
            color="#A7A7A7"
            style={{marginLeft: -20, paddingBottom: 15}}
          />
        </View>
      </View>
      <View style={{alignSelf: 'center', marginTop: -35, elevation: 5}}>
        <CircularButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    elevation: 4,
    borderRadius: 20,
    height: 'auto',
    width: '80%',
    padding: 15,
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingBottom: 70,
  },
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
  Input2: {
    elevation: 0,
    height: 'auto',
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#E7E3FE',
    width: '90%',
    color: PRIMARY_TEXT,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
