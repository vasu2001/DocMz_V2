/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Modal, Text} from 'react-native';
import LinearGradientBackground from '../../../components/molecules/GradientBackground/LinearGradientBackground';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import PatientHistoryCardSmall from '../../../components/molecules/PatientHistoryCards/PatientHistoryCardSmall';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import Reports from '../../../assets/svg/reports.svg';
import {ScrollView} from 'react-native-gesture-handler';
import DmzButton from '../../../components/atoms/SwitchButton/SwitchButton';
import PatientHistoryCardLarge from '../../../components/molecules/PatientHistoryCards/PatientHistoryCardLarge';
import {PRIMARY_TEXT, HEADER_TEXT} from '../../../styles/colors';
import PatientEditScreen from './PatientEditScreen';

export default function PatienDashboard(props) {
  const patientCategories = ['Vitals', 'Surgeries', 'Meds', 'Lifestyle'];
  const [selectedHeader, setHeader] = useState('Vitals');
  const [editCard, setEditCard] = useState();
  const [modalVisible, setModal] = useState(false);
  const selecteCategory = (val) => {
    setHeader(val);
    console.log(selectedHeader);
  };

  const modalVisibility = (item) => {
    setModal(!modalVisible);
    setEditCard(item);
  };

  const data1 = [
    {
      headerOne: 'Weight',
      headerTwo: '22 May 2020',
      infoOne: '63.25',
      infoTwo: 'KGs',
      infoThree: 'BMI 26.0',
    },
    {
      headerOne: 'Height',
      headerTwo: '22 May 2020',
      infoOne: '5ft,4in',
      infoTwo: '',
      infoThree: '',
    },
  ];
  const data2 = [
    {
      headerOne: 'Blood Pressure',
      headerTwo: '22 May 2020',
      infoOne: '80/50',
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
      headerTwo: '22 May 2020',
      infoOne: '65 ',
      infoTwo: 'Normal',
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
          svg: {stroke: 'purple'},
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
          svg: {stroke: 'green'},
        },
      ],
    },
  ];
  const data3 = [
    {
      headerOne: 'Temprature',
      headerTwo: '22 May 2020',
      infoOne: '101.5',
      infoTwo: 'C',
      infoThree: 'Fever',
    },
    {
      headerOne: 'Glucose',
      headerTwo: '22 May 2020',
      infoOne: '65',
      infoTwo: 'BPM',
      infoThree: 'High',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <LinearGradientBackground
        angle={110}
        colors={['#fff', 'rgba(2, 126, 151, 0.1)']}
        style={{flex: 1, opacity: 1}}>
        <ScrollView style={{flex: 1}} contentContainerStyle={{}}>
          <TopNavBar
            style={{
              Container: {
                height: 50,
                marginTop: 10,
              },
            }}
          />

          <View
            style={{
              marginHorizontal: '10%',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{width: '60%', marginRight: 10}}>
              <DmzText
                text={'Allen Paul'}
                style={{color: PRIMARY_TEXT, fontSize: 18}}
              />
              <DmzText
                text={'MEDICAL HISTORY'}
                style={{
                  color: HEADER_TEXT,
                  lineHeight: 40,
                  fontSize: 38,
                  textTransform: 'uppercase',
                  marginTop: 10,
                }}
              />
            </View>
            <Reports />
          </View>
          <View>
            <ScrollView
              horizontal
              style={{height: 'auto', marginLeft: '5%'}}
              contentContainerStyle={{
                height: 80,
              }}>
              {patientCategories.map((u, i) => {
                return (
                  <DmzButton
                    text={u}
                    onPress={() => {
                      selecteCategory(u);
                    }}
                    style={{
                      Text: {
                        color: selectedHeader == u ? '#FF7A59' : '#9D9D9D',
                        fontSize: 18,
                        fontWeight: selectedHeader == u ? 'bold' : '300',
                      },
                    }}
                  />
                );
              })}
            </ScrollView>
          </View>
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
                    modalVisibility(u);
                  }}
                  data={data1}
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
                    modalVisibility(u);
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
        </ScrollView>
      </LinearGradientBackground>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => {
          setModal(!modalVisible);
        }}>
        <PatientEditScreen data={editCard} />
      </Modal>
    </View>
  );
}
