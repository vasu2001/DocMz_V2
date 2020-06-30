import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import {RemoveAppointment} from '../../../redux/action/patientAccountAction';
import NotFound from '../../../components/organisms/NotFound/NotFound';
import {useSelector, useDispatch} from 'react-redux';
import {GetPatientInfo} from '../../../redux/action/patientAccountAction';
import TimelineContainer from '../../../components/molecules/TimelineContainer/TimelineContainer';
import ProfilePic from '../../../components/atoms/ProfilePic/ProfilePic';
import FancyHeaderLite from '../../../components/organisms/FancyHeaderLite/FancyHeaderLite';
import Container from '../../../components/organisms/Container/Container';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const Appointments = ({navigation}) => {
  const {patient, isPatientAccountReducerLoading} = useSelector(
    (state) => state.PatientAccountReducer,
  );
  const dispatch = useDispatch();
  const [timeline, setTimeline] = useState(-1);

  useEffect(() => {
    !isPatientAccountReducerLoading && dispatch(GetPatientInfo(patient._id));
    console.log('###########################');
  }, []);
  const onPressRemove = (id) => {
    const data = {
      byPatient: false,
      byDoctor: false,
      reason: 'nothing',
      id: id,
      patientId: patient._id,
    };
    dispatch(RemoveAppointment(data));
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FancyHeaderLite
        navigation={navigation}
        onLeftButtonPress={() => navigation.goBack(null)}
        headerText={'Appointment'}
        style={{Section: {overflow: 'hidden', height: '20%', marginBottom: 0}}}
      />
      <Container
        style={{
          height: '75%',
          transform: [{translateY: -30}],
          zIndex: 999,
          backgroundColor: '#fff',
          padding: 5,
          paddingTop: 15,
        }}>
        {isPatientAccountReducerLoading ? (
          <ActivityIndicator
            style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}
          />
        ) : patient.favourites == null ? (
          <NotFound />
        ) : !patient.favourites.length ? (
          <NotFound />
        ) : (
          <FlatList
            onEndReached={() => console.log('rech end.......')}
            data={patient.appointments.filter((item) => item.booked)}
            // data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            renderItem={({item}) => (
              <TimelineContainer
                PatientName={item.doctor ? item.doctor.basic.name : 'no name'}
                Timing={item.bookedFor.slice(11, 16)}
                onPress={() => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut,
                  );
                  setTimeline(item);
                }}
                onPressContinue={() => onPressRemove(item._id)}
                Age={'21'}
                Disease={'Headache'}
                Profile={
                  <ProfilePic
                    style={{
                      Container: {borderRadius: 100},
                      Image: {borderRadius: 100},
                    }}
                    sourceurl={require('../../../assets/jpg/person3.jpg')}
                  />
                }
                active={item === timeline}
              />
            )}
          />
        )}
      </Container>
    </View>
  );
};

export default Appointments;

/**
 *
 * import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import NotFound from '../../../components/organisms/NotFound/NotFound';
import BottomNavigationComponent from '../../../components/old/BottomNavigation/BottomNavigation.component';
import GradientTopNavBar from '../../../components/molecules/TopNavBar/GradientTopNavBar';
import {useSelector, useDispatch} from 'react-redux';
import {GetPatientInfo} from '../../../redux/action/patientAccountAction';
import TimelineContainer from '../../../components/molecules/TimelineContainer/TimelineContainer';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const Appointments = ({navigation}) => {
  const {patient, isPatientAccountReducerLoading} = useSelector(
    state => state.PatientAccountReducer,
  );
  const dispatch = useDispatch();
  const [timeline, setTimeline] = useState(-1);

  useEffect(() => {
    console.log('patient ' + patient);
    !isPatientAccountReducerLoading && dispatch(GetPatientInfo(patient.id));
  }, []);

  return (
    <View >
      <GradientTopNavBar
        navigation={navigation}
        isClap={true}
        onLeftButtonPress={() => navigation.goBack(null)}
        headerText={'Appointment'}
      />
      {isPatientAccountReducerLoading ? (
        <ActivityIndicator />
      ) : patient.favourites.length <= 0 ? (
        <NotFound />
      ) : (
        <FlatList
          style={{backgroundColor: '#fff', flex: 1}}
          onEndReached={() => console.log('rech end.......')}
          // data={patient.appointments}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={({item}) => (
            // <TimelineContainer
            // PatientName={item.doctor.basic.first_name}
            // Timing={item.bookedFor.slice(11,16)}
            //   onPress={() => {
            //     LayoutAnimation.configureNext(
            //       LayoutAnimation.Presets.easeInEaseOut,
            //     );
            //     setTimeline(item);
            //   }}
            //   Age={'21'}
            //   Disease={'Headache'}
            //   Profile
            //   active={item === timeline}
            // />
          <Text>{item}</Text>
          )}
        />
      )}
    </View>
  );
};

export default Appointments;

 */
