import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import {
  SECONDARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
  INPUT_PLACEHOLDER,
  GREY_BACKGROUND,
} from '../../../styles/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FlatList} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('screen');

const dummyClinics = [
  {
    name: 'Medanta Hospital',
    address: 'Sector 38, Plot Number 8, PU4, AB Road, Indore, Maajdxs fsdisadh',
  },
  {
    name: 'Medanta Hospital',
    address: 'Abdul Razak Road, Ormanjhi, National Highway 33 ddaa fsasd fds',
  },
  {
    name: 'Medanta Hospital',
    address: 'Sector 38, Plot Number 8, PU4, AB Road, Indore, Maajdxs fsdisadh',
  },
  {
    name: 'Medanta Hospital',
    address: 'Abdul Razak Road, Ormanjhi, National Highway 33 ddaa fsasd fds',
  },
  {
    name: 'Medanta Hospital',
    address: 'Sector 38, Plot Number 8, PU4, AB Road, Indore, Maajdxs fsdisadh',
  },
  {
    name: 'Medanta Hospital',
    address: 'Abdul Razak Road, Ormanjhi, National Highway 33 ddaa fsasd fds',
  },
  {
    name: 'Medanta Hospital',
    address: 'Sector 38, Plot Number 8, PU4, AB Road, Indore, Maajdxs fsdisadh',
  },
  {
    name: 'Medanta Hospital',
    address: 'Abdul Razak Road, Ormanjhi, National Highway 33 ddaa fsasd fds',
  },
];

const AddVisitingClinic = ({navigation}) => {
  const [clinic, setClinic] = useState('');
  const [fees, setFees] = useState('');
  const animate = new Animated.Value(0);
  const searchRef = useRef(null);
  const [animateValue, setAnimatedValue] = useState(0);

  const animatedStyle = {
    top: animate.interpolate({
      inputRange: [0, 1],
      outputRange: [height - 180, 120],
      useNativeDriver: true,
    }),
  };

  animate.addListener((animate) => {
    setAnimatedValue(animate.value);
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TopNavBar
        hideRightComp
        style={{Container: {marginVertical: 15}}}
        navigation={navigation}
      />
      <View style={styles.body}>
        <Text style={styles.heading}>Add Details</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text}
            value={clinic}
            onChangeText={setClinic}
            placeholder="Search for clinics"
            placeholderTextColor={INPUT_PLACEHOLDER}
            ref={(ref) => (searchRef.current = ref)}
            onFocus={() => {
              animate.setValue(1);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              if (animateValue === 1) {
                animate.setValue(0);
                searchRef.current.blur();
                setClinic('');
              }
            }}>
            <MaterialIcons
              name={animateValue === 0 ? 'search' : 'clear'}
              size={18}
              color={INPUT_PLACEHOLDER}
            />
          </TouchableOpacity>
        </View>

        <Animated.View style={[styles.searchBox, animatedStyle]}>
          <FlatList
            data={dummyClinics.filter(({name}) =>
              name.toLowerCase().includes(clinic.toLowerCase()),
            )}
            style={{flex: 1}}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  setClinic(item.name);
                  animate.setValue(0);
                }}>
                <View style={styles.searchListItem}>
                  <Text style={styles.searchHeading}>{item.name}</Text>
                  <Text style={styles.searchAdd} numberOfLines={1}>
                    {item.address}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </Animated.View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text}
            value={fees}
            onChangeText={setFees}
            placeholder="Fees"
            placeholderTextColor={INPUT_PLACEHOLDER}
            keyboardType="number-pad"
          />
        </View>

        <DmzButton
          onPress={() => {}}
          style={{Text: styles.buttonText, Container: styles.buttonContainer}}
          text="SUBMIT"
        />
      </View>
    </View>
  );
};

export default AddVisitingClinic;

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 35,
    marginTop: 5,
    flex: 1,
  },
  heading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    marginBottom: 25,
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    flex: 1,
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
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 25,
    alignSelf: 'stretch',
    borderBottomWidth: 1.5,
    borderColor: NEW_PRIMARY_BACKGROUND,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    height: height - 300,
    width,
    backgroundColor: GREY_BACKGROUND,
    marginHorizontal: -35,
    position: 'absolute',
    zIndex: 1,
    elevation: 3,
  },
  searchListItem: {
    padding: 10,
    paddingHorizontal: 15,
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 13,
    elevation: 2,
  },
  searchHeading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginBottom: 3,
  },
  searchAdd: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
});
