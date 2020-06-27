// import React, { useState } from 'react'
// import { View, Text } from 'react-native'
// import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar'
// import NotFound from '../../../components/organisms/NotFound/NotFound'

// const MedicalRecords = ({ navigation }) => {
//   const [isEmpty, setIsEmpty] = useState(true)
//   return (
//     <View>
//       <TopNavBar navigation={navigation} isClap={true} onLeftButtonPress={() => navigation.goBack(null)} headerText={"Medical Records"} />
//       {
//         isEmpty ? <NotFound /> :
//           <Text>MadicalRecords</Text>
//       }
//     </View>
//   )
// }

// export default MedicalRecords

import React, {useState} from 'react';
import {View, StyleSheet, Text, BackHandler} from 'react-native';
import GradientTopNavBar from '../../../components/molecules/TopNavBar/GradientTopNavBar';
import ProfilePic from '../../../components/atoms/ProfilePic/ProfilePic';
import Ham from '../../../assets/svg/hamburger.svg';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import DmzSearchbar from '../../../components/molecules/DmzSeachbar/DmzSearchbar';
import BlockLinker from '../../../components/molecules/BlockLinker/BlockLinker';
import AnimInput from '../../../components/molecules/AnimInput/AnimInput';
import LinkedComponent from '../../../components/molecules/LinkedComponent/LinkedComponent';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import {Colors} from '../../../styles/index';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Overlay from '../../../components/atoms/Overlay/Overlay';
import BasicCard from '../../../components/atoms/BasicCard/BasicCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconsRow from '../../../components/atoms/IconsRow/IconsRow';
import Dot from '../../../components/atoms/ToggleDot/ToggleDot';
import VerticleText from '../../../components/atoms/VerticalText/VerticalText';
import Counter from '../../../components/molecules/Counter/Counter';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import FancyHeaderLite from '../../../components/organisms/FancyHeaderLite/FancyHeaderLite';
import Container from '../../../components/organisms/Container/Container';
import {PRIMARY_COLOR, TERTIARY_TEXT} from '../../../styles/colors';
import {useSelector} from 'react-redux';
import DatePicker from 'react-native-datepicker';
function MedicalRecords({navigation}) {
  const [showAddRecord, setShowAddRecord] = useState(false);
  const {data} = useSelector((state) => state.AuthReducer);
  const [review, setReview] = useState(false);
  const onPress = () => {
    setShowAddRecord(true);
  };

  BackHandler.addEventListener('hardwareBackPress', function () {
    if (showAddRecord) {
      setShowAddRecord(false);

      return true;
    }

    // navigation.goBack();
    return false;
  });

  return (
    <View style={Styles.Container}>
      <FancyHeaderLite
        headerText=""
        navigation={navigation}
        // LeftComp={
        //   <ProfilePic
        //     sourceurl={require('../../../assets/jpg/person1.jpg')}
        //     style={{Container: {height: 32, width: 32}}}
        //   />
        // }
        style={{Section: {overflow: 'hidden', height: '18%', marginBottom: 0}}}
      />
      <Container
        style={{
          height: '75%',
          transform: [{translateY: -30}],
          zIndex: 999,
          backgroundColor: '#fff',
          padding: 20,
        }}>
        <DmzText
          text={`Hello ${data.name}`}
          lite
          gap_medium
          style={{color: '#575757'}}
        />
        <DmzText
          text="Medical History"
          extera_bold
          type={5}
          style={{color: '#444'}}
          gap_medium
        />

        {/* when list of medication isn't */}

        <View style={Styles.AddNewContainer}>
          <DmzText type={3} lite gap_small text="Add a new medication" />
          <TouchableOpacity onPress={onPress}>
            <SimpleIcon name="plus" color={Colors.header_grad_two} size={38} />
          </TouchableOpacity>
        </View>

        {/* review list */}
        {review && (
          <View>
            <LinkedComponent linkColor={'#F4C130'}>
              <AnimInput placeholder="medical" />
            </LinkedComponent>
            <LinkedComponent type={2} linkColor={'#F4C130'}>
              <AnimInput placeholder="medical" />
            </LinkedComponent>
            <LinkedComponent type={2} linkColor={'#F4C130'}>
              <AnimInput placeholder="medical" />
            </LinkedComponent>
            <LinkedComponent type={0} linkColor={'#F4C130'}>
              <AnimInput placeholder="medical" />
            </LinkedComponent>

            <DmzButton
              text="Save"
              style={{
                Container: {
                  backgroundColor: Colors.header_grad_two,
                  height: 30,
                  borderRadius: 40,
                  alignSelf: 'center',
                  marginTop: 40,
                },
                Text: {
                  color: '#f1f1f1',
                },
              }}
            />
          </View>
        )}
      </Container>
      {showAddRecord && (
        <Overlay
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}>
          <BasicCard
            style={{
              CardContainer: {
                width: '85%',
                marginRight: null,
                height: '85%',
                justifyContent: null,
                alignItems: null,
                padding: 20,
                borderRadius: 20,
                overflow: 'hidden',
                // zIndex: 9999,
              },
            }}>
            <ScrollView>
              <DmzSearchbar
                style={{marginBottom: 10, marginTop: null, width: '95%'}}
                placeholder="search medicine"
              />
              <DmzText
                lite
                type={3}
                gap_small
                text="Dose Appearance"
                style={{color: '#555', marginRight: 15}}>
                <IconsRow
                  Icon={
                    <FontAwesome
                      name="heart"
                      size={20}
                      color="#ccc"
                      style={{marginHorizontal: 10}}
                    />
                  }
                  number={8}
                />
              </DmzText>
              <View style={Styles.ColorContainer}>
                <View style={{flex: 1}}>
                  <DmzText
                    lite
                    gap_small
                    text="Colors"
                    style={{color: '#777'}}
                  />
                </View>
                <View style={Styles.Colors}>
                  <Dot style={{height: 10, width: 10}} />
                  <Dot style={{height: 10, width: 10}} />
                  <Dot style={{height: 10, width: 10}} />
                  <Dot style={{height: 10, width: 10}} />
                  <Dot style={{height: 10, width: 10}} />
                </View>
              </View>
              <DmzText
                lite
                type={3}
                style={{color: '#555'}}
                gap_small
                text="Take as per needed"
              />
              <DmzText
                lite
                gap_small
                text="Schedule"
                type={3}
                style={{color: '#555'}}
              />
              <View style={Styles.DayContainer}>
                <VerticleText text={{Top: 'M', Bottom: '7'}} />
                <VerticleText text={{Top: 'Tu', Bottom: '8'}} />
                <VerticleText isActive text={{Top: 'W', Bottom: '9'}} />
                <VerticleText isActive text={{Top: 'Th', Bottom: '10'}} />
                <VerticleText text={{Top: 'F', Bottom: '11'}} />
                <VerticleText isActive text={{Top: 'Sa', Bottom: '12'}} />
                <VerticleText isActive text={{Top: 'Su', Bottom: '13'}} />
              </View>
              <DmzText
                lite
                text="Start Date"
                style={[styles.Placeholder, {marginTop: 20}]}
              />
              <DatePicker
                // date={inputFields.dob}
                mode="date"
                placeholder="Select Start Date"
                format="DD-MM-YYYY"
                minDate="01-01-1950"
                maxDate="01-01-2019"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                allowFontScaling={true}
                showIcon={false}
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    fontSize: 15,
                    height: 40,
                  },
                  placeholderText: {
                    color: '#77777795',
                    width: '100%',
                  },
                  dateText: {
                    color: '#000',
                    width: '100%',
                    marginLeft: 30,
                  },
                }}
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  borderColor: '#555',
                }}
                onDateChange={(date) => {
                  console.log(date);
                  // setInputFields({...inputFields, dob: date});
                }}
              />
              <DmzText
                lite
                text="End Date"
                style={[styles.Placeholder, {marginTop: 20}]}
              />
              <DatePicker
                // date={inputFields.dob}
                mode="date"
                placeholder="Select End Date"
                format="DD-MM-YYYY"
                minDate="01-01-1950"
                maxDate="01-01-2019"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                allowFontScaling={true}
                showIcon={false}
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    fontSize: 15,
                    height: 40,
                  },
                  placeholderText: {
                    color: '#77777795',
                    width: '100%',
                  },
                  dateText: {
                    color: '#000',
                    width: '100%',
                    marginLeft: 30,
                  },
                }}
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  borderColor: '#555',
                }}
                onDateChange={(date) => {
                  console.log(date);
                  // setInputFields({...inputFields, dob: date});
                }}
              />
              <DmzText
                lite
                gap_small
                text="Reminders & Dosage"
                type={3}
                style={{color: '#555', marginTop: 20}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <Counter />
                <Counter />
                <Counter />
              </View>
              {/* <DmzButton
                text="Add"
                style={{
                  Container: {
                    elevation: 0,
                    backgroundColor: PRIMARY_COLOR,
                    width: 80,
                    borderRadius: 30,
                    marginTop: 20,
                    alignSelf: 'center',
                  },
                  Text: {
                    color: '#fff',
                    fontSize: 16,
                  },
                }}
              /> */}
            </ScrollView>
          </BasicCard>
        </Overlay>
      )}
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  HeaderTextContainer: {
    padding: 20,
  },
  AddNewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ColorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Colors: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default MedicalRecords;

const styles = StyleSheet.create({
  Container: {height: 60, marginTop: 20, left: 0},
  Input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    left: 0,
    marginTop: 15,
    marginBottom: 0,
  },
  Placeholder: {
    fontSize: 16,
    color: TERTIARY_TEXT,
  },
});
