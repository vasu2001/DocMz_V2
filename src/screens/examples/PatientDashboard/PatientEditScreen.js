import React, {Component} from 'react';
import {View, Text, Modal} from 'react-native';
import TempEditCard from '../../../components/molecules/PatientVitalCards/TempEditCard';
import WeightEditCard from '../../../components/molecules/PatientVitalCards/WeightEditCard';
import HeightEditCard from '../../../components/molecules/PatientVitalCards/HeightEditCard';
import BPEditCard from '../../../components/molecules/PatientVitalCards/BPEditCard';
import GlucoseEditCard from '../../../components/molecules/PatientVitalCards/GlucoseEditCard';
import SurgeryEditCard from '../../../components/molecules/PatientSurgeyCards/SurgeryEditCard';
import MedsEditCard from '../../../components/molecules/PatientMedsCards/MedsEditCard';

export default function PatientEditScreen({data}) {
  const getEditScreen = () => {
    console.log(data);
    if (data.headerOne == 'Weight') {
      return <WeightEditCard details={data} />;
    } else if (data.headerOne == 'Height') {
      return <HeightEditCard details={data} />;
    } else if (data.headerOne == 'Temprature') {
      return <TempEditCard details={data} />;
    } else if (
      data.headerOne == 'Blood Pressure' ||
      data.headerOne == 'Heart Rate'
    ) {
      return <BPEditCard details={data} />;
    } else if (data.headerOne == 'Glucose') {
      return <GlucoseEditCard />;
    } else if (data.type == 'Surgery') {
      return <SurgeryEditCard data={data} />;
    } else if (data.type == 'Meds') {
      return <MedsEditCard data={data} />;
    }
  };
  return (
    <View
      style={{
        //  : 1,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        width: '100%',
      }}>
      {getEditScreen()}
    </View>
  );
}
