/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {extendMoment} from 'moment-range';
import Moment from 'moment';
const moment = extendMoment(Moment);

export default function Calendar({onDateChange, getDateView}) {
  const width = Dimensions.get('screen').width;
  const [months, setMonths] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const exampleRef = React.createRef();
  const daysLable = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [selectedStartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState();

  const getMonths = () => {
    const monthList = moment.months();
    const coming12Months = monthList
      .concat(months.slice(0, moment().month()))
      .slice(-12);
    console.log(moment().month());
    setMonths(coming12Months);
  };
  const minDate = new Date(1950, 1, 1);
  const maxDate = new Date(2050, 12, 31);

  const setMonth = async (i) => {
    var index = months.indexOf(i);
    var index2 = selectedIndex;
    console.log(index2, ' --- ', index);
    if (index > index2) {
      while (index2 < index) {
        await exampleRef.current.handleOnPressNext();
        console.log('changing');
        index2++;
      }
      setSelectedIndex(index2);
    } else if (index < index2) {
      while (index2 > index) {
        await exampleRef.current.handleOnPressPrevious();
        console.log('changing');
        index2--;
      }
      setSelectedIndex(index2);
    }
    console.log(index2, ' --- ', index);
  };

  const onDateChange2 = async (date, type) => {
    if (type == 'START_DATE') {
      await setStartDate(date);
      console.log('in1', date);
      // setEndDate(null);
    } else if (type === 'END_DATE') {
      await setEndDate(date);
      console.log('in2', date);
      if (date != null) {
        console.log(selectedStartDate, date);
        getDateView(selectedStartDate, date);
      }
    }
    // console.log(selectedStartDate, EndDate);
  };

  useEffect(() => {
    getMonths();
  }, []);
  return (
    <View>
      <FlatList
        data={months}
        horizontal
        renderItem={({item}) => {
          return (
            <TouchableHighlight
              style={{paddingHorizontal: 20}}
              onPress={() => {
                setMonth(item);
              }}>
              <Text
                style={{
                  fontSize: 30,
                  color: '#027E97',
                  fontWeight: 'bold',
                }}>
                {item}
              </Text>
            </TouchableHighlight>
          );
        }}
      />
      <FlatList
        data={daysLable}
        scrollEnabled={false}
        horizontal
        style={{marginHorizontal: 10, marginTop: 20}}
        renderItem={({item}) => {
          return (
            <TouchableHighlight
              style={{
                width: width / 7 - 20 / 7,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: '#027E97',
                  fontWeight: '300',
                  width: '100%',
                  textAlign: 'center',
                }}>
                {item}
              </Text>
            </TouchableHighlight>
          );
        }}
      />
      <CalendarPicker
        ref={exampleRef}
        startFromMonday={false}
        allowRangeSelection={true}
        minDate={minDate}
        maxDate={maxDate}
        todayBackgroundColor="transparent"
        selectedDayColor="rgba(2, 126, 151, 0.24)"
        selectedDayStyle={{
          backgroundColor: '#FF7A59',
          borderRadius: 11,
        }}
        nextTitleStyle={{height: 0}}
        previousTitleStyle={{height: 0}}
        todayTextStyle={{
          borderRadius: 11,
          borderWidth: 1.5,
          width: 30,
          height: 30,
          textAlignVertical: 'center',
          textAlign: 'center',
          borderColor: '#FF7A59',
        }}
        textStyle={{
          color: '#015A6B',
        }}
        selectedDayTextColor="#FFFFFF"
        onDateChange={onDateChange}
        selectedRangeStartStyle={{
          backgroundColor: '#FF7A59',
          borderRadius: 11,
        }}
        selectedRangeEndStyle={{
          backgroundColor: '#FF7A59',
          borderRadius: 11,
        }}
        selectedRangeStyle={{
          backgroundColor: 'rgba(2, 126, 151, 0.24)',
          paddingVertical: -20,
        }}
        weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
        dayLabelsWrapper={{
          height: 0,
          borderBottomWidth: 0,
          borderTopWidth: 0,
          backgroundColor: 'transaprent',
          maxHeight: 0,
          width: 2,
          marginBottom: -25,
        }}
        showDayStragglers
        monthYearHeaderWrapperStyle={{
          height: 0,
          width: 0,
        }}
      />
    </View>
  );
}
