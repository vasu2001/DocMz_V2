/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
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

const Navigation = [
  {
    active: true,
    name: 'Appointments',
    icon: 'book',
    navigateTo: 'Appointments',
  },
  {
    active: true,
    name: 'Family Member',
    icon: 'user',
    navigateTo: 'FamilyMember',
  },
  {
    active: true,
    name: 'Nested',
    icon: 'book',
    // navigateTo: 'Appointments',
    isNested: true,
    nestedRoutes: [
      {
        active: true,
        name: 'My Doctors',
        icon: 'account',
        navigateTo: 'MyDoctors',
      },
      {
        active: true,
        name: 'Medical Records',
        icon: 'account-card-details',
        navigateTo: 'MedicalRecords',
      },
      {
        active: true,
        name: 'Payments',
        icon: 'credit-card',
        navigateTo: 'Payments',
      },
    ],
  },
  {
    active: true,
    name: 'Orders',
    icon: 'checkbox-multiple-blank',
    navigateTo: 'Orders',
  },
  // {
  //   active: true,
  //   name: 'Consultations',
  //   icon: 'message',
  //   navigateTo: 'Consultations'
  // },
  {
    active: true,
    name: 'My Doctors',
    icon: 'account',
    navigateTo: 'MyDoctors',
  },
  {
    active: true,
    name: 'Medical Records',
    icon: 'account-card-details',
    navigateTo: 'MedicalRecords',
  },
  {
    active: true,
    name: 'Payments',
    icon: 'credit-card',
    navigateTo: 'Payments',
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
    icon: 'help-rhombus-outlin',
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
  const closeDrawer = () => {
    navigation.closeDrawer();
  };
  const onProfileClick = () => {
    console.log('tapped user rofile');
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <FancyHeaderLite
        showOverlayComponent={false}
        // LeftComp={<NavBackCustom />}
        // headerText="DocMz"
        hideRightComp
        RightComp={null}
        style={{Section: {height: '29%'}}}
        navigation={navigation}>
        <View style={styles.profile}>
          <TouchableOpacity onPress={onProfileClick}>
            <Avater
              type={6}
              // style={{marginLeft: 'auto', marginRight: 'auto'}}
            />
          </TouchableOpacity>
          <DmzText
            text={!data ? 'no name' : data.name}
            type={2}
            bold
            gap_medium
            style={{
              color: '#f1f1f1',
              lineHeight: 18,
              marginTop: 5,
            }}
          />
          <DmzText
            text={!data ? '0000000000' : data.phone}
            center
            gap_big
            lite
            style={{
              color: '#f1f1f1',
              lineHeight: 18,
            }}
          />
        </View>
        <View style={styles.floatingCard}>
          <View style={[styles.floatingCardSection, styles.thinBorderRight]}>
            <View>
              <DmzText
                text="Weight"
                type={0}
                lite
                style={styles.floatingCardSectionHeading}
              />
              <DmzText
                text="61"
                type={4}
                lite
                style={{textTransform: 'uppercase', color: '#555'}}
              />
            </View>
            <TouchableOpacity style={styles.touchableButton}>
              <FontAwesome
                size={28}
                color={Colors.header_grad_two}
                name="angle-right"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.floatingCardSection}>
            <View>
              <DmzText
                text="BMI"
                type={0}
                lite
                style={styles.floatingCardSectionHeading}
              />
              <DmzText
                text="21.38"
                type={4}
                lite
                style={{textTransform: 'uppercase', color: '#555'}}
              />
            </View>
            <TouchableOpacity style={styles.touchableButton}>
              <FontAwesome
                size={28}
                color={Colors.header_grad_two}
                name="angle-right"
              />
            </TouchableOpacity>
          </View>
        </View>
      </FancyHeaderLite>
      <ScrollView style={{flex: 1, marginBottom: 0}}>
        {Navigation.map((row, index) => {
          if (row.isNested) {
            return (
              <ExpandableOption
                key={index}
                active={isLogedin}
                name={row.name}
                icon={row.icon}
                activeItemKey={activeItemKey}
                navigateTo={row.navigateTo}
                isNested={row.isNested}
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
        {isLogedin && (
          <ExpandableOption
            key={'logout'}
            active={isLogedin}
            name={'Logout'}
            icon={'book'}
            goto={() => _logout()}
            activeItemKey={activeItemKey}
            navigateTo={'logout'}
          />
        )}
        {!isLogedin && (
          <ExpandableOption
            key={'Are you doctor ?'}
            active={!isLogedin}
            name={'Are you doctor ?'}
            icon={'doctor'}
            goto={() => navigation.navigate('loginScreen', {loginAs: 'doctor'})}
            activeItemKey={activeItemKey}
            navigateTo={'loginScreen'}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
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
    height: 60,
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    elevation: 4,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    position: 'absolute',
    bottom: -30,
    left: '10%',
  },
  floatingCardSection: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  thinBorderRight: {
    borderRightWidth: 0.3,
  },
  floatingCardSectionHeading: {
    textTransform: 'uppercase',
    color: '#555',
    lineHeight: 10,
  },
  option: {},
});

export default Custom;
