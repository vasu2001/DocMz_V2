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
} from '../../../styles/colors';
function DoctorProfile(props) {
  const {navigation} = props;
  const dimen = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    BackHandler.removeEventListener();
    Animated.sequence([
      Animated.timing(dimen, {
        toValue: 1,
        delay: 200,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        delay: 200,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  });
  const {data} = props.navigation.state.params;
  const authData = useSelector((state) => state.AuthReducer);

  const _checkLogedinAndDoTheStuff = () => {
    console.log('bug bug ', authData.isLogedin);
    if (!authData.isLogedin) {
      console.log('>> authentication.');
      navigation.navigate('authentication');
    } else {
      // navigation.navigate('ConfirmAppointment', {data: data});
      if (data.toggle === 0) {
        navigation.navigate('question', {data: data});
      } else {
        alert('open schedule popup');
      }
    }
  };

  BackHandler.addEventListener('hardwareBackPress', () => {
    navigation.navigate(
      'pageNavigation',
      {},
      navigation.navigate({routeName: 'Home'}),
    );
    return true;
  });

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <SolidHeader
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
      />
      <TopNavBar
        style={{Container: {marginTop: 5}}}
        onLeftButtonPress={() => {
          navigation.navigate(
            'pageNavigation',
            {},
            navigation.navigate({routeName: 'Home'}),
          );
        }}
        onRightButtonPress={() => {}}
      />
      <Animated.View
        style={{flex: 1, opacity: opacity, transform: [{scale: opacity}]}}>
        <Text
          style={{
            fontSize: 36,
            fontWeight: '700',
            alignSelf: 'center',
            lineHeight: 36,
            color: HEADER_TEXT,
            textTransform: 'capitalize',
          }}>
          Dr. {data.basic.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            alignSelf: 'center',
            lineHeight: 22,
            color: PRIMARY_COLOR,
            textTransform: 'capitalize',
          }}>
          {data.specialty}
        </Text>
        <View style={{alignSelf: 'center', marginTop: 2}}>
          <RatingStarts
            rating={4}
            size={14}
            filled
            activeColor={PRIMARY_COLOR}
            passiveColor={'#EBFAFF'}
          />
        </View>
      </Animated.View>
      <Animated.View
        style={{
          flex: 1.5,
          flexDirection: 'row',
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
        <View style={{flex: 3, alignItems: 'center'}}>
          <View
            style={{
              borderWidth: 10,
              borderColor: '#fff',
              borderRadius: 20,
              height: 180,
              width: 180,
              bottom: -15,
              position: 'relative',
            }}>
            <Image
              style={{
                borderRadius: 15,
                height: '100%',
                width: '100%',
              }}
              source={require('../../../assets/jpg/person1.jpg')}
            />
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                borderWidth: 2,
                borderColor: '#FD906A',
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 1,
                backgroundColor: '#fff',
                position: 'absolute',
                bottom: 0,
                right: -8,
                bottom: -8,
                zIndex: 9999,
              }}>
              <MaterialCommunityIcons name="heart" size={24} color="#FD906A" />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            borderBottomRightRadius: 70,
            justifyContent: 'center',
          }}>
          <View style={Styles.DoctorProfilePatientDetails}>
            <Fontisto name="doctor" size={32} color={PRIMARY_COLOR} />
            <View style={{marginLeft: 15}}>
              <Text
                style={{
                  color: PRIMARY_COLOR,
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>
                1.5K
              </Text>
              <Text style={{color: PRIMARY_COLOR, fontSize: 12}}>Patients</Text>
            </View>
          </View>
          <View style={Styles.DoctorProfileExperienceDetails}>
            <MaterialCommunityIcons
              name="timer-sand"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={{marginLeft: 15}}>
              <Text
                style={{
                  color: PRIMARY_COLOR,
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>
                5 Years
              </Text>
              <Text style={{color: PRIMARY_COLOR, fontSize: 12}}>
                Experience
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
      <View style={Styles.ContentContainer}>
        <View style={Styles.ContentContainerTabs}>
          <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
            <Text
              style={{
                color: PRIMARY_COLOR,
                fontSize: 16,
                lineHeight: 16,
                fontWeight: '700',
              }}>
              About
            </Text>
            <View
              style={{
                height: 6,
                width: 6,
                borderRadius: 6,
                backgroundColor: PRIMARY_COLOR,
                marginBottom: -8,
                marginTop: 2,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: TERTIARY_TEXT,
                fontSize: 16,
                lineHeight: 16,
                fontWeight: '500',
              }}>
              Calendar
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: TERTIARY_TEXT,
                fontSize: 16,
                lineHeight: 16,
                fontWeight: '500',
              }}>
              Feedback
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: TERTIARY_TEXT,
                fontSize: 16,
                lineHeight: 16,
                fontWeight: '500',
              }}>
              More
            </Text>
          </View>
        </View>
        <ScrollView style={Styles.DoctorInfoScroll}>
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text
              style={{letterSpacing: 0.3, lineHeight: 20, color: HEADER_TEXT}}>
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
            width: 180,
            borderRadius: 40,
            backgroundColor: PRIMARY_COLOR,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 5,
            marginLeft: 8,
          }}>
          <Text style={{color: '#fff', fontWeight: '700', letterSpacing: 0.8}}>
            Book appointment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  DoctorProfilePatientDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  DoctorProfileExperienceDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ContentContainer: {
    flex: 4,
    zIndex: 10,
  },
  ContentContainerTabs: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 25,
  },
  DoctorInfoScroll: {
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
export default DoctorProfile;
