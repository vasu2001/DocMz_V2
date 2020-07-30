import React, {useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import NewItem from '../../../components/molecules/MedicalHistory/NewItem';
import SurgeriesItem from '../../../components/molecules/MedicalHistory/SurgeriesItem';
import AddSurgery from '../../../components/molecules/Modal/AddSurgery';

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
  const [modalVisible, setVisible] = useState(false);
  return (
    <>
      <AddSurgery
        visible={modalVisible}
        onCancel={() => {
          setVisible(false);
        }}
        onUpdate={(temp) => {}}
      />
      <FlatList
        style={{padding: 20}}
        data={dummyData}
        ListFooterComponent={<NewItem onPress={() => setVisible(true)} />}
        renderItem={({item}) => <SurgeriesItem data={item} />}
      />
    </>
  );
};

export default Surgeries;
