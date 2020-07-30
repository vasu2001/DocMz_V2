import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {GREY_BACKGROUND} from '../../../styles/colors';
import MedsItem from '../../../components/molecules/MedicalHistory/MedsItem';
import NewItem from '../../../components/molecules/MedicalHistory/NewItem';

const dummyData = {
  Diabetes: [
    {
      name: 'Galvus Met 50/500 mg',
      frequency: 2,
      completedDays: 16,
      totalDays: 56,
      alert: true,
    },
    {
      name: 'Janumet 50/1 gm Tablet',
      frequency: 2,
      completedDays: 16,
      totalDays: 56,
      alert: false,
    },
  ],
  Migrane: [
    {
      name: 'Esess 42',
      frequency: 1,
      completedDays: 6,
      totalDays: 14,
      alert: false,
    },
  ],
};

const Meds = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
      }}>
      {Object.keys(dummyData).map((disease) => (
        <View style={{marginVertical: 10}}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 18,
              marginBottom: 10,
            }}>
            {disease}
          </Text>

          {dummyData[disease].map((item) => (
            <MedsItem data={item} />
          ))}
        </View>
      ))}
      <NewItem />
    </ScrollView>
  );
};

export default Meds;