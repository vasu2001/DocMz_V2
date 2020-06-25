/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RatingStars from '../../atoms/ratingStars/RatingStarts';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  HEADER_TEXT,
  TERTIARY_TEXT_TWO,
  TERTIARY_TEXT,
  PRIMARY_COLOR,
} from '../../../styles/colors';
function AvailDoctorContentV2({
  Profile,
  DoctorName,
  rating,
  Specialization,
  onPress,
  schedule,
  navigation,
  data,
  toggle,
}) {
  return (
    <>
      <View
        style={{
          alignItems: 'flex-end',
          alignSelf: 'stretch',
        }}>
        <RatingStars
          size={14}
          filled
          activeColor={'#AAA4C5'}
          passiveColor={'rgba(0, 0, 0, 0.15)'}
          rating={rating}
        />
      </View>
      <TouchableOpacity
        style={CardContentStyles.AvailableDoctorsCardContent}
        onPress={() => {}}>
        {Profile}
        <View style={CardContentStyles.AvailableDoctorsDetails}>
          <Text style={CardContentStyles.AvailableDoctorsName}>
            {DoctorName}
          </Text>
          <Text style={CardContentStyles.AvailableDoctorsSpecialization}>
            {Specialization}
          </Text>
          {/* can be made as molecule and touchable if needed */}
          <View style={CardContentStyles.AvailableDoctorsAvailableTimes}>
            {schedule &&
              schedule
                .filter(
                  (item) =>
                    item.bookedFor.slice(11, 16) >
                    new Date().toISOString().slice(11, 16),
                )
                .slice(0, 4)
                .map((item) => {
                  console.log(item);
                  return (
                    <Text
                      style={[
                        CardContentStyles.AvailableDoctorsAvailableTime,
                        item.booked &&
                          CardContentStyles.AvailableDoctorsAvailableTimeActive,
                      ]}>
                      {item.bookedFor.slice(11, 16)}
                    </Text>
                  );
                })}
          </View>
        </View>
      </TouchableOpacity>
      <View style={CardContentStyles.AvailableDoctorsContinueButton}>
        <TouchableOpacity onPress={onPress} style={{zIndex: 2000}}>
          <FontAwesomeIcon name="angle-right" size={22} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </>
  );
}
const CardContentStyles = StyleSheet.create({
  AvailableDoctorsCardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  AvailableDoctorsDetails: {
    marginLeft: 15,
    alignSelf: 'stretch',
  },
  AvailableDoctorsName: {
    fontSize: 20,
    fontWeight: '700',
    color: HEADER_TEXT,
    textTransform: 'capitalize',
  },

  AvailableDoctorsSpecialization: {
    color: TERTIARY_TEXT,
    fontSize: 13,
    lineHeight: 18,
    textTransform: 'capitalize',
  },
  AvailableDoctorsAvailableTimes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  AvailableDoctorsAvailableTime: {
    paddingHorizontal: 4,
    borderRadius: 8,
    color: TERTIARY_TEXT_TWO,
    marginRight: 10,
  },
  AvailableDoctorsAvailableTimeActive: {
    backgroundColor: PRIMARY_COLOR,
    color: '#fafafa',
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  AvailableDoctorsContinueButton: {
    backgroundColor: '#E7E3FE',
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 5,
    paddingHorizontal: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 1000,
  },
});

export default AvailDoctorContentV2;
