/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DmzText from '../../atoms/DmzText/DmzText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CircularButton from '../../atoms/CircularButton/CircularButton';
import {PRIMARY_TEXT, TERTIARY_TEXT} from '../../../styles/colors';

export default function WeightEditCard({style}) {
  const [height, setHeight] = useState('ft');
  return (
    <View style={[styles.Card, style ? style.Card : null]}>
      <DmzText
        text="Add your Height"
        style={{fontSize: 18, color: PRIMARY_TEXT}}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#E7E3FE',
        }}>
        <DmzText
          text="Height"
          style={{fontSize: 16, color: TERTIARY_TEXT, fontWeight: '300'}}
          viewStyle={{flexDirection: 'column', width: '100%'}}>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.Input} />
            <DmzText
              text={height}
              style={{
                ...styles.Input,
                width: 'auto',
                lineHeight: 20,
                textTransform: 'none',
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
        </DmzText>
      </View>
      <DmzText
        text="Date"
        style={{fontSize: 16, color: TERTIARY_TEXT, fontWeight: '300'}}
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
      <View style={{position: 'absolute', alignSelf: 'center', bottom: -35}}>
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
    marginBottom: 100,
    paddingBottom: 70,
  },
  Input: {
    height: 'auto',
    borderRadius: 0,
    width: '70%',
    color: PRIMARY_TEXT,
    fontSize: 18,
    lineHeight: 20,
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
