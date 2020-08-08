import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import {SECONDARY_COLOR} from '../../../styles/colors';

const AddClinic = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TopNavBar
        hideRightComp
        style={{Container: {marginVertical: 15}}}
        navigation={navigation}
      />
      <View style={styles.body}>
        <Text style={styles.heading}>Add Clinic</Text>
        <Text style={styles.text}>
          Clinic Owners will have to provide proof of ownership.
        </Text>
        <DmzButton
          onPress={() => {}}
          style={{Text: styles.buttonText, Container: styles.buttonContainer}}
          text="ADD OWNED CLINIC"
        />

        <Text style={styles.text}>
          Visiting consultants will not be able to edit information for their
          clinics.
        </Text>
        <DmzButton
          onPress={() => {}}
          style={{Text: styles.buttonText, Container: styles.buttonContainer}}
          text="ADD VISITING CLINIC"
        />
      </View>
    </View>
  );
};

export default AddClinic;

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 35,
    marginTop: 5,
  },
  heading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    marginBottom: 25,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 25,
  },

  buttonText: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  buttonContainer: {
    width: 250,
    height: 46,
    borderRadius: 23,
    backgroundColor: SECONDARY_COLOR,
    alignSelf: 'center',
    elevation: 2,
    marginBottom: 40,
  },
});
