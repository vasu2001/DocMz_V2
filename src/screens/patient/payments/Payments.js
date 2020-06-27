/* eslint-disable react-native/no-inline-styles */
// import React, { useState } from 'react'
// import { View, Text } from 'react-native'
// import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar'
// import NotFound from '../../../components/organisms/NotFound/NotFound'

// const Payments = ({ navigation }) => {
//       const [isEmpty, setIsEmpty] = useState(true)
//       return (
//             <View>
//                   <TopNavBar navigation={navigation} isClap={true} onLeftButtonPress={() => navigation.goBack(null)} headerText={"Payment"} />
//                   {
//                         isEmpty ? <NotFound /> :
//                               <Text>Payment</Text>
//                   }
//             </View>
//       )
// }

// export default Payments

import React, {useRef, useEffect, useState, createRef} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Easing,
  Keyboard,
  Alert,
} from 'react-native';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import PropfilePic from '../../../components/atoms/ProfilePic/ProfilePic';
import HamBurg from '../../../assets/svg/hamburger.svg';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import Antdesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../../../styles/index';
import DmzHeaderAtom from '../../../components/atoms/DmzHeader/DmzHeaderAtom';
import AnimInput from '../../../components/molecules/AnimInput/AnimInput';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import FancyHeaderLite from '../../../components/organisms/FancyHeaderLite/FancyHeaderLite';
import DatePicker from 'react-native-datepicker';
function Payments({navigation}) {
  const [myCardInput, setMyCardInput] = useState({
    number: '',
    expDate: '',
    secCode: '',
    name: '',
  });

  const height = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;
  const rotateY = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const addCardAnim = useRef(new Animated.Value(0)).current;
  const [addCardForm, setAddCardForm] = useState(false);
  const dimen = useWindowDimensions();
  const onPress = () => {
    Animated.sequence([
      Animated.timing(height, {
        toValue: 1,
        duration: 400,
        delay: 100,
        easing: Easing.elastic(),
        useNativeDriver: false,
      }),
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration: 1200,
          delay: 200,
          easing: Easing.elastic(),
          useNativeDriver: true,
        }),
        Animated.timing(rotateY, {
          toValue: 1,
          duration: 1200,
          delay: 200,
          easing: Easing.elastic(),
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(translateY, {
        toValue: 1,
        duration: 500,
        easing: Easing.elastic(),
        useNativeDriver: false,
      }),
    ]).start(() => {
      setAddCardForm(true);
      Animated.timing(addCardAnim, {
        toValue: 1,
        delay: 200,
        duration: 1000,
        easing: Easing.elastic(),
        useNativeDriver: false,
      }).start();
    });
  };
  const scroll = useRef();
  Keyboard.addListener('keyboardDidHide', () => {
    scroll.current.scrollTo({x: 0, y: 0, animated: true});
  });

  const makePayment = () => {
    console.log('adding');
    const regDate = new RegExp(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
    );
    const {expDate, number, secCode, name} = myCardInput;
    number == '' && expDate == '' && secCode == '' && name == ''
      ? Alert.alert('One or more Fields Empty')
      : regDate.test(expDate)
      ? Alert.alert('Invalid Date')
      : null;
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        // ref={(c) => {
        //   scroll = c;
        // }}
        ref={scroll}>
        <FancyHeaderLite
          navigation={navigation}
          LeftComp={
            <PropfilePic
              style={{
                Container: {
                  height: 30,
                  width: 30,
                  borderRadius: 30,
                },
              }}
              sourceurl={require('../../../assets/jpg/person1.jpg')}
            />
          }
          style={{
            Section: {overflow: 'hidden', marginBottom: 0},
            Container: {height: 'auto'},
          }}>
          <Animated.View
            style={[
              Styles.AnimContainer,
              {
                height: height.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 300],
                }),
                backgroundColor: 'transparent',
              },
            ]}>
            <Animated.View
              style={[
                Styles.AnimCard,
                {
                  opacity: scale,
                  transform: [
                    {
                      scale: scale,
                    },
                    {
                      rotateY: rotateY.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: ['-10deg', '190deg', '0deg'],
                      }),
                    },
                  ],
                  alignSelf: 'center',
                },
              ]}
            />
          </Animated.View>
        </FancyHeaderLite>
        <Animated.View
          style={{
            height: '70%',
            zIndex: 9999,
            backgroundColor: '#fff',
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -40],
                }),
              },
            ],
            borderTopLeftRadius: translateY.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 38],
            }),
            borderTopRightRadius: translateY.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 38],
            }),
          }}>
          <ScrollView
            scrollEnabled={false}
            style={{height: 600, flex: 1}}
            contentContainerStyle={Styles.AnimContainer}>
            {!addCardForm && (
              <Animated.View
                style={{
                  opacity: addCardAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                }}>
                <TouchableOpacity style={Styles.AddCard} onPress={onPress}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Antdesign name="plus" size={18} />
                  </View>
                  <View
                    style={{
                      flex: 5,
                    }}>
                    <DmzText
                      text="Add a credit card"
                      normal
                      gap_small
                      type={3}
                    />
                  </View>
                </TouchableOpacity>
              </Animated.View>
            )}

            {addCardForm && (
              <Animated.View
                style={{
                  opacity: addCardAnim,
                  // height: 500
                }}>
                <View style={{flex: 1, marginBottom: 10}}>
                  <DmzText text="Card Number" type={3} semi_bold gap_small />
                  <AnimInput
                    inputHandler={(txt) =>
                      setMyCardInput({...myCardInput, number: txt})
                    }
                    withAnim={false}
                    keyboardType={'phone-pad'}
                    placeholder={'card number'}
                    style={{
                      Container: {
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 10,
                      },
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  }}>
                  <View style={{width: '55%'}}>
                    <DmzText text="Expiry Date" type={3} semi_bold gap_small />
                    <DatePicker
                      // style={{width: 200}}
                      date={myCardInput.expDate}
                      mode="date"
                      placeholder="Expiry Date"
                      format="DD-MM-YYYY"
                      minDate="01-01-2019"
                      maxDate="01-01-2040"
                      showIcon={false}
                      allowFontScaling={true}
                      customStyles={{
                        dateInput: {
                          borderWidth: 0,
                          fontSize: 15,
                          height: 40,
                        },
                      }}
                      style={{
                        borderWidth: 1,
                        borderColor: '#ccc',
                        width: '100%',
                        alignItems: 'center',
                        borderRadius: 10,
                      }}
                      onDateChange={(date) => {
                        console.log(date);
                        setMyCardInput({...myCardInput, expDate: date});
                      }}
                    />
                  </View>
                  <View style={{width: '35%'}}>
                    <DmzText text="Secure Code" type={3} semi_bold gap_small />
                    <AnimInput
                      inputHandler={(txt) =>
                        setMyCardInput({...myCardInput, secCode: txt})
                      }
                      withAnim={false}
                      keyboardType={'number-pad'}
                      placeholder={'Secure Code'}
                      style={{
                        Container: {
                          borderWidth: 1,
                          borderColor: '#ccc',
                          borderRadius: 10,
                        },
                      }}
                      maxLength={4}
                    />
                  </View>
                </View>
                <View style={{flex: 1}}>
                  <DmzText
                    text="Name on the Card"
                    type={3}
                    semi_bold
                    gap_small
                  />
                  <AnimInput
                    inputHandler={(txt) =>
                      setMyCardInput({...myCardInput, name: txt})
                    }
                    withAnim={false}
                    placeholder={'Name on the Card'}
                    style={{
                      Container: {
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 10,
                      },
                    }}
                  />
                </View>

                <DmzButton
                  text="Pay"
                  onPress={makePayment}
                  style={{
                    Container: {
                      alignSelf: 'center',
                      width: '50%',
                      marginTop: 40,
                      borderColor: Colors.header_grad_two,
                      borderWidth: 1,
                      elevation: 4,
                      borderRadius: 100,
                    },
                    Text: {color: Colors.header_grad_two, fontSize: 16},
                  }}
                />
              </Animated.View>
            )}
          </ScrollView>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  AnimContainer: {
    width: '100%',
    borderRadius: 38,
    padding: 25,
  },
  AnimCard: {
    width: '90%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 20,
    backfaceVisibility: 'visible',
    transform: [
      {
        perspective: 100,
      },
    ],
  },
  AddCard: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default Payments;
