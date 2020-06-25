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
  FlatList,
  Dimensions,
  PanResponder,
} from 'react-native';
import {
  fetchDoctorLite,
  fetchMoreDoctorLite,
  searchDoctors,
  fetchSuperDoc,
} from '../../../redux/action/doctoreAction';
import {
  RowLoader,
  ListingWithThumbnailLoader,
} from '../../../components/atoms/Loader/Loader';
import {GetPatientInfo} from '../../../redux/action/patientAccountAction';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';

export default function LandingPageScreen({navigation}) {
  const height = Dimensions.get('window').height;
  const DocCards = ['Family Physicians', 'Pulmonologist', 'Family Physicians'];
  const AllDocs = [
    'Dropkin Jared',
    'Co Ekaterine',
    'Martin Chein',
    'Dropkin Jared',
    'Co Ekaterine',
    'Martin Chein',
    'Dropkin Jared',
    'Co Ekaterine',
    'Martin Chein',
  ];
  const AvailDocs = ['Martin Chein', 'Co Ekaterine', 'Dropkin Jared'];

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  const [searchKey, setSearchKey] = useState('');
  const PopupTranslateY = useRef(new Animated.Value(0)).current;
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
    Animated.timing(headerPos, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);
  const headerPos = useRef(new Animated.Value(0)).current;
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
    dispatch(fetchMoreDoctorLite(page, false));
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

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (e, gestureState) => {
      // console.log(gestureState.dy);
    },
    onPanResponderMove: (e, gestureState) => {
      // console.log(gestureState.dy);
    },
    onPanResponderRelease: (e, gestureState) => {
      console.log(gestureState.moveY);
      // console.log(height);
      console.log(headerPos);
      // if (gestureState.dy > 100) {
      //   Animated.timing(headerPos, {
      //     toValue: height * 0.45,
      //     // useNativeDriver: true,
      //   }).start();
      // } else {
      //   Animated.timing(headerPos, {
      //     toValue: height * 0.25,
      //     // useNativeDriver: true,
      //   }).start();
      // }
    },
  });

  const headerTop = headerPos.interpolate({
    inputRange: [0, 200],
    outputRange: [height * 0.4, height * 0.2],
    extrapolate: 'clamp',
    //  easing: Easing.sin,
  });
  const headerView = headerPos.interpolate({
    inputRange: [0, 200],
    outputRange: [height * 0.25, 0],
    extrapolate: 'clamp',
    easing: Easing.circle,
  });
  const headerViewStyle = headerPos.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
    extrapolate: 'clamp',
    // easing: Easing.sin,
  });
  const headerViewStyle2 = headerPos.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
    //  easing: Easing.linear,
  });

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Animated.View
        style={{
          width: '100%',
          height: headerTop,
        }}>
        <RadialGradient
          style={{width: '100%', height: '100%', zIndex: 0}}
          colors={['#DEF1F9', '#C0E0EC', '#95CCE0']}
          stops={[0.0, 0.2, 0.75]}
          center={[130, 100]}
          radius={200}
        />
      </Animated.View>
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
              height: '5%',
              marginTop: 5,
            },
          }}
        />
        {/* <Animated.View
          style={{
            height: headerViewStyle2,
            opacity: headerViewStyle2,
            // transform: [{scale: headerViewStyle2}],
          }}>
          <Text
            style={{
              color: '#007E96',
              fontSize: 36,
              fontWeight: 'bold',
              letterSpacing: 1,
              width: '100%',
              textAlign: 'center',
            }}>
            Find A Doctor
          </Text>
        </Animated.View> */}

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 25,
            height: '20%',
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
              dotStyle={{
                backgroundColor: '#FF9B31',
                height: 25,
                width: '35%',
              }}
            />
          </View>
        </View>
        <Animated.View
          style={{
            height: headerView,
            justifyContent: 'center',
            opacity: headerViewStyle,
            transform: [{scale: headerViewStyle}],
            // backgroundColor: 'pink',
          }}>
          <View
            style={{
              height: '8%',
              // marginTop: '12%',

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
              marginTop: 10,
            }}>
            <ScrollView
              horizontal
              style={{zIndex: 99999}}
              contentContainerStyle={{
                paddingTop: '7%',
                paddingBottom: 12,
                paddingHorizontal: 25,
              }}>
              {DocCards.map((u, i) => {
                return (
                  <BasicCard
                    style={{
                      CardContainer: {
                        elevation: 6,
                        justifyContent: 'space-around',
                        paddingHorizontal: 25,
                        height: 120,
                        borderRadius: 30,
                      },
                    }}>
                    <Fontisto name="doctor" size={30} color={'#FF7A59'} />
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#007E96',
                        fontWeight: 'bold',
                      }}>
                      {u}
                    </Text>
                  </BasicCard>
                );
              })}
            </ScrollView>
          </View>
        </Animated.View>

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
              Container: {
                marginBottom: 40,
                height: 'auto',
              },
              Text: {color: '#007E96', fontWeight: '700'},
            }}
            HeaderText={toggle ? 'Available Doctors' : 'Our Doctors'}>
            {loading || searchDoctorsLoading || superDocsLoading ? (
              // {false ? (
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
              <AnimatedFlatList
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
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: {
                        contentOffset: {y: headerPos},
                      },
                    },
                  ],
                  // {useNativeDriver: true}, // <-- Add this
                )}
                onResponderRelease={() => {
                  console.log('release');
                }}
                scrollEventThrottle={3}
                ListEmptyComponent={
                  <View>
                    <View
                      style={{
                        height: 300,
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'pink',
                      }}>
                      <Text>Empty</Text>
                    </View>
                    <View
                      style={{
                        height: 300,
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'pink',
                      }}>
                      <Text>Empty</Text>
                    </View>
                    <View
                      style={{
                        height: 300,
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'pink',
                      }}>
                      <Text>Empty</Text>
                    </View>
                    <View
                      style={{
                        height: 300,
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'pink',
                      }}>
                      <Text>Empty</Text>
                    </View>
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
