import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import FancyHeader from '../../../components/organisms/FancyHeader/FancyHeader';
import OverlayGradient from '../../../assets/svg/gradient_curve_lite.svg';
import HeaderCurve_lite from '../../../assets/svg/headerCurve_lite.svg';
import Container from '../../../components/organisms/Container/Container';
import SMbutton from '../../../components/atoms/SMbutton/SMbutton';
import NavBackCustom from '../../../assets/svg/nav_back_custom.svg';
import {PRIMARY_BORDER_COLOR} from '../../../styles/colors';
import {useSelector, useDispatch} from 'react-redux';
import {GetFamilyMember} from '../../../redux/action/patientAccountAction';

const BookingDetails = ({navigation}) => {
  const [details, setDetails] = useState({
    visitFor: ['me', 'child', 'Father', 'Mother'],
    contactNum: '',
    guest: '',
    reasonForVisit: '',
    name: '',
  });
  const [activeId, setActiveId] = useState(0);
  const {familyMember, isPatientAccountReducerLoading} = useSelector(
    state => state.PatientAccountReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFamilyMember('5eb31e07e078c64910b9d29e'));
    // familyMember.length > 0 && familyMember.map( itm => setDetails({ ...details, visitFor: itm.relationship}))
    console.log('**********mmmmmmmmmmmmmmmmmmm***************mmmmmmmmmmm');
    console.log(familyMember);
  }, []);

  setupRelation = id => {
    setActiveId(id);
    setDetails({
      ...details,
      contactNum: familyMember[id].phone || '',
      name: familyMember[id].firstName + ' ' + familyMember[id].lastName || '',
    });
    console.log(details);
  };

  return (
    <View style={styles.Container}>
      <FancyHeader
        showOverlayComponent={false}
        LeftComp={<NavBackCustom />}
        headerText="DocMz"
        overlayComponents={
          <>
            <OverlayGradient style={{position: 'absolute', right: 0}} />
            <HeaderCurve_lite style={{position: 'absolute', right: 0}} />
          </>
        }
        navigation={navigation}
        style={{
          Container: {height: '25%'},
          ChildContainer: {alignItems: 'center'},
        }}
      />
      <Container
        style={{
          height: '76%',
          transform: [{translateY: -50}],
          zIndex: 999,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafafa',
          paddingTop: 20,
        }}>
        <ScrollView
          style={{
            width: '100%',
            marginTop: 20,
            height: '80%',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              marginBottom: 40,
            }}>
            <Text>Who is this visit for ?</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 20,
              }}>
              {isPatientAccountReducerLoading ? (
                <ActivityIndicator />
              ) : (
                familyMember.map((item, index) => (
                  <SMbutton
                    key={index}
                    name={item.relationship}
                    id={index}
                    active={activeId}
                    onClick={id => setupRelation(id)}
                  />
                ))
              )}
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text>Reason for visit?</Text>
            <View style={styles.input}>
              <TextInput style={{fontSize: 12}} placeholder={'ex: Pain'} />
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text>Patient name?</Text>
            <View style={styles.input}>
              <TextInput
                value={details.name}
                style={{fontSize: 12}}
                placeholder={'ex: ajay roy'}
              />
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text>
              Where can this provider call you for follow-up,{'\n'} If needed?
            </Text>
            <View style={styles.input}>
              <TextInput
                value={details.contactNum}
                style={{fontSize: 12}}
                placeholder={'(+91) - 9494551439'}
              />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text>Invite guest(s) to join your visit?</Text>
            <View style={styles.input}>
              <TextInput style={{fontSize: 12}} placeholder={'optional..'} />
            </View>
          </View>
          <SMbutton
            name="NEXT"
            style={{
              height: 40,
              width: '60%',
              alignSelf: 'center',
              marginTop: 20,
            }}
            onClick={() => navigation.navigate('Questionnaire')}
          />
        </ScrollView>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#fff'},
  input: {
    marginVertical: 20,
    backgroundColor: '#fafafa',
    elevation: 2,
    borderRadius: 38,
    height: 38,
    paddingHorizontal: 30,
  },
});

export default BookingDetails;
