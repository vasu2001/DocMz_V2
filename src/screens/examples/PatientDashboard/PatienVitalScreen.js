/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import PatientHistoryCardSmall from '../../../components/molecules/PatientVitalCards/PatientHistoryCardSmall';
import PatientHistoryCardLarge from '../../../components/molecules/PatientVitalCards/PatientHistoryCardLarge';
import {PRIMARY_COLOR} from '../../../styles/colors';
import PatientEditScreen from './PatientEditScreen';
import Moment from 'moment';
import {useSelector} from 'react-redux';

export default function PatienVitalScreen() {
  const [editCard, setEditCard] = useState();

  const [modalVisible, setModal] = useState(false);
  const {patientVitals, patient} = useSelector(
    (state) => state.PatientAccountReducer,
  );
  const [data, setData] = useState(patient);
  const [vitals, setVitals] = useState(patientVitals);

  const modalVisibility = (item) => {
    setModal(!modalVisible);
    setEditCard(item);
  };

  useEffect(() => {
    setData(patient);
    setVitals(patientVitals);
    console.log('updating');
  }, [patient, patientVitals]);

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

  const weight = data == null ? '' : data.weight;
  const temperature = data == null || data == undefined ? '' : data.temperature;
  const bloodPressure =
    data == null || data == undefined ? '' : data.bloodPressure;
  const heartRate = data == null || data == undefined ? '' : data.heartRate;
  const height = data == null || data == undefined ? '' : cmToFeet(data.height);

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
      infoOne: height == '' ? '--' : `${height.feet}ft,${height.inches}in`,
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
        {
          data:
            vitals == null
              ? []
              : vitals.bloodPressure.map((item) => {
                  return parseInt(item.value.split('/')[0], 10);
                }),
          svg: {stroke: PRIMARY_COLOR},
        },
        {
          data:
            vitals == null
              ? []
              : vitals.bloodPressure.map((item) => {
                  return parseInt(item.value.split('/')[1], 10);
                }),
          svg: {stroke: '#E7E3FE'},
        },
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
      data:
        vitals == null
          ? []
          : vitals.heartRate.map((item) => {
              return parseInt(item.value, 10);
            }),
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
                    height: data.height.value,
                    heartRate: heartRate.value,
                    date: Moment(data.height.date).format('DD MMM YYYY'),
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
