import React, {useState, useReducer, useRef} from 'react';
import {View, StyleSheet, Text, Animated, Easing} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Available from '../../../assets/svg/available.svg';
import ConsultFeeIcon from '../../../assets/svg/consult_fee_icon.svg';
import TextInputCustom from '../../atoms/TextInputCustom/TextInputCustom';
import BasicCard from '../../atoms/BasicCard/BasicCard';
import TopNavBar from '../TopNavBar/TopNavBar';
import Section from '../Section/Section';
import CardInRow from '../CardInRow/CardInRow';
import GradientTopNavBar from '../../molecules/TopNavBar/GradientTopNavBar';
import ProfileColText from '../../molecules/ProfileCol/ProfileColText';
import TopNavBarProfile from '../../molecules/TopNavBar/TopNavBarProfile';
import ScheduleAppointment from '../../organisms/ScheduleAppointment/ScheduleAppointment';

const Data = [
  {
    name: 'kamalesh biswas',
    reasonForVisit: 'head pain',
    contact: '8001981992',
  },
  {
    name: 'kamalesh biswas',
    reasonForVisit: 'head pain',
    contact: '8001981992',
  },
  {
    name: 'kamalesh biswas',
    reasonForVisit: 'head pain',
    contact: '8001981992',
  },
  {
    name: 'samiran biswas',
    reasonForVisit: 'cancer',
    contact: '9001981991',
  },
];

const ConfirmAppointment = ({navigation}) => {
  const data = navigation.state.params.data;
  const [showPopup, setShowPopup] = useState(false);
  const PopupTranslateY = useRef(new Animated.Value(0)).current;

  console.log('************************************');
  console.log(data.output || data.appointments);

  const [state, setState] = useState({
    name: '',
    reasonForVisit: '',
    contact: '',
  });

  const initialChoosenState = _state => {
    setState(_state);
  };

  const handelAppointmentSubmit = () => {
    console.log('Handel appointment submit.');
    console.log(state);
    navigation.navigate('Questionnaire');
  };

  const onPress = id => {
    // setActiveId(id);
    // __id = id
    Animated.sequence([
      Animated.timing(PopupTranslateY, {
        toValue: showPopup ? 0 : 1,
        easing: Easing.bezier(0.52, 0.5, 0.08, 0.78),
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
    setShowPopup(!showPopup);
  };

  return (
    <View style={ConfirmAppointmentStyles.Container}>
      <GradientTopNavBar
        navigation={navigation}
        isClap={true}
        onLeftButtonPress={() => navigation.goBack(null)}
        headerText={'Book an Appointment'}
        style={{margin: -25, marginTop: -30}}
      />
      <ScrollView
        style={ConfirmAppointmentStyles.ScrollView}
        showsVerticalScrollIndicator={false}>
        <View style={ConfirmAppointmentStyles.ScheduleAvailability}>
          <Section HeaderText="Appointment History">
            <CardInRow
              style={{
                paddingTop: 15,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 8,
                borderTopWidth: 1,
                BorderBottomWidth: 1,
                borderColor: '#F2EBEB',
              }}>
              {Data.map(item => (
                <ProfileColText
                  ProfileName={item.name}
                  ProfileEmail={item.contact}
                  trigger={() => initialChoosenState(item)}
                />
              ))}
            </CardInRow>
          </Section>
          <View style={ConfirmAppointmentStyles.ScheduleTiming}>
            <MaterialCommunityIcons name="calendar" size={32} color="#6230CC" />
            <View style={ConfirmAppointmentStyles.DateAndTime}>
              <Text style={ConfirmAppointmentStyles.Date}>Friday,March 27</Text>
              <Text style={ConfirmAppointmentStyles.Time}>
                10:00 - 11:00 AM
              </Text>
            </View>
          </View>
          <View style={ConfirmAppointmentStyles.Available}>
            <Available />
            <Text style={ConfirmAppointmentStyles.AvailableText}>
              Available
            </Text>
          </View>
        </View>
        <Text style={ConfirmAppointmentStyles.InputLabel}>Patient Name</Text>
        <TextInputCustom
          inputHandler={txt => setState({...state, name: txt})}
          value={state.name}
          placeholder="Name"
          textContentType="name"
        />
        <Text style={ConfirmAppointmentStyles.InputLabel}>
          Reason for visit
        </Text>
        <TextInputCustom
          inputHandler={txt => setState({...state, reasonForVisit: txt})}
          value={state.reasonForVisit}
          placeholder="Reason"
          textContentType="name"
        />
        <Text style={ConfirmAppointmentStyles.InputLabel}>Contact Number</Text>
        <TextInputCustom
          inputHandler={txt => setState({...state, contact: txt})}
          value={state.contact}
          placeholder="Contact"
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
        />
        <View style={ConfirmAppointmentStyles.ConsultFeeContainer}>
          <ConsultFeeIcon />
          <Text style={{marginLeft: 5}}>Consultation Fee</Text>
          <Text style={{fontWeight: 'bold', marginLeft: 5}}>$250.00</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <TouchableOpacity
            style={{flex: 6, padding: 5, paddingBottom: 30}}
            onPress={() => navigation.goBack(null)}>
            <BasicCard
              active
              style={{
                CardContainer: {
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#fff',
                  borderWidth: 2,
                  borderColor: '#F4C130',
                },
              }}>
              <Text style={{color: '#F4C130', fontWeight: 'bold'}}>Cancel</Text>
            </BasicCard>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 6, padding: 5, paddingBottom: 30}}
            onPress={() => handelAppointmentSubmit()}>
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
      </ScrollView>
      <ScheduleAppointment
        doctors={data.output || data.appointments}
        activeId={0}
        PopupTranslateY={PopupTranslateY}
        onPress={onPress}
        showPopup={showPopup}
        navigation={navigation}
        // obj ={ _.dropRightWhile(doctors, ['_id', __id])}
      />
    </View>
  );
};

const ConfirmAppointmentStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  ScrollView: {
    marginTop: 45,
    marginBottom: -40,
  },
  ScheduleAvailability: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  ScheduleTiming: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  DateAndTime: {
    marginLeft: 5,
  },
  Date: {
    color: '#222',
  },
  Time: {
    fontWeight: '600',
    fontSize: 15,
  },
  Available: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  AvailableText: {
    color: '#22C663',
    marginLeft: 10,
  },
  InputLabel: {
    fontSize: 18,
    color: '#545454',
    marginTop: 10,
    marginLeft: 10,
  },
  ConsultFeeContainer: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConfirmAppointment;
