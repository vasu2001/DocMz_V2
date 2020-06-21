import React, {Component} from 'react';
import {View, Text, Modal} from 'react-native';
import TempEditCard from '../../../components/molecules/PatientHistoryCards/TempEditCard';
import WeightEditCard from '../../../components/molecules/PatientHistoryCards/TempEditCard';
import HeightEditCard from '../../../components/molecules/PatientHistoryCards/HeightEditCard';
import BPEditCard from '../../../components/molecules/PatientHistoryCards/BPEditCard';

export default function PatientEditScreen({data}) {
  const getEditScreen = () => {
    console.log(data);
    if (data.headerOne == 'Weight') {
      return <WeightEditCard />;
    } else if (data.headerOne == 'Height') {
      return <HeightEditCard />;
    } else if (data.headerOne == 'Temprature') {
      return <TempEditCard />;
    } else if (
      data.headerOne == 'Blood Pressure' ||
      data.headerOne == 'Heart Rate'
    ) {
      return <BPEditCard />;
    }
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ffffff99',
      }}>
      {getEditScreen()}
    </View>
  );
}
