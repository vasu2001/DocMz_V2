import React from 'react';
import {View, Text} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import Avater from '../../../components/atoms/Avater/Avater';
import Reports from '../../../assets/svg/Reports_for_patient.svg';
import MedicalHistory from '../../../assets/svg/medical_history.svg';
import AppointmentsSvg from '../../../assets/svg/Appointment.svg';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

function PatientDetails({navigation}) {
  const {patient} = navigation.state.params;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: '40%',
          overflow: 'hidden',
          borderBottomRightRadius: 50,
        }}>
        <RadialGradient
          style={{width: '100%', height: '100%', zIndex: 0}}
          colors={['#F8F7FF', '#E9E5FF']}
          stops={[0.0, 0.2, 0.75]}
          center={[130, 100]}
          radius={200}>
          <TopNavBar
            // onRightButtonPress={() => {}}
            navigation={navigation}
            style={{
              Container: {
                height: '5%',
              },
            }}></TopNavBar>
          <Text
            style={{
              fontSize: 38,
              letterSpacing: 1.8,
              textAlign: 'center',
              color: '#6859A2',
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            Patient Details
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingHorizontal: 60,
              marginTop: 30,
            }}>
            <Avater
              type={8}
              style={{borderRadius: 30, borderWidth: 5}}></Avater>
            <Text
              style={{
                fontSize: 20,
                color: '#9C77BC',
                fontWeight: 'bold',
              }}>
              {`${patient.firstName} ${patient.lastName}`}
            </Text>
          </View>
        </RadialGradient>
      </View>
      <ScrollView
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 50,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <MedicalHistory width={100} />
            <Text style={{color: '#AAA4C5', lineHeight: 40}}>
              Medical History
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center'}}>
            <Reports width={100} />
            <Text style={{color: '#AAA4C5', lineHeight: 40}}>Reports</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <AppointmentsSvg width={100} />
            <Text style={{color: '#AAA4C5', lineHeight: 40}}>Appointments</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center'}}>
            <View
              style={{
                height: 100,
                width: 100,
                borderWidth: 2,
                borderColor: '#E9E5FF',
                borderRadius: 10,
              }}></View>
            <Text style={{color: '#AAA4C5', lineHeight: 40}}>Notes</Text>
          </TouchableOpacity>
        </View>
        <DmzButton
          text={'SAVE CHANGES'}
          style={{
            Container: {
              backgroundColor: '#9C77BC',
              elevation: 1,
              width: '70%',
              height: 'auto',
              paddingVertical: 10,
              alignSelf: 'center',
              marginTop: 15,
            },
            Text: {color: '#fff'},
          }}></DmzButton>
      </ScrollView>
    </View>
  );
}

export default PatientDetails;
