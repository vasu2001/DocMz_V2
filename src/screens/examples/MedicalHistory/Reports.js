import React from 'react';
import {Text, View, FlatList} from 'react-native';
import NewItem from '../../../components/molecules/MedicalHistory/NewItem';
import ReportsItem from '../../../components/molecules/MedicalHistory/ReportsItem';

const dummyData = [
  {
    name: 'Blood Test',
    details: 'Iron, Feritin',
    date: 'Uploaded on 12 May 2020',
  },
  {
    name: 'Urine Test',
    details: 'Complete Urine Routine',
    date: 'Uploaded on 12 May 2020',
  },
  {
    name: 'Ultrasound Scan',
    details: 'Upper Abdomen',
    date: 'Uploaded on 12 May 2020',
  },
];

const Reports = ({params}) => {
  return (
    <FlatList
      style={{padding: 20}}
      data={dummyData}
      ListFooterComponent={<NewItem />}
      renderItem={({item}) => <ReportsItem data={item} />}
    />
  );
};

export default Reports;
