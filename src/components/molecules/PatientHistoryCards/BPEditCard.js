/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import DmzText from '../../atoms/DmzText/DmzText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CircularButton from '../../atoms/CircularButton/CircularButton';
import {PRIMARY_TEXT} from '../../../styles/colors';

export default function WeightEditCard({style}) {
  return (
    <View style={[styles.Card, style ? style.Card : null]}>
      <DmzText
        text="Enter your Blood Pressure"
        style={{fontSize: 18, color: PRIMARY_TEXT}}
      />
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <DmzText
          text="Systolic"
          style={{fontSize: 16, color: '#9D9D9D', fontWeight: '300'}}
          viewStyle={{flexDirection: 'column', width: '50%'}}>
          <TextInput style={styles.Input} />
        </DmzText>
        <DmzText
          text="Diastolic"
          style={{fontSize: 16, color: '#9D9D9D', fontWeight: '300'}}
          viewStyle={{flexDirection: 'column', width: '50%'}}>
          <TextInput style={styles.Input} />
        </DmzText>
      </View>
      <DmzText
        text="Heart Rate"
        style={{fontSize: 16, color: '#9D9D9D', fontWeight: '300'}}
        viewStyle={{flexDirection: 'column', width: '100%', marginTop: 25}}>
        <TextInput style={styles.Input2} />
      </DmzText>
      <DmzText
        text="Date"
        style={{fontSize: 16, color: '#9D9D9D', fontWeight: '300'}}
        viewStyle={{flexDirection: 'column', width: '100%', marginTop: 25}}>
        <View style={{flexDirection: 'row'}}>
          <TextInput style={styles.Input2} />
          <MaterialCommunityIcons
            name="calendar"
            size={23}
            color="#A7A7A7"
            style={{marginLeft: -20}}
          />
        </View>
      </DmzText>

      <CircularButton />
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
    marginBottom: 100,
    paddingBottom: 70,
  },
  Input: {
    elevation: 0,
    height: 'auto',
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#E7E3FE',
    width: '70%',
    color: PRIMARY_TEXT,
    fontSize: 18,
    fontWeight: 'bold',
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
