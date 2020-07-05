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
} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import Moment from 'moment';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function AppoinmentSlider({slots, navigation}) {
  const [pos, setPos] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [timeValue, setTimeValue] = useState('');
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
        if (!pos || gestureState.dy > 0) {
          val.setValue(gestureState.dy);
        }
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

  const bookAppointment = (id) => {
    console.log(id);
    navigation.navigate('ConfirmAppointment', {data: []});
  };

  return (
    <Animated.View
      style={{
        ...StyleSheet.absoluteFill,
        backgroundColor: '#EBFAFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: width,
        height: 'auto',
        transform: [{translateY: val}],
        zIndex: 10,
        elevation: 2,
      }}>
      <Animated.View style={{height: 50}} {...panResponder.panHandlers}>
        <View
          style={{
            backgroundColor: '#027E97',
            height: 5,
            width: 30,
            borderRadius: 5,
            marginBottom: 50,
            marginTop: 10,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        />
      </Animated.View>
      <ScrollView style={{flex: 1, paddingBottom: 50}} scrollEnabled={pos}>
        {slots &&
          slots.map((u, i) => {
            const date = Moment(u._id).format('dddd , Do');
            const {appointments} = u;
            return (
              <View style={{marginVertical: 5}} key={u._id}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#027E97',
                      fontWeight: 'bold',
                      fontFamily: 'Acumin-RPro',
                    }}>
                    {date}
                  </Text>
                  <ButtonGroup
                    onPress={updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={['AM', 'PM']}
                    containerStyle={{
                      height: 50,
                      width: 150,
                      backgroundColor: 'transparent',
                      borderWidth: 0,
                      marginLeft: 'auto',
                    }}
                    buttonStyle={{
                      width: 50,
                      height: 50,
                      backgroundColor: 'white',
                      borderRadius: 9,
                      borderWidth: 0,
                    }}
                    selectedButtonStyle={{
                      width: 50,
                      height: 50,
                      backgroundColor: '#027E97',
                      borderWidth: 0,
                      borderRadius: 9,
                    }}
                    textStyle={{
                      fontSize: 18,
                      fontWeight: 'normal',
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
                    appointments.map((u, i) => {
                      const time = Moment(u.bookedFor).format('HH:mm');
                      return (
                        <View
                          key={u._id}
                          style={{
                            width: width * 0.3,
                            height: 38,
                            marginBottom: 10,
                          }}>
                          <TouchableHighlight
                            style={{
                              width: 85,
                              height: 38,
                              backgroundColor:
                                timeValue === time ? '#FF7A59' : 'white',
                              borderWidth: 0,
                              borderRadius: 11,
                              elevation: 5,
                            }}
                            onPress={() => {
                              setTimeValue(time);
                              bookAppointment(u._id);
                            }}>
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: '200',
                                width: '100%',
                                height: '100%',
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                fontFamily: 'Acumin-RPro',
                              }}>
                              {time}
                            </Text>
                          </TouchableHighlight>
                        </View>
                      );
                    })}
                </View>
                <Text
                  style={{
                    marginLeft: 'auto',
                    marginRight: 20,
                    color: '#9D9D9D',
                    textDecorationLine: 'underline',
                    fontSize: 18,
                    lineHeight: 20,
                    marginTop: 10,
                    marginBottom: 20,
                    fontFamily: 'Acumin-RPro',
                  }}>
                  more
                </Text>
              </View>
            );
          })}
      </ScrollView>
    </Animated.View>
  );
}
