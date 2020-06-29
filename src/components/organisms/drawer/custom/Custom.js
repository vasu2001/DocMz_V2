/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Avater from '../../../atoms/Avater/Avater';
import DmzText from '../../../atoms/DmzText/DmzText';
import Option from '../../../molecules/Option/Option';
import {Colors} from '../../../../styles/index';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {resetStore} from '../../../../redux/action/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ExpandableOption from '../../../molecules/ExpandableOption/ExpandableOption';
import FancyHeaderLite from '../../../organisms/FancyHeaderLite/FancyHeaderLite';
import {HEADER_TEXT, TERTIARY_TEXT} from '../../../../styles/colors';
import StepsTracker from '../../../atoms/StepsTracker/StepsTracker';
import SlidingUpPanel from 'rn-sliding-up-panel';
import PatientLocation from '../../../../screens/examples/PatientLocation/PatientLocation';

const Navigation = [
  {
    active: true,
    name: 'Account',
    icon: 'account-circle',
    isNested: true,
    nestedRoutes: [
      {
        active: true,
        name: 'Profile',
        icon: 'account-circle',
        navigateTo: 'Profile',
      },
      {
        active: true,
        name: 'Payments',
        icon: 'credit-card',
        navigateTo: 'Payments',
      },
      {
        active: true,
        name: 'Address',
        icon: 'credit-card',
        navigateTo: 'Payments',
      },
      {
        active: true,
        name: 'Logout',
        icon: 'book',
      },
    ],
  },
  {
    active: true,
    name: 'Orders',
    icon: 'cart-outline',
    navigateTo: 'Orders',
  },
  {
    active: true,
    name: 'Support',
    icon: 'headset',
    navigateTo: 'Help',
  },
  {
    active: true,
    name: 'Subscription',
    icon: 'google-circles',
    navigateTo: 'Orders',
  },
  {
    active: true,
    name: 'Reminders',
    icon: 'bell-outline',
    navigateTo: 'Orders',
  },
  {
    active: true,
    name: 'Referrals',
    icon: 'share-variant',
    navigateTo: 'Orders',
  },
  {
    active: true,
    name: 'Redeem Voucher',
    icon: 'wallet-giftcard',
    navigateTo: 'Orders',
  },
  {
    active: true,
    name: 'Medical Records',
    icon: 'account-card-details',
    navigateTo: 'MedicalRecords',
  },
  {
    active: true,
    name: 'Appointments',
    icon: 'book',
    navigateTo: 'Appointments',
  },
  {
    active: true,
    name: 'Family Member',
    icon: 'account-group',
    navigateTo: 'FamilyMember',
  },
  {
    active: true,
    name: 'My Doctors',
    icon: 'account',
    navigateTo: 'MyDoctors',
  },
  {
    active: true,
    name: 'Settings',
    icon: 'settings-outline',
    navigateTo: 'AppSettings',
  },
  {
    active: true,
    name: 'Help',
    icon: 'help-rhombus-outline',
    navigateTo: 'Help',
  },
  // {
  //   active: true,
  //   name: 'Are you doctor ?',
  //   icon: 'doctor',
  //   navigateTo: '',
  // },
];

const Custom = ({
  navigation,
  name = 'jui sarkar',
  phone_num = '8001981993',
  activeItemKey,
}) => {
  const {isLogedin, isDoctor, data} = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  console.log(navigation);
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&');
  console.log(data);
  const _logout = () => {
    dispatch(resetStore());
    navigation.navigate('Home');
  };
  const [location, setLocation] = useState('Bangalore');
  const [showLocation, setShowLocation] = useState(false);
  const closeDrawer = () => {
    navigation.closeDrawer();
  };
  const onProfileClick = () => {
    console.log('tapped user rofile');
    navigation.navigate('Profile');
  };

  const closeLocPanel = () => {
    setShowLocation(!showLocation);
  };
  const setLoc = (i) => {
    setLocation(i);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: '30%',
          justifyContent: 'center',
        }}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={onProfileClick}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Avater type={6} style={{borderRadius: 10, borderWidth: 4}} />
            <DmzText
              text={
                !data || data.length == 0
                  ? ''
                  : `${data.firstName} ${data.lastName}`
              }
              style={{fontSize: 18, color: '#fff', marginLeft: 10}}
            />
          </TouchableOpacity>
          <StepsTracker
            text="Complete Your Profile (30%)"
            textStyle={{
              fontSize: 16,
              color: TERTIARY_TEXT,
              lineHeight: 21,
            }}
            style={{
              width: '60%',
              flexDirection: 'column-reverse',
              marginTop: 5,
            }}
            completed={33}
            completedColor={'#EA508F'}
            incompletedColor={'#C4C4C4'}
          />
        </View>

        <View style={styles.floatingCard}>
          <View style={[styles.floatingCardSection, styles.thinBorderRight]}>
            <DmzText
              text="Weight"
              type={0}
              lite
              style={styles.floatingCardSectionHeading}
            />
            <DmzText
              text="61.00"
              type={4}
              style={styles.floatingCardSectionHeading2}
            />
          </View>
          <View style={styles.floatingCardSection}>
            <DmzText
              text="BMI"
              type={0}
              lite
              style={styles.floatingCardSectionHeading}
            />
            <DmzText
              text="21.38"
              type={4}
              style={styles.floatingCardSectionHeading2}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: '60%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: 'hidden',
          width: '100%',
          backgroundColor: 'rgba(233, 229, 255)',
          paddingTop: 50,
        }}>
        <ScrollView
          style={{flex: 1, backgroundColor: 'transparent'}}
          contentContainerStyle={{}}>
          <ExpandableOption
            key={'Location'}
            active={isLogedin}
            name={`Location | ${location}`}
            icon={'location-on'}
            goto={() => {
              setShowLocation(true);
            }}
            type1={false}
            activeItemKey={activeItemKey}
            navigateTo={'loginScreen'}
          />
          {Navigation.map((row, index) => {
            if (row.isNested) {
              return (
                <ExpandableOption
                  key={index}
                  active={isLogedin}
                  name={row.name}
                  icon={row.icon}
                  type1={row.type1 ? true : false}
                  activeItemKey={activeItemKey}
                  navigateTo={row.navigateTo}
                  isNested={row.isNested}
                  logOut={row.name == 'Account' ? () => _logout() : null}
                  nestedRoutes={row.nestedRoutes}
                  navigation={navigation}
                />
              );
            }
            return (
              <ExpandableOption
                key={index}
                active={isLogedin}
                name={row.name}
                icon={row.icon}
                type1={row.type1 || row.type1 == undefined ? true : false}
                activeItemKey={activeItemKey}
                navigateTo={row.navigateTo}
                navigation={navigation}
                goto={() =>
                  !isLogedin
                    ? navigation.navigate('authentication')
                    : navigation.navigate(row.navigateTo)
                }
              />
            );
          })}
          {/* {isLogedin && (
            <ExpandableOption
              key={'logout'}
              active={isLogedin}
              name={'Logout'}
              icon={'book'}
              goto={() => _logout()}
              activeItemKey={activeItemKey}
              navigateTo={'logout'}
            />
          )} */}
          {!isLogedin && (
            <ExpandableOption
              key={'Sign In'}
              active={!isLogedin}
              name={'Sign In'}
              icon={'door'}
              goto={() =>
                navigation.navigate('loginScreen', {loginAs: 'doctor'})
              }
              activeItemKey={activeItemKey}
              navigateTo={'loginScreen'}
            />
          )}
        </ScrollView>
      </View>
      {showLocation && (
        <PatientLocation
          onPress={setLoc}
          location={location}
          closePanel={closeLocPanel}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: HEADER_TEXT,
    flex: 1,
  },
  section: {
    backgroundColor: '#fafafa',
    marginBottom: 8,
  },
  sectionTop: {marginBottom: 50, position: 'relative'},
  profile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  backButtonContainer: {
    height: 28,
    width: 28,
    marginTop: 10,
    marginLeft: 15,
  },
  touchableButton: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingCard: {
    height: 70,
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    elevation: 4,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    position: 'absolute',
    bottom: -35,
    alignSelf: 'center',
    zIndex: 1,
  },
  floatingCardSection: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  thinBorderRight: {
    borderRightWidth: 0.3,
  },
  floatingCardSectionHeading: {
    textTransform: 'uppercase',
    color: HEADER_TEXT,
    fontSize: 13,
    lineHeight: 20,
  },
  floatingCardSectionHeading2: {
    textTransform: 'uppercase',
    color: HEADER_TEXT,
    fontSize: 24,
    marginTop: 5,
  },

  option: {},
});

export default Custom;
