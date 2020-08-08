import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import {
  GREY_OUTLINE,
  GREY_BACKGROUND,
  GREY_CARD,
  NEW_PRIMARY_LIGHT_BG,
  SECONDARY_BACKGROUND,
  SECONDARY_COLOR,
  NEW_PRIMARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
} from '../../../styles/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PADDING = 10;

const NewDoctorDashboard = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TopNavBar
        navigation={navigation}
        headerText="My Dashboard"
        style={{Container: styles.header}}
      />
      <ScrollView style={{flex: 1}} contentContainerStyle={{padding: PADDING}}>
        <View style={{flexDirection: 'row', height: 150}}>
          <View style={[styles.card, {backgroundColor: GREY_CARD, flex: 7}]}>
            <HeadingRow
              title="Waiting Room"
              accentColor={SECONDARY_COLOR}
              icon={<FontAwesome5 name="plus" size={20} color="white" />}
            />
          </View>
          <View
            style={[
              styles.card,
              {backgroundColor: NEW_PRIMARY_LIGHT_BG, flex: 5},
            ]}>
            <HeadingRow
              title="Revenue"
              accentColor={NEW_PRIMARY_BACKGROUND}
              icon={<FontAwesome5 name="dollar-sign" size={19} color="white" />}
            />
          </View>
        </View>

        <View
          style={[
            styles.card,
            {backgroundColor: SECONDARY_BACKGROUND, flex: 2, height: 250},
          ]}>
          <HeadingRow
            title="Upcoming Appointments"
            accentColor={SECONDARY_COLOR}
            icon={<MaterialIcons name="access-time" size={25} color="white" />}
          />
        </View>

        <View
          style={[
            styles.card,
            {backgroundColor: NEW_PRIMARY_LIGHT_BG, flex: 2, height: 250},
          ]}>
          <HeadingRow
            title="Recent Patients"
            accentColor={NEW_PRIMARY_BACKGROUND}
            icon={<FontAwesome5 name="file-medical" size={20} color="white" />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const HeadingRow = ({title, accentColor, icon}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: 5,
    }}>
    <View
      style={{
        backgroundColor: accentColor,
        borderRadius: 17,
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {icon}
    </View>
    <Text
      numberOfLines={1}
      style={{
        fontSize: 14,
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: 'Montserrat-Medium',
      }}>
      {title}
    </Text>
  </View>
);

export default NewDoctorDashboard;

const styles = StyleSheet.create({
  header: {
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: GREY_OUTLINE,
  },
  card: {
    borderRadius: 12,
    margin: PADDING,
    // elevation: 2,
    padding: 7,
  },
});
