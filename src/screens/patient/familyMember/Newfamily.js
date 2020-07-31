import React, {useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import {GREY_BACKGROUND} from '../../../styles/colors';
import FamilyItem from '../../../components/molecules/Family/FamilyItem';
import NewItem from '../../../components/molecules/MedicalHistory/NewItem';
import AddFamily from '../../../components/molecules/Modal/AddFamily';

const dummyData = [
  {
    name: 'Richard Paul',
    age: 56,
    relation: 'Father',
    problems: ['Diabetes', 'Hypertension'],
  },
  {
    name: 'Isabel Paul',
    age: 51,
    relation: 'Mother',
    problems: ['Hypertension'],
  },
  {
    name: 'Martha Sloan',
    age: 34,
    relation: 'Sister',
    problems: ['PCOD'],
  },
];

const NewFamily = ({navigation}) => {
  const [addModal, setModal] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TopNavBar
        headerText="My Family"
        {...{navigation}}
        style={{Container: {marginTop: 5, marginBottom: 10}}}
      />
      <AddFamily
        visible={addModal}
        onCancel={() => setModal(false)}
        onUpdate={(temp) => {}}
      />
      <View style={{flex: 1, backgroundColor: GREY_BACKGROUND}}>
        <FlatList
          data={dummyData}
          style={{flex: 1, padding: 20}}
          renderItem={({item}) => <FamilyItem data={item} />}
          ListFooterComponent={<NewItem onPress={() => setModal(true)} />}
        />
      </View>
    </View>
  );
};

export default NewFamily;
