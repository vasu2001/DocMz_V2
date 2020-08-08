/* eslint-disable react-native/no-inline-styles */
import React, {setState, useState, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import Moment from 'moment';
import {
  PRIMARY_BACKGROUND,
  NEW_HEADER_TEXT,
  SECONDARY_COLOR,
  NEW_PRIMARY_COLOR,
  NEW_UNSELECTED_TEXT,
} from '../../../styles/colors';
import NewToggleButton from '../ToggleButton/NewToggleButton';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function AppoinmentSlider({
  slots,
  navigation,
  setModal,
  doctorData,
}) {
  const [pos, setPos] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [timeValue, setTimeValue] = useState('');
  const [isAM, setAM] = useState(true);
  const [more, setMore] = useState(false);
  const val = useRef(new Animated.Value(height * 0.6)).current;

  const updateIndex = (i) => {
    setselectedIndex(i);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderGrant: (e, gestureState) => {
      val.setOffset(val.__getValue());
      console.log(val.__getValue());
    },
    onPanResponderMove: (e, gestureState) => {
      console.log(gestureState.dy, ' ', height * 0.25);
      if (gestureState.moveY <= height * 0.6) {
        // if (!pos || gestureState.dy > 0) {
        val.setValue(gestureState.dy);
        // }
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dy < 0) {
        console.log('in1');
        pos == false ? val.setValue(height * -0.6) : null;
        setPos(true);
      } else if (gestureState.dy > 0) {
        console.log('in2');
        pos ? val.setValue(height * 0.6) : val.setValue(0);
        setPos(false);
      }
      val.flattenOffset();
    },
  });

  const bookAppointment = (slot) => {
    console.log(slot._id);
    setModal({
      visible: true,
      onNext: () =>
        navigation.navigate('ConfirmAppointment', {data: slot, doctorData}),
    });
  };

  return (
    <Animated.View
      style={{
        ...StyleSheet.absoluteFill,
        backgroundColor: PRIMARY_BACKGROUND,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: width,
        height: 'auto',
        transform: [{translateY: val}],
        zIndex: 9999,
        elevation: 2,
      }}>
      <Animated.View style={{height: 50}} {...panResponder.panHandlers}>
        <View
          style={{
            backgroundColor: NEW_PRIMARY_COLOR,
            height: 4,
            width: 75,
            borderRadius: 5,
            marginBottom: 50,
            marginTop: 30,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        />
      </Animated.View>
      <ScrollView style={{flex: 1, paddingBottom: 50}} scrollEnabled={pos}>
        {slots &&
          slots.map((u, i) => {
            const date = Moment(u._id).format('MMMM, DD');
            const {appointments} = u;
            return (
              <View
                style={{
                  marginVertical: 5,
                  borderBottomWidth: 1,
                  borderColor: NEW_UNSELECTED_TEXT,
                  marginTop: 20,
                }}
                key={u._id}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: NEW_HEADER_TEXT,
                      // fontWeight: 'bold',
                      fontFamily: 'Montserrat-Medium',
                      marginLeft: 10,
                    }}>
                    {date}
                  </Text>
                  <NewToggleButton
                    text0="AM"
                    text1="PM"
                    toggle={isAM}
                    onToggle={() => {
                      setAM(!isAM);
                    }}
                    style={{width: 100, marginRight: 20, height: 32}}
                    textStyle={{
                      fontSize: 16,
                      fontFamily: 'Montserrat-SemiBold',
                      margin: 2,
                    }}
                  />
                </View>
                <View
                  style={{
                    marginVertical: 20,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  {appointments &&
                    (more ? appointments : appointments.slice(0, 6)).map(
                      (u, i) => {
                        const time = Moment(u.bookedFor).format('HH:mm');
                        return (
                          <View
                            key={u._id}
                            style={{
                              width: width * 0.3,
                              height: 38,
                              marginBottom: 10,
                              alignItems: 'center',
                            }}>
                            <TouchableHighlight
                              style={{
                                width: 85,
                                height: 38,
                                backgroundColor:
                                  timeValue === time
                                    ? SECONDARY_COLOR
                                    : 'transparent',
                                borderWidth: 0,
                                borderRadius: 6,
                              }}
                              onPress={() => {
                                setTimeValue(time);
                                bookAppointment(u);
                              }}>
                              <Text
                                style={{
                                  fontSize: 20,
                                  fontWeight: '200',
                                  width: '100%',
                                  height: '100%',
                                  textAlign: 'center',
                                  textAlignVertical: 'center',
                                  fontFamily: 'Montserrat-Regular',
                                  color:
                                    timeValue === time ? '#ffffff' : '#000000',
                                }}>
                                {time}
                              </Text>
                            </TouchableHighlight>
                          </View>
                        );
                      },
                    )}
                </View>
                <TouchableOpacity onPress={() => setMore(!more)}>
                  <Text
                    style={{
                      marginLeft: 'auto',
                      marginRight: 20,
                      color: NEW_PRIMARY_COLOR,
                      textDecorationLine: 'underline',
                      fontSize: 17,
                      lineHeight: 20,
                      marginTop: 10,
                      marginBottom: 20,
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    {more ? 'less' : 'more'}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>
    </Animated.View>
  );
}
