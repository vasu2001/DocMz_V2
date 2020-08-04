import React, {useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import {GREY_BACKGROUND} from '../../../styles/colors';
import NewItem from '../../../components/molecules/MedicalHistory/NewItem';
import HealtcareDocItem from '../../../components/molecules/HealthcareTeam/HealtcareDocItem';
import AddDoctor from '../../../components/molecules/Modal/AddDoctor';

const dummyData = [
  {
    name: 'Richard Paul',
    speciality: 'Physician',
    inviteAccept: false,
    referBy: 'Dr. Ray',
  },
  {
    name: 'Richard Paul',
    speciality: 'Physician',
    inviteAccept: true,
  },
  {
    name: 'Richard Paul',
    speciality: 'Physician',
    inviteAccept: true,
    referBy: 'Dr. Ray',
  },
];

const HealtcareTeam = ({navigation}) => {
  const [addModal, setModal] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TopNavBar
        headerText="My Healthcare Team"
        {...{navigation}}
        style={{Container: {marginTop: 5, marginBottom: 10}}}
      />
      <AddDoctor
        visible={addModal}
        onCancel={() => setModal(false)}
        onUpdate={(temp) => {}}
        onInvite={(temp) => {}}
      />
      <View style={{flex: 1, backgroundColor: GREY_BACKGROUND}}>
        <FlatList
          data={dummyData}
          style={{flex: 1, padding: 20}}
          renderItem={({item}) => <HealtcareDocItem data={item} />}
          ListFooterComponent={<NewItem onPress={() => setModal(true)} />}
        />
      </View>
    </View>
  );
};

export default HealtcareTeam;
