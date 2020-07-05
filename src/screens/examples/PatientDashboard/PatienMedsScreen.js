/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import PatientEditScreen from './PatientEditScreen';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import PatientMedsDetails from '../../../components/molecules/PatientMedsCards/PatientMedsDetails';

export default function PatienMedsScreen(props) {
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
      type: 'Meds',
      medName: 'Knee Surgery',
      date: '22 May 2020',
      reason: 'Completed',
      times: 3,
      weeks: 2,
      alarm: false,
    },
    {
      type: 'Meds',
      medName: 'Appendix',
      date: '22 May 2020',
      reason: 'Ongoing',
      times: 2,
      weeks: 1,
      alarm: true,
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
            <PatientMedsDetails
              onPress={() => {
                modalVisibility(u);
              }}
              data={data1}
              style={{
                Card: {
                  backgroundColor: '#fff',
                },
              }}
              medName={u.medName}
              date={u.date}
              reason={u.reason}
              times={u.times}
              weeks={u.weeks}
              alarm={u.alarm}
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
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#ffffff99',
          }}>
          <TouchableOpacity
            style={{
              height: '100%',
              width: '100%',
            }}
            activeOpacity={1}
            onPress={() => {
              console.log('pressed');
              setModal(!modalVisible);
            }}
          />
          <PatientEditScreen
            onPress={() => {
              closeModal();
            }}
            data={editCard}
          />
        </View>
      </Modal>
    </View>
  );
}
