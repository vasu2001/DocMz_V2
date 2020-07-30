import React, {useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import NewItem from '../../../components/molecules/MedicalHistory/NewItem';
import ReportsItem from '../../../components/molecules/MedicalHistory/ReportsItem';
import AddReport from '../../../components/molecules/Modal/AddReport';

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
  const [modalVisible, setVisible] = useState(false);

  return (
    <>
      <AddReport
        visible={modalVisible}
        onCancel={() => setVisible(false)}
        onUpload={(temp) => {}}
      />
      <FlatList
        style={{padding: 20}}
        data={dummyData}
        ListFooterComponent={<NewItem onPress={() => setVisible(true)} />}
        renderItem={({item}) => <ReportsItem data={item} />}
      />
    </>
  );
};

export default Reports;
