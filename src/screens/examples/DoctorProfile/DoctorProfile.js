import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Easing,
  Image,
  BackHandler,
} from 'react-native';
import SolidHeader from '../../../components/organisms/SolidHeader/SolidHeader';
import RatingStarts from '../../../components/atoms/ratingStars/RatingStarts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ProfilePic from '../../../components/atoms/ProfilePic/ProfilePic';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import {
  HEADER_TEXT,
  PRIMARY_COLOR,
  TERTIARY_TEXT,
  SECONDARY_COLOR,
  NEW_HEADER_TEXT,
  NEW_PRIMARY_COLOR,
  PRIMARY_BACKGROUND,
  SECONDARY_BACKGROUND,
  SOME_COLOR,
} from '../../../styles/colors';
function DoctorProfile(props) {
  const {navigation} = props;
  const dimen = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    // BackHandler.removeEventListener();
    Animated.sequence([
      Animated.timing(dimen, {
        toValue: 1,
        // delay: 200,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        // delay: 200,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  const {data} = props.navigation.state.params;
  const authData = useSelector((state) => state.AuthReducer);
  const _checkLogedinAndDoTheStuff = () => {
    console.log('bug bug ', authData.isLogedin);
    if (!authData.isLogedin) {
      console.log('>> authentication.');
      navigation.navigate('authentication');
    } else {
      // navigation.navigate('ConfirmAppointment', {data: data});
      // if (data.toggle === 0) {
      navigation.navigate('PatientCalendarScreen', {data: data});
      // } else {
      //   alert('open schedule popup');
      // }
    }
  };

  // BackHandler.addEventListener('hardwareBackPress', () => {
  //   navigation.navigate(
  //     'pageNavigation',
  //     {},
  //     navigation.navigate({routeName: 'Home'}),
  //   );
  //   navigation.goBack();
  //   return true;
  // });

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <SolidHeader
        style={{
          Container: {
            // height: '40%',
            position: 'absolute',
            borderBottomRightRadius: 70,
            height: dimen.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '40%'],
            }),
            width: dimen.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          },
        }}
      /> */}
      <TopNavBar
        style={{Container: {marginTop: 5}}}
        // hideRightComp
        onLeftButtonPress={() => {
          navigation.navigate(
            'pageNavigation',
            {},
            navigation.navigate({routeName: 'Home'}),
          );
        }}
        headerText="Doctor's Profile"
        // onRightButtonPress={() => {}}
      />
      <Animated.View
        style={{
          flex: 1,
          opacity: opacity,
          transform: [{scale: opacity}],
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 70,
          marginHorizontal: 20,
          // height: 135,
          // borderWidth: 1,
        }}>
        <View
          style={{
            height: 140,
            width: 140,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 70,
            backgroundColor: SECONDARY_BACKGROUND,
            // borderWidth: 1,
          }}>
          <Image
            style={{
              borderRadius: 65,
              height: 130,
              width: 130,
            }}
            source={require('../../../assets/jpg/person1.jpg')}
          />
        </View>

        <View
          style={{
            justifyContent: 'space-evenly',
            flex: 1,
            marginLeft: 15,
            alignSelf: 'stretch',
            // borderWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 22,
              lineHeight: 22,
              color: NEW_HEADER_TEXT,
              textTransform: 'capitalize',
              fontFamily: 'Montserrat-SemiBold',
              marginBottom: 5,
            }}>
            Dr. {data.basic.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 18,
              color: NEW_HEADER_TEXT,
              textTransform: 'capitalize',
              fontFamily: 'Montserrat-Medium',
            }}>
            {data.specialty}
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 7, alignItems: 'center'}}>
            <Image
              source={require('../../../assets/icons/star.png')}
              style={{height: 15, width: 15, marginRight: 7}}
            />
            <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 13}}>
              {4.2}{' '}
            </Text>
            <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 13}}>
              (9 Reviews)
            </Text>

            <MaterialCommunityIcons
              name="heart"
              size={22}
              color="#EF786E"
              style={{marginHorizontal: 10}}
            />
          </View>
        </View>
      </Animated.View>
      <Animated.View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 80,
          marginBottom: 10,

          opacity: opacity.interpolate({
            inputRange: [0, 0.99, 1],
            outputRange: [0, 0.2, 1],
          }),
          transform: [
            {
              scale: opacity.interpolate({
                inputRange: [0, 0.99, 1],
                outputRange: [0, 0.1, 1],
              }),
            },
          ],
        }}>
        <View style={Styles.DoctorProfilePatientDetails}>
          <Text
            style={{
              color: NEW_HEADER_TEXT,
              fontSize: 24,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            1.5K
          </Text>
          <Text
            style={{
              color: NEW_HEADER_TEXT,
              fontSize: 13,
              fontFamily: 'Montserrat-Regular',
            }}>
            Patients
          </Text>
        </View>
        <View style={Styles.DoctorProfileExperienceDetails}>
          <Text
            style={{
              color: NEW_HEADER_TEXT,
              fontSize: 24,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            5 yrs
          </Text>
          <Text
            style={{
              color: NEW_HEADER_TEXT,
              fontSize: 13,
              fontFamily: 'Montserrat-Regular',
            }}>
            Experience
          </Text>
        </View>
      </Animated.View>
      <View style={Styles.ContentContainer}>
        <View style={Styles.ContentContainerTabs}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginHorizontal: 5,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 13,
                // fontWeight: '700',
                fontFamily: 'Montserrat-SemiBold',
                backgroundColor: SECONDARY_COLOR,
                padding: 7,
                paddingHorizontal: 15,
                borderRadius: 10,
              }}>
              About
            </Text>
          </View>

          <View style={{flex: 1, alignItems: 'center', marginHorizontal: 5}}>
            <Text
              style={{
                color: SECONDARY_COLOR,
                fontSize: 13,
                // fontWeight: '500',
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Fee
            </Text>
          </View>

          <View style={{flex: 1, alignItems: 'center', marginHorizontal: 5}}>
            <Text
              style={{
                color: SECONDARY_COLOR,
                fontSize: 13,
                fontFamily: 'Montserrat-SemiBold',
                // fontWeight: '500',
              }}>
              Feedback
            </Text>
          </View>

          <View style={{flex: 1, alignItems: 'center', marginHorizontal: 5}}>
            <Text
              style={{
                color: SECONDARY_COLOR,
                fontSize: 13,
                // fontWeight: '500',
                fontFamily: 'Montserrat-SemiBold',
              }}>
              More
            </Text>
          </View>
        </View>
        <ScrollView style={Styles.DoctorInfoScroll}>
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text
              style={{
                letterSpacing: 0.3,
                lineHeight: 23,
                color: NEW_HEADER_TEXT,
                textAlign: 'center',
                fontFamily: 'Montserrat-Regular',
                fontSize: 13,
              }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sedLorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed
            </Text>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={_checkLogedinAndDoTheStuff}
          style={{
            height: 40,
            width: 250,
            borderRadius: 40,
            backgroundColor: SECONDARY_COLOR,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 8,
          }}>
          <Text
            style={{
              color: '#fff',
              // fontWeight: 'bold',
              fontSize: 16,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            BOOK APPOINTMENT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  DoctorProfilePatientDetails: {
    alignItems: 'center',
    flex: 1,
    borderRightWidth: 1.5,
    borderColor: NEW_PRIMARY_COLOR,
  },
  DoctorProfileExperienceDetails: {
    alignItems: 'center',
    flex: 1,
    borderLeftWidth: 1.5,
    borderColor: NEW_PRIMARY_COLOR,
  },
  ContentContainer: {
    flex: 4,
    zIndex: 10,
  },
  ContentContainerTabs: {
    backgroundColor: SECONDARY_BACKGROUND,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    alignSelf: 'center',
    marginHorizontal: 30,
  },
  DoctorInfoScroll: {
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
export default DoctorProfile;
