import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';
import Home from '../screens/patient/home/Home';
import Setting from '../screens/patient/settings/Setting';
import Wishlist from '../screens/patient/wishlist/Wishlist';

import Appointments from '../screens/patient/appointments/Appointments';
import Consultations from '../screens/patient/consultations/Consultations';
import MyDoctors from '../screens/patient/mydoctors/MyDoctors';
import MedicalRecords from '../screens/patient/medicalrecords/MedicalRecords';
import Orders from '../screens/patient/orders/Orders';
import Payments from '../screens/patient/payments/Payments';
import AppSettings from '../screens/patient/more/settings/Settings';
import Help from '../screens/patient/more/help/Help';
import NotFound from '../components/organisms/NotFound/NotFound';

import Custom from '../components/organisms/drawer/custom/Custom';
import DocProfileLite from '../screens/patient/docProfileLite/DocProfileLite';
import AppointmentForm from '../screens/patient/appointmentForm/AppointmentForm';
import ConfirmAppointment from '../components/molecules/ConfirmAppointment/ConfirmAppointment';
import BookingDetails from '../screens/patient/questionnaire/BookingDetails';
import FamilyMember from '../screens/patient/familyMember/FamilyMember';
import WaitingRoom from '../screens/patient/waitingRoom/WaitingRoom';
import Profile from '../screens/examples/Profile/Profile';
// const PatientBottomNavigation = createSwitchNavigator(
//   {
//     patientHomeScreen: Home,
//     patientSettingScreen: Setting,
//     widhlistScreen: Wishlist,
//   },
//   {
//     initialRouteName: 'patientHomeScreen',
//     headerMode: 'none',
//   },
// );

// const AppointmentsStack = createStackNavigator(
//   {
//     AppointmentForm,
//     DocProfileLite,
//     ConfirmAppointment
//   },
//   {
//     initialRouteName: 'DocProfileLite',
//     headerMode: 'none',
//   },
// );

// const tabNav = createTabNavigator({
//   about: About,
//   calender: Calender,
//   feedback: Feedback
// }, {
//   navigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, horizontal, tintColor }) => {
//       const { routeName } = navigation.state;
//       let iconName;
//       if (routeName === 'Home') {
//         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//       } else if (routeName === 'Settings') {
//         iconName = `ios-options${focused ? '' : '-outline'}`;
//       }

//       // You can return any component that you like here! We usually use an
//       // icon component from react-native-vector-icons
//       return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
//     },
//   }),
//   tabBarOptions: {
//     activeTintColor: 'tomato',
//     inactiveTintColor: 'gray',
//   },
// })

const screenWidth = Dimensions.get('screen').width;
const PatientNavigation = createDrawerNavigator(
  {
    Home,
    AppointmentsStack: {
      screen: DocProfileLite,
      // screen: BookingDetails,
    },
    ConfirmAppointment,
    AppointmentForm,
    Setting,
    Wishlist,
    Appointments,
    Orders,
    Consultations,
    MyDoctors,
    MedicalRecords,
    Payments,
    Help,
    AppSettings,
    NotFound,
    FamilyMember,
    Profile,
  },
  {
    drawerPosition: 'right',
    headerMode: 'none',
    drawerType: 'none',
    drawerWidth: screenWidth,
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentComponent: (props) => <Custom {...props} />,
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  },
);

export default PatientNavigation;
