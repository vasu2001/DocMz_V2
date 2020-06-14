import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FancyHeader from '../../../components/organisms/FancyHeader/FancyHeader';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BasicCard from '../../../components/atoms/BasicCard/BasicCard';
import DoctorProfile from '../../../components/molecules/DoctorProfile/DoctorProfile';
import ConfirmAppointment from '../../../components/molecules/ConfirmAppointment/ConfirmAppointment';
import ProfilePic from '../../../components/atoms/ProfilePic/ProfilePic';
import {TouchableOpacity} from 'react-native-gesture-handler';
function DoctorDetailsScreen() {
  const [confirmAppointment, setConfirmAppointment] = useState(false);

  return (
    <View style={DoctorDetailsScreenStyles.Container}>
      <FancyHeader
        style={{
          Container: DoctorDetailsScreenStyles.HeaderContainer,
        }}>
        <Text style={DoctorDetailsScreenStyles.HeaderTextDoctorName}>
          Dr.Haley
        </Text>
        <Text style={DoctorDetailsScreenStyles.HeaderTextDoctorSpecialization}>
          General dentist
        </Text>
        <View
          style={DoctorDetailsScreenStyles.HeaderViewDoctorExperienceDetails}>
          <View
            style={
              DoctorDetailsScreenStyles.HeaderViewDoctorExperienceDetailsPatients
            }>
            <Fontisto name="doctor" size={38} color="#e1e1e1" />
            <View style={{marginLeft: 5}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                1.5K
              </Text>
              <Text style={{color: '#e1e1e1'}}>Patients</Text>
            </View>
          </View>
          <View
            style={
              DoctorDetailsScreenStyles.HeaderViewDoctorExperienceDetailsExperience
            }>
            <MaterialCommunityIcons
              name="timer-sand"
              size={38}
              color="#e1e1e1"
            />
            <View>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                5 Years
              </Text>
              <Text style={{color: '#e1e1e1'}}>Experience</Text>
            </View>
          </View>
        </View>
        <ProfilePic
          style={{
            Container: DoctorDetailsScreenStyles.DoctorProfilePic,
            Image: {borderRadius: 100},
          }}
          sourceurl={require('../../../assets/jpg/person2.jpg')}
        />
      </FancyHeader>
      <DoctorProfile />
      {/* <ConfirmAppointment /> */}
      <View style={DoctorDetailsScreenStyles.BottomActionBar}>
        <TouchableOpacity style={{flex: 2, padding: 5}}>
          <BasicCard
            style={{
              CardContainer: {
                height: '100%',
                width: '100%',
              },
            }}>
            <MaterialCommunityIcons name="heart" size={28} color="#6231CB" />
          </BasicCard>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 6, padding: 5}}>
          <BasicCard
            active
            style={{
              CardContainer: {
                height: '100%',
                width: '100%',
                backgroundColor: '#F4C130',
              },
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>
              Book Appointment
            </Text>
          </BasicCard>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const DoctorDetailsScreenStyles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#fff'},
  HeaderContainer: {
    backgroundColor: '#7774F5',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    position: 'relative',
    zIndex: 999,
  },
  DoctorProfilePic: {
    height: 120,
    width: 120,
    position: 'absolute',
    top: '100%',
    left: '40%',
    borderWidth: 10,
    borderRadius: 100,
    borderColor: '#fff',
    transform: [
      {
        translateX: -100,
      },
      {
        translateY: 30,
      },
    ],
  },
  HeaderTextDoctorName: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: -40,
    letterSpacing: 1,
    marginBottom: 5,
  },
  HeaderTextDoctorSpecialization: {
    textAlign: 'center',
    color: '#eee',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
  },
  HeaderViewDoctorExperienceDetails: {
    flexDirection: 'row',
    marginTop: 10,
  },
  HeaderViewDoctorExperienceDetailsPatients: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderViewDoctorExperienceDetailsExperience: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  BottomActionBar: {
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 999,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
  },
});
export default DoctorDetailsScreen;
