/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import LinearGradientBackground from '../../../components/molecules/GradientBackground/LinearGradientBackground';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import PatientHistoryCardSmall from '../../../components/molecules/PatientHistoryCards/PatientHistoryCardSmall';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import Reports from '../../../assets/svg/reports.svg';
import {ScrollView} from 'react-native-gesture-handler';
import DmzButton from '../../../components/atoms/SwitchButton/SwitchButton';
import PatientHistoryCardLarge from '../../../components/molecules/PatientHistoryCards/PatientHistoryCardLarge';

export default function PatienDashboard(props) {
  const patientCategories = ['Vitals', 'Surgeries', 'Meds', 'Lifestyle'];
  const [selectedHeader, setHeader] = useState('Vitals');
  const selecteCategory = (val) => {
    setHeader(val);
    console.log(selectedHeader);
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
    },
    {
      headerOne: 'Heart Rate',
      headerTwo: '22 May 2020',
      infoOne: '65 ',
      infoTwo: 'Normal',
      infoThree: 'bpm',
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
                style={{color: '#FF7A59', fontSize: 18}}
              />
              <DmzText
                text={'MEDICAL HISTORY'}
                style={{
                  color: '#007E96',
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
              marginHorizontal: 10,
              marginBottom: 20,
            }}>
            {data1.map((u, i) => {
              console.log(u);
              return (
                <PatientHistoryCardSmall
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
              flexDirection: 'row',
              marginHorizontal: 10,
              marginBottom: 20,
            }}>
            {data3.map((u, i) => {
              console.log(u);
              return (
                <PatientHistoryCardSmall
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
    </View>
  );
}
