/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Modal} from 'react-native';
import PatientSurgeryDetails from '../../../components/molecules/PatientSurgeyCards/PatientSurgeryDetails';
import {PRIMARY_COLOR} from '../../../styles/colors';
import PatientEditScreen from './PatientEditScreen';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';

export default function PatienSurgeryScreen(props) {
  const [editCard, setEditCard] = useState();
  const [modalVisible, setModal] = useState(false);

  const modalVisibility = (item) => {
    setModal(true);
    setEditCard(item);
  };

  const closeModal = () => {
    setModal(false);
  };

  const data1 = [
    {
      type: 'Surgery',
      title: 'Knee Surgery',
      date: '22 May 2020',
      status: 'Completed',
      doctorName: 'Constantine',
      otName: 'Purnam Medicare (Cal)',
    },
    {
      type: 'Surgery',
      title: 'Appendix',
      date: '22 May 2020',
      status: 'Ongoing',
      doctorName: 'Lance',
      otName: 'Purnam Medicare (Cal)',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          alignItems: 'center',
        }}>
        {data1.map((u, i) => {
          console.log(u);
          return (
            <PatientSurgeryDetails
              onPress={() => {
                modalVisibility(u);
              }}
              data={data1}
              style={{
                Card: {
                  backgroundColor: '#fff',
                },
              }}
              title={u.title}
              date={u.date}
              status={u.status}
              doctorName={u.doctorName}
              otName={u.otName}
            />
          );
        })}
      </View>
      <DmzButton
        text="ADD MORE            +"
        style={{
          Container: {
            borderRadius: 30,
            width: '50%',
            backgroundColor: '#9C77BC',
            alignSelf: 'center',
            marginVertical: 10,
          },
          Text: {
            fontSize: 16,
            color: '#fff',
          },
        }}
      />
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => {
          setModal(!modalVisible);
        }}>
        <PatientEditScreen
          onPress={() => {
            closeModal();
          }}
          data={editCard}
        />
      </Modal>
    </View>
  );
}
