/* eslint-disable react-native/no-inline-styles */
import React, {setState, useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import {extendMoment} from 'moment-range';
import Moment from 'moment';
import dateArray from 'moment-array-dates';
import Calendar from '../../../components/molecules/YearCalendar.js/Calendar';
import AppoinmentSlider from '../../../components/molecules/YearCalendar.js/AppoinmentSlider';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import {GetAppointmentSlot} from '../../../redux/action/patientAccountAction';
import {useDispatch, useSelector} from 'react-redux';
const moment = extendMoment(Moment);

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function PatientCalendarScreen({navigation}) {
  const [selectedStartDate, setStartDate] = useState('');
  const [selectedEndDate, setEndDate] = useState('');
  const dispatch = useDispatch();
  const {appointmentForSlotLoading, appointmentForSlot} = useSelector(
    (state) => state.PatientAccountReducer,
  );
  // selectedIndex: 0
  // pos: false,
  // months: [],
  const {_id} = navigation.state.params.data;
  // const [range, setRange] = useState([]);
  // const time = ['09:00', '10:00', '11:00', '12:00', '01:00', '02:000'];
  // // daysLable: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  // value: 0,
  // timeValue: '09:00',

  // const val = new Animated.Value(height * 0.58);

  // const updateIndex = (selectedIndex) => {
  //   this.setState({selectedIndex});
  // };
  // var today = moment();
  // var day = this.today.clone().startOf('month');
  // const customDatesStyles = [];

  // // componentDidMount = () => {
  // //   this.getMonths();
  // //   while (this.day.add(1, 'day').isSame(this.today, 'month')) {
  // //     this.customDatesStyles.push({
  // //       date: this.day.clone(),
  // //       style: {},
  // //       textStyle: {color: '#015A6B', fontSize: 18}, // sets the font color
  // //       containerStyle: [], // extra styling for day container
  // //     });
  // //   }
  // // };

  const getDateView = (startDate, endDate) => {
    if (startDate != '' && endDate != '') {
      const start = Moment(startDate).format('YYYY-MM-DD');
      const end = Moment(endDate).format('YYYY-MM-DD');

      !appointmentForSlotLoading &&
        dispatch(GetAppointmentSlot([[start, end]], _id));
    }
  };

  async function onDateChange(date, type) {
    if (type == 'START_DATE') {
      await setStartDate(date);
      console.log('in1', date);
      // setEndDate(null);
    } else if (type == 'END_DATE') {
      await setEndDate(date);
      console.log('in2', type);
      if (date != null) {
        console.log(selectedStartDate, date, '66666666666');
        getDateView(selectedStartDate, date);
      }
      // getDateView(selectedStartDate, selectedEndDate);
    }
  }

  // const onDateChange = (date, type) => {
  //   if (type === 'END_DATE') {

  //     console.log(selectedStartDate, selectedEndDate);
  //   } else {
  //   }
  // };
  return (
    <View
      style={{flex: 1, flexDirection: 'column', backgroundColor: '#95CCE0'}}>
      <RadialGradient
        style={{width: '100%', height: '100%', zIndex: 0, flex: 1}}
        colors={['#DEF1F9', '#C0E0EC', '#95CCE0']}
        stops={[0.0, 0.2, 0.75]}
        center={[100, 100]}
        radius={120}>
        <TopNavBar />
        <Calendar onDateChange={onDateChange} />
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 20,
            paddingHorizontal: '15%',
          }}>
          <View style={{flexDirection: 'row', alignContent: 'center'}}>
            <Text
              style={{
                borderRadius: 6,
                borderWidth: 1.5,
                width: 20,
                height: 20,
                textAlign: 'center',
                borderColor: '#FF7A59',
                fontSize: 18,
              }}>
              {' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                paddingLeft: 10,
                height: 20,
                textAlignVertical: 'center',
                color: 'white',
                fontFamily: 'Acumin-RPro',
              }}>
              Today
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                borderRadius: 5,
                backgroundColor: '#FF7A59',
                width: 20,
                height: 20,
                textAlign: 'center',
                borderColor: 'white',
              }}>
              {' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                paddingLeft: 10,
                color: 'white',
                fontFamily: 'Acumin-RPro',
              }}>
              Chosen
            </Text>
          </View>
        </View>
      </RadialGradient>
      <AppoinmentSlider navigation={navigation} slots={appointmentForSlot} />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLayoutStyle: {
    width,
    height: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slidingPanelLayoutStyle: {
    width,
    height,
    backgroundColor: '#7E52A0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonTextStyle: {
    color: 'white',
    fontSize: 18,
  },
});
