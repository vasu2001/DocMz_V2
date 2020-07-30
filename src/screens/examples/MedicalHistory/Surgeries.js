import React from 'react';
import {Text, View, FlatList} from 'react-native';
import NewItem from '../../../components/molecules/MedicalHistory/NewItem';
import SurgeriesItem from '../../../components/molecules/MedicalHistory/SurgeriesItem';

const dummyData = [
  {
    name: 'Knee Surgery',
    doctor: 'Dr. Constantine',
    date: '20 May 2020',
  },
  {
    name: 'Knee Surgery',
    doctor: 'Dr. Constantine',
    date: '20 May 2020',
  },
];

const Surgeries = ({params}) => {
  return (
    <FlatList
      style={{padding: 20}}
      data={dummyData}
      ListFooterComponent={<NewItem />}
      renderItem={({item}) => <SurgeriesItem data={item} />}
    />
  );
};

export default Surgeries;
