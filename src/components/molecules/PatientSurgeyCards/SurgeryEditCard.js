/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Card from '../../atoms/Card/Card';
import DmzText from '../../atoms/DmzText/DmzText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CircularButton from '../../atoms/CircularButton/CircularButton';
import {PRIMARY_TEXT, TERTIARY_TEXT, HEADER_TEXT} from '../../../styles/colors';
import DmzButton from '../../atoms/DmzButton/DmzButton';

export default function SurgeryEditCard({style, data}) {
  return (
    <View style={[styles.Card, style ? style.Card : null]}>
      <DmzText
        text="Enter Surgery Details"
        style={{fontSize: 18, color: PRIMARY_TEXT}}
      />
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
      <DmzText
        text="OT"
        style={{
          fontSize: 16,
          color: TERTIARY_TEXT,
          fontWeight: '300',
          textTransform: 'uppercase',
        }}
        viewStyle={{flexDirection: 'column', width: '100%', marginTop: 25}}>
        <TextInput style={styles.Input2} />
      </DmzText>
      <DmzText
        text="Surgeon"
        style={{fontSize: 16, color: TERTIARY_TEXT, fontWeight: '300'}}
        viewStyle={{flexDirection: 'column', width: '100%', marginTop: 25}}>
        <TextInput style={styles.Input2} />
      </DmzText>
      <DmzText
        text="Status"
        style={{fontSize: 16, color: TERTIARY_TEXT, fontWeight: '300'}}
        viewStyle={{flexDirection: 'column', width: '100%', marginTop: 25}}>
        <TextInput style={styles.Input2} />
      </DmzText>
      <View style={{position: 'absolute', alignSelf: 'center', bottom: -85}}>
        <CircularButton />
        <DmzButton
          text="Cancel"
          style={{
            Container: {
              elevation: 0,
              backgroundColor: 'transparent',
              height: 50,
            },
            Text: {
              color: HEADER_TEXT,
            },
          }}
        />
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
    backgroundColor: '#EEEBFF',
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
    height: 40,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#E7E3FE',
    width: '90%',
    color: PRIMARY_TEXT,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
