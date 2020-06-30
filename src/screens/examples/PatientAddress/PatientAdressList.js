/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PRIMARY_COLOR} from '../../../styles/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import DmzText from '../../../components/atoms/DmzText/DmzText';

export default function PatientAdressScreen({navigation}) {
  const [addresses, setAddress] = useState([]);
  return (
    <View>
      <View
        style={{
          //   flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 15,
          paddingBottom: 5,
          marginHorizontal: 20,
          marginBottom: 50,
        }}>
        <TouchableOpacity
          style={{
            width: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'stretch',
          }}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <FontAwesome size={40} color={PRIMARY_COLOR} name="angle-left" />
        </TouchableOpacity>
        <Text style={{fontSize: 21, marginLeft: 35, fontWeight: 'bold'}}>
          Address
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddAdressScreen');
        }}
        style={{
          width: '70%',
          alignSelf: 'center',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 10,
        }}>
        <Octicons color={PRIMARY_COLOR} size={20} name="location" />
        <DmzText
          type={3}
          text="Add an address"
          style={{marginHorizontal: 30}}
        />
      </TouchableOpacity>
    </View>
  );
}
