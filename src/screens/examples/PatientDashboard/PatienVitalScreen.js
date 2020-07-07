/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import PatientHistoryCardSmall from '../../../components/molecules/PatientVitalCards/PatientHistoryCardSmall';
import PatientHistoryCardLarge from '../../../components/molecules/PatientVitalCards/PatientHistoryCardLarge';
import {PRIMARY_COLOR} from '../../../styles/colors';
import PatientEditScreen from './PatientEditScreen';
import Moment from 'moment';

export default function PatienVitalScreen({vitals}) {
  const [editCard, setEditCard] = useState();
  const [modalVisible, setModal] = useState(false);

  const modalVisibility = (item) => {
    setModal(!modalVisible);
    setEditCard(item);
  };

  useEffect(() => {
    console.log(vitals, 'qwerty');
  }, []);

  const cmToFeet = (val) => {
    var realFeet = (parseInt(val.value, 10) * 0.3937) / 12;
    var feet = Math.floor(realFeet);
    var inches = ((realFeet - feet) * 12).toPrecision(3);
    console.log(val, 'qwerty4');
    const res = {
      feet: feet,
      inches: inches,
      date: val.date,
    };
    return res;
  };

  const weight = vitals.weight;
  const temperature = vitals.temperature;
  const bloodPressure = vitals.bloodPressure;
  const heartRate = vitals.heartRate;
  const height = cmToFeet(vitals.height);

  const data1 = [
    {
      headerOne: 'Weight',
      headerTwo: Moment(weight.date).format('DD MMM YYYY'),
      infoOne: weight.value != undefined ? weight.value : '--',
      infoTwo: 'KGs',
      infoThree: 'BMI 26.0',
    },
    {
      headerOne: 'Height',
      headerTwo: Moment(height.date).format('DD MMM YYYY'),
      infoOne: `${height.feet}ft,${height.inches}in`,
      infoTwo: '',
      infoThree: '',
    },
  ];
  const data2 = [
    {
      headerOne: 'Blood Pressure',
      headerTwo: Moment(bloodPressure.date).format('DD MMM YYYY'),
      infoOne: bloodPressure.value != undefined ? bloodPressure.value : '--',
      infoTwo: 'Optimal',
      infoThree: '',
      data: [
        50,
        10,
        40,
        95,
        -4,
        -24,
        35,
        53,
        -53,
        24,
        50,
        -20,
        -80,
        44,
        65,
        35,
        14,
        23,
      ],
    },
    {
      headerOne: 'Heart Rate',
      headerTwo: Moment(heartRate.date).format('DD MMM YYYY'),
      infoOne: heartRate.value != undefined ? heartRate.value : '--',
      infoTwo:
        heartRate.value != undefined
          ? parseInt(heartRate.value, 10) > 98.6
            ? 'Abnormal'
            : 'Normal'
          : '',
      infoThree: 'bpm',
      data: [
        {
          data: [
            50,
            10,
            40,
            95,
            -4,
            -24,
            85,
            91,
            35,
            53,
            -53,
            24,
            50,
            -20,
            -80,
          ],
          svg: {stroke: PRIMARY_COLOR},
        },
        {
          data: [
            -87,
            66,
            -69,
            92,
            -40,
            -61,
            16,
            62,
            20,
            -93,
            -54,
            47,
            -89,
            -44,
            18,
          ],
          svg: {stroke: '#E7E3FE'},
        },
      ],
    },
  ];
  const data3 = [
    {
      headerOne: 'Temprature',
      headerTwo: Moment(temperature.date).format('DD MMM YYYY'),
      infoOne: temperature.value != undefined ? temperature.value : '--',
      infoTwo: 'C',
      infoThree:
        temperature.value != undefined
          ? parseInt(temperature.value, 10) > 98.6
            ? 'Fever'
            : 'Normal'
          : '',
    },
    {
      headerOne: 'Glucose',
      headerTwo: Moment(heartRate.date).format('DD MMM YYYY'),
      infoOne: '65',
      infoTwo: 'BPM',
      infoThree: 'High',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          marginRight: 10,
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        {data1.map((u, i) => {
          console.log(u);
          return (
            <PatientHistoryCardSmall
              onPress={() => {
                if (u.headerOne == 'Height') {
                  const val = {
                    height: vitals.height.value,
                    heartRate: heartRate.value,
                    date: Moment(vitals.height.date).format('DD MMM YYYY'),
                    headerOne: 'Height',
                  };
                  modalVisibility(val);
                } else {
                  modalVisibility(u);
                }
              }}
              // data={u}
              style={{
                Card: {
                  marginLeft: 20,
                  elevation: 3,
                  backgroundColor: '#fff',
                },
              }}
              headerOne={u.headerOne}
              headerTwo={u.headerTwo}
              infoOne={u.infoOne}
              infoTwo={u.infoTwo}
              infoThree={u.infoThree}
            />
          );
        })}
      </View>
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
        }}>
        {data2.map((u, i) => {
          console.log(u);
          return (
            <PatientHistoryCardLarge
              onPress={() => {
                const val = {
                  bloodPressure: bloodPressure.value,
                  heartRate: heartRate.value,
                  date: Moment(bloodPressure.date).format('DD MMM YYYY'),
                  headerOne: 'Blood Pressure',
                };
                modalVisibility(val);
              }}
              headerOne={u.headerOne}
              headerTwo={u.headerTwo}
              infoOne={u.infoOne}
              infoTwo={u.infoTwo}
              infoThree={u.infoThree}
              data={u.data}
            />
          );
        })}
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginRight: 10,
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        {data3.map((u, i) => {
          console.log(u);
          return (
            <PatientHistoryCardSmall
              // data={u}
              onPress={() => {
                modalVisibility(u);
              }}
              style={{
                Card: {
                  marginLeft: 20,
                  elevation: 3,
                  backgroundColor: '#fff',
                },
              }}
              headerOne={u.headerOne}
              headerTwo={u.headerTwo}
              infoOne={u.infoOne}
              infoTwo={u.infoTwo}
              infoThree={u.infoThree}
            />
          );
        })}
      </View>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => {
          setModal(!modalVisible);
        }}>
        <View>
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
            <PatientEditScreen data={editCard} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
