/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Card from '../../atoms/Card/Card';
import DmzText from '../../atoms/DmzText/DmzText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CircularButton from '../../atoms/CircularButton/CircularButton';
import {PRIMARY_TEXT, TERTIARY_TEXT} from '../../../styles/colors';

export default function WeightEditCard({style}) {
  return (
    <View style={[styles.Card, style ? style.Card : null]}>
      <DmzText
        text="Add your Weight"
        style={{fontSize: 18, color: PRIMARY_TEXT}}
      />
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <DmzText
          text="Weight"
          style={{fontSize: 16, color: TERTIARY_TEXT, fontWeight: '300'}}
          viewStyle={{flexDirection: 'column', width: '50%'}}>
          <TextInput style={styles.Input} />
        </DmzText>
        <DmzText
          text="Fat Mass"
          style={{fontSize: 16, color: TERTIARY_TEXT, fontWeight: '300'}}
          viewStyle={{flexDirection: 'column', width: '50%'}}>
          <TextInput style={styles.Input} />
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
