import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DmzButton from '../../atoms/DmzButton/DmzButton';
import {
  SECONDARY_COLOR,
  NEW_PRIMARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
} from '../../../styles/colors';
import {BlurView} from '@react-native-community/blur';

const AppointmentQuestion = ({text, visible, onCancel, onNext, options}) => {
  const [selectedIndex, setIndex] = useState(-1);

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={onCancel}>
        <BlurView
          blurRadius={1}
          downsampleFactor={1}
          overlayColor={'rgba(255, 255, 255, .25)'}
          blurAmount={1}
          style={[StyleSheet.absoluteFillObject, {justifyContent: 'center'}]}
          blurType="light">
          {/* <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}> */}
          <TouchableWithoutFeedback onPress={() => {}}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 30,
                borderRadius: 30,
                alignSelf: 'center',
                margin: 50,
                justifyContent: 'center',
                alignItems: 'center',
                //   borderWidth: 1,
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 20,
                  textAlign: 'center',
                  marginBottom: 10,
                }}>
                {text}
              </Text>

              <View style={{borderWidth: 0}}>
                {options.map((option, index) => (
                  <TouchableOpacity onPress={() => setIndex(index)}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 3,
                      }}>
                      <View
                        style={{
                          height: 18,
                          width: 18,
                          borderRadius: 9,
                          borderWidth: 2,
                          marginHorizontal: 5,
                          borderColor: NEW_PRIMARY_BACKGROUND,
                          padding: 1.5,
                        }}>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor:
                              selectedIndex === index
                                ? NEW_PRIMARY_BACKGROUND
                                : '#ffffff',
                            borderRadius: 9,
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          fontFamily: 'Montserrat-Regular',
                          fontSize: 17,
                          textAlign: 'center',
                        }}>
                        {option}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>

              <DmzButton
                onPress={() => {
                  onNext();
                  onCancel();
                }}
                style={{
                  Text: {
                    width: '100%',
                    textAlign: 'center',
                    color: '#fff',
                    fontSize: 18,
                    fontFamily: 'Montserrat-SemiBold',
                  },
                  Container: {
                    width: 200,
                    height: 46,
                    borderRadius: 25,
                    backgroundColor: SECONDARY_COLOR,
                    alignSelf: 'center',
                    marginTop: 20,
                    elevation: 3,
                  },
                }}
                text="NEXT"
              />
            </View>
          </TouchableWithoutFeedback>
          {/* </View> */}
        </BlurView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default AppointmentQuestion;
