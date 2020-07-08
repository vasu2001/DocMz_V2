/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Modal, Text} from 'react-native';
import LinearGradientBackground from '../../../components/molecules/GradientBackground/LinearGradientBackground';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import Reports from '../../../assets/svg/reports.svg';
import {ScrollView} from 'react-native-gesture-handler';
import DmzButton from '../../../components/atoms/SwitchButton/SwitchButton';
import {
  PRIMARY_TEXT,
  HEADER_TEXT,
  PRIMARY_COLOR,
  TERTIARY_TEXT,
} from '../../../styles/colors';
import PatienVitalScreen from './PatienVitalScreen';
import PatienSurgeryScreen from './PatienSurgeryScreen';
import PatienMedsScreen from './PatienMedsScreen';
import {useSelector} from 'react-redux';

export default function PatienDashboard({navigation}) {
  const patientCategories = [
    'Vitals',
    'Surgeries',
    'Meds',
    'Lifestyle',
    'Family History',
  ];
  const {patient} = useSelector((state) => state.PatientAccountReducer);

  useEffect(() => {
    console.log(patient, 'qwerty1');
  }, []);

  const [selectedHeader, setHeader] = useState('Vitals');
  const [editCard, setEditCard] = useState();
  const [modalVisible, setModal] = useState(false);
  const selecteCategory = (val) => {
    setHeader(val);
    console.log(selectedHeader);
  };

  const modalVisibility = (item) => {
    setModal(!modalVisible);
    setEditCard(item);
  };

  const getDetails = () => {
    if (selectedHeader === 'Vitals') {
      return <PatienVitalScreen vitals={patient} />;
    } else if (selectedHeader === 'Surgeries') {
      return <PatienSurgeryScreen />;
    } else if (selectedHeader === 'Meds') {
      return <PatienMedsScreen />;
    } else {
      return null;
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <LinearGradientBackground
        angle={110}
        colors={['#F8F7FF40', '#F8F7FF40']}
        style={{flex: 1, opacity: 1}}>
        <ScrollView style={{flex: 1}} contentContainerStyle={{}}>
          <TopNavBar
            navigation={navigation}
            style={{
              Container: {
                height: 50,
                marginTop: 10,
              },
            }}
          />

          <View
            style={{
              marginHorizontal: '10%',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{width: '60%', marginRight: 10}}>
              <DmzText
                text={"Allen Paul's"}
                style={{color: PRIMARY_TEXT, fontSize: 18}}
              />
              <DmzText
                text={'MEDICAL HISTORY'}
                style={{
                  color: HEADER_TEXT,
                  lineHeight: 40,
                  fontSize: 38,
                  textTransform: 'uppercase',
                  marginTop: 10,
                }}
              />
            </View>
            <Reports />
          </View>
          <View>
            <ScrollView
              horizontal
              style={{height: 'auto', marginHorizontal: 25, marginTop: 20}}
              contentContainerStyle={{
                height: 70,
              }}>
              {patientCategories.map((u, i) => {
                return (
                  <DmzButton
                    text={u}
                    onPress={() => {
                      selecteCategory(u);
                    }}
                    style={{
                      Text: {
                        color:
                          selectedHeader == u ? PRIMARY_COLOR : TERTIARY_TEXT,
                        fontSize: 18,
                        fontWeight: selectedHeader == u ? 'bold' : '300',
                        borderBottomWidth: selectedHeader == u ? 2 : 0,
                        borderBottomColor:
                          selectedHeader == u ? PRIMARY_COLOR : TERTIARY_TEXT,
                        paddingBottom: 4,
                      },
                      Container: {
                        marginHorizontal: 10,
                      },
                    }}
                  />
                );
              })}
            </ScrollView>
          </View>
          {getDetails()}
        </ScrollView>
      </LinearGradientBackground>
    </View>
  );
}
