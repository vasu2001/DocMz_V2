/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import ToggleButton from '../../../components/molecules/ToggleButton/ToggleButton';
import SearchBarSolid from '../../../components/molecules/SearchBarSolid/SearchBarSolid';
import Filter from '../../../assets/svg/filter2.svg';
import BasicCard from '../../../components/atoms/BasicCard/BasicCard';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Section from '../../../components/molecules/Section/Section';
import AvailDoctorContainerV2 from '../../../components/molecules/AvailDoctorContainer/AvailDoctorContainerV2';
import RadialGradient from 'react-native-radial-gradient';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import CurrentDoctorContainer from '../../../components/molecules/AvailDoctorContainer/CurrentDoctorContainer';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Animated,
  Easing,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Text,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {
  fetchDoctorLite,
  fetchMoreDoctorLite,
  searchDoctors,
  fetchSuperDoc,
} from '../../../redux/action/doctoreAction';
import {getSpecialty} from '../../../redux/action/doctor/myDoctorAction';
import {
  RowLoader,
  ListingWithThumbnailLoader,
} from '../../../components/atoms/Loader/Loader';
import {GetPatientInfo} from '../../../redux/action/patientAccountAction';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function LandingPageScreen({navigation}) {
  const DocCards = ['Family Physicians', 'Pulmonologist', 'Family Physicians'];
  const AllDocs = ['Dropkin Jared', 'Co Ekaterine', 'Martin Chein'];
  const AvailDocs = ['Martin Chein', 'Co Ekaterine', 'Dropkin Jared'];

  const [searchKey, setSearchKey] = useState('');
  const PopupTranslateY = useRef(new Animated.Value(0)).current;
  const [lclSpecialty, setLclSpecialty] = useState('');
  const dispatch = useDispatch();
  const {
    doctors,
    loading,
    moreDoctorLoading,
    searchDoctorsLoading,
    searchedDoctors,
    superDocsLoading,
    superDocs,
  } = useSelector((state) => state.DoctorReducer);
  const {specialtyLoading, specialty} = useSelector(
    (state) => state.MyDoctorReducer,
  );
  const {isLogedin, isDoctor, data} = useSelector((state) => state.AuthReducer);
  const [activeId, setActiveId] = useState('');
  const [page, setPage] = useState(0);
  const [toggle, setToggle] = useState(0);
  const [disEnd, setDisEnd] = useState(0);
  const [trigger, setTrigger] = useState(true);
  var __id = '';

  if (isDoctor && isLogedin) navigation.navigate('doctorHomePage');

  useEffect(() => {
    dispatch(fetchDoctorLite('', 0, false));
    isLogedin && dispatch(GetPatientInfo(data.id));
    dispatch(getSpecialty());
  }, []);

  const handleSpecialityFetch = (specialty) => {
    dispatch(fetchDoctorLite({specialty: specialty.toLowerCase()}, 0, false));
    setLclSpecialty(specialty.toLowerCase());
  };
  const onPress = (id) => {
    setActiveId(id);
    __id = id;
    Animated.sequence([
      Animated.timing(PopupTranslateY, {
        toValue: showPopup ? 0 : 1,
        easing: Easing.bezier(0.52, 0.5, 0.08, 0.78),
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
    setShowPopup(!showPopup);
  };

  const fetchMore = (e) => {
    setDisEnd(disEnd + e.distanceFromEnd);
    setPage(page + 1);
  };

  const onScroll = () => {
    let val = page + 1;
    dispatch(fetchMoreDoctorLite(page, false));
    setPage(val);
  };
  const fetch = () => {
    let val = page + 1;
    dispatch(fetchMoreDoctorLite({specialty: lclSpecialty}, page, false));
    setPage(val);
  };

  const onEndEditing = ({nativeEvent}) => {
    dispatch(searchDoctors(searchKey, 0));
  };
  const onChangeText = (text) => {
    setSearchKey(text);
  };
  const onToggle = () => {
    setToggle(toggle === 0 ? 1 : 0);
    if (toggle === 0) {
      dispatch(fetchSuperDoc(0));
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <RadialGradient
        style={{width: '100%', height: '45%', zIndex: 0}}
        colors={['#DEF1F9', '#C0E0EC', '#95CCE0']}
        stops={[0.0, 0.2, 0.75]}
        center={[130, 100]}
        radius={200}
      />
      <View
        style={{
          position: 'absolute',
          flex: 1,
          height: '100%',
        }}>
        <TopNavBar
          onLeftButtonPress={() => {}}
          // onRightButtonPress={() => {}}
          navigation={navigation}
          style={{
            Container: {
              height: '6%',
              marginTop: 0,
            },
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 25,
            height: '18%',
            alignItems: 'center',
            width: '100%',
          }}>
          <View>
            <Text
              style={{
                color: '#007E96',
                fontSize: 20,
                lineHeight: 32,
                letterSpacing: 0.8,
              }}>
              Find a
            </Text>
            <Text
              style={{
                color: '#007E96',
                fontSize: 42,
                lineHeight: 48,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Doctor
            </Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <ToggleButton
              toggle={toggle}
              onToggle={onToggle}
              text0="NOW"
              text1="SCHEDULE"
              style={{paddingVertical: 4, width: 150}}
              textStyle={{
                fontSize: 13,
                color: '#007E96',
                fontWeight: 'bold',
                width: '95%',
                textAlign: 'center',
              }}
              btnStyle={{
                width: 80,
              }}
              dotStyle={{backgroundColor: '#FF9B31', height: 25, width: '35%'}}
            />
          </View>
        </View>
        <View
          style={{
            height: '8%',
            paddingHorizontal: 25,
            justifyContent: 'center',
          }}>
          <SearchBarSolid
            withIcon
            placeholderTextColor={'#44A1B4'}
            icon={<Filter height={24} width={24} color={'#000'} />}
            onEndEditing={onEndEditing}
            onChangeText={onChangeText}
          />
        </View>
        <View
          style={{
            height: 'auto',
          }}>
          <ScrollView
            horizontal
            style={{zIndex: 99999}}
            contentContainerStyle={{
              paddingTop: '7%',
              paddingBottom: 12,
              paddingHorizontal: 25,
            }}>
            {specialty.map((u, i) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    handleSpecialityFetch(u);
                  }}>
                  <BasicCard
                    style={{
                      CardContainer: {
                        elevation: 6,
                        justifyContent: 'space-around',
                        paddingHorizontal: 25,
                        height: 120,
                        borderRadius: 30,
                        maxWidth: 200,
                      },
                    }}>
                    <Fontisto name="doctor" size={30} color={'#FF7A59'} />
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#007E96',
                        fontWeight: 'bold',
                      }}>
                      {u.slice(0, 12).concat('...')}
                    </Text>
                  </BasicCard>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 80, y: 0}}
          useAngle
          angle={120}
          colors={[
            'rgba(255, 255, 255, 0.9)',
            'rgba(255, 255, 255, 0.9)',
            'rgba(2, 126, 151, 0)',
            'rgba(2, 126, 151, 0.12)',
          ]}
          style={{flex: 1}}>
          <Section
            style={{
              Container: {marginBottom: 40, marginTop: 20},
              Text: {color: '#007E96', fontWeight: '700'},
            }}
            HeaderText={toggle ? 'Available Doctors' : 'Our Doctors'}>
            {loading || searchDoctorsLoading || superDocsLoading ? (
              <ListingWithThumbnailLoader />
            ) : searchedDoctors.length && searchKey !== '' ? (
              <FlatList
                // extraData={doctors}
                data={searchedDoctors}
                renderItem={({item}) => (
                  <AvailDoctorContainerV2
                    toggle={toggle}
                    data={item}
                    navigation={navigation}
                    onPress={() => onPress(item._id)}
                    id={item._id}
                    name={item.basic.name.slice(0, 15).concat('...')}
                    // schedule={item.output.filter(
                    //   it => it.bookedFor.slice(0, 10) === '2020-05-07',
                    // )}
                  />
                )}
              />
            ) : !toggle ? (
              <FlatList
                initialNumToRender={5}
                onMomentumScrollBegin={() => setTrigger(false)}
                onEndReached={({distanceFromEnd}) => {
                  console.log('end reached');
                  // if (!trigger) {
                  fetch();
                  //   setTrigger(true);
                  // }
                }}
                // onScroll={onScroll}
                ListEmptyComponent={
                  <View
                    style={{
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>Empty</Text>
                  </View>
                }
                onEndReachedThreshold={0.2}
                ListFooterComponent={moreDoctorLoading && <ActivityIndicator />}
                // extraData={doctors}
                data={doctors}
                renderItem={({item}) => (
                  <AvailDoctorContainerV2
                    toggle={toggle}
                    data={item}
                    navigation={navigation}
                    onPress={() => onPress(item._id)}
                    id={item._id}
                    name={item.basic.name.slice(0, 15).concat('...')}
                    // schedule={item.output.filter(
                    //   o => o.bookedFor.slice(0, 10) === '2020-05-07',
                    // )}
                  />
                )}
              />
            ) : (
              <FlatList
                initialNumToRender={5}
                ListEmptyComponent={
                  <View
                    style={{
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>Empty superDocs</Text>
                  </View>
                }
                // ListFooterComponent={moreDoctorLoading && <ActivityIndicator />}
                // extraData={doctors}
                data={superDocs}
                renderItem={({item}) => (
                  <AvailDoctorContainerV2
                    toggle={toggle}
                    data={item}
                    navigation={navigation}
                    onPress={() => onPress(item._id)}
                    id={item._id}
                    name={item.basic.name.slice(0, 15).concat('...')}
                    // schedule={item.output.filter(
                    //   o => o.bookedFor.slice(0, 10) === '2020-05-07',
                    // )}
                  />
                )}
              />
            )}
          </Section>
        </LinearGradient>
      </View>
    </View>
  );
}
