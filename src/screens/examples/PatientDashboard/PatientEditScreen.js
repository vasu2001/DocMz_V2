import React, {Component} from 'react';
import {View, Text, Modal} from 'react-native';
import TempEditCard from '../../../components/molecules/PatientVitalCards/TempEditCard';
import WeightEditCard from '../../../components/molecules/PatientVitalCards/WeightEditCard';
import HeightEditCard from '../../../components/molecules/PatientVitalCards/HeightEditCard';
import BPEditCard from '../../../components/molecules/PatientVitalCards/BPEditCard';
import GlucoseEditCard from '../../../components/molecules/PatientVitalCards/GlucoseEditCard';
import SurgeryEditCard from '../../../components/molecules/PatientSurgeyCards/SurgeryEditCard';

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
    } else if (data.headerOne == 'Glucose') {
      return <GlucoseEditCard />;
    } else if (data.type == 'Surgery') {
      return <SurgeryEditCard data={data} />;
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
