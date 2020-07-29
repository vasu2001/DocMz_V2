import React, {useState, useEffect} from 'react';
import {View, Text, UIManager, Platform, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import {
  NEW_PRIMARY_COLOR,
  INPUT_PLACEHOLDER,
  NEW_HEADER_TEXT,
  GREY_BACKGROUND,
} from '../../../styles/colors';
import {
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native-gesture-handler';
import AppointmentHistoryItem from '../../../components/molecules/Appointments/AppointmentHistoryItem';
import AppointmentOngoingItem from '../../../components/molecules/Appointments/AppointmentOngoingItem';
import AppointmentUpcomingItem from '../../../components/molecules/Appointments/AppointmentUpcomingItem';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const dummyData = [
  {
    docName: 'Dr. Dropkin Jared',
    docSpeciality: 'Physician',
    appointmentName: 'Annual Physical',
  },
  {
    docName: 'Dr. Dropkin Jared',
    docSpeciality: 'Physician',
    appointmentName: 'Annual Physical',
  },
  {
    docName: 'Dr. Dropkin Jared',
    docSpeciality: 'Physician',
    appointmentName: 'Annual Physical',
  },
];

const NewAppointments = ({navigation}) => {
  const {patient, isPatientAccountReducerLoading} = useSelector(
    (state) => state.PatientAccountReducer,
  );
  const dispatch = useDispatch();

  const [tablocation, setTabLocation] = useState(0);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TopNavBar
        navigation={navigation}
        onLeftButtonPress={() => navigation.goBack(null)}
        headerText={'My Appointments'}
        style={{Section: {overflow: 'hidden', height: '20%', marginBottom: 0}}}
      />
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          //   borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={[styles.tabView, {borderRightWidth: 1}]}>
          <TouchableOpacity onPress={() => setTabLocation(0)}>
            <Text
              style={
                tablocation === 0 ? styles.activeColor : styles.inactiveColor
              }>
              Upcoming
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.tabView, {borderLeftWidth: 1}]}>
          <TouchableOpacity onPress={() => setTabLocation(1)}>
            <Text
              style={
                tablocation === 1 ? styles.activeColor : styles.inactiveColor
              }>
              History
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: GREY_BACKGROUND, padding: 15}}>
        {tablocation === 1 ? (
          <FlatList
            style={{flex: 1}}
            data={dummyData}
            renderItem={({item}) => (
              <AppointmentHistoryItem {...item} style={{margin: 10}} />
            )}
          />
        ) : (
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={styles.section}>
              <Text style={styles.sectionHead}>Ongoing Appointment</Text>
              {dummyData.slice(0, 1).map((item) => (
                <AppointmentOngoingItem {...item} style={{margin: 10}} />
              ))}
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionHead}>Upcoming Appointments</Text>
              {dummyData.map((item) => (
                <AppointmentUpcomingItem {...item} style={{margin: 10}} />
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default NewAppointments;

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    borderColor: NEW_PRIMARY_COLOR,
    alignItems: 'center',
    padding: 5,
  },
  inactiveColor: {
    fontFamily: 'Montserrat-Regular',
    color: INPUT_PLACEHOLDER,
    fontSize: 18,
  },
  activeColor: {
    fontFamily: 'Montserrat-SemiBold',
    color: NEW_HEADER_TEXT,
    fontSize: 18,
  },
  section: {
    marginBottom: 15,
  },
  sectionHead: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: NEW_HEADER_TEXT,
    marginBottom: 15,
  },
});
