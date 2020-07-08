import React, {useRef} from 'react';
import {
  Animated,
  Text,
  Dimensions,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
function Patients({navigation}) {
  const {height, width} = Dimensions.get('window');
  const patients = [
    {
      name: 'Oliver Queen',
      lastVisit: '10.4.2020',
    },
    {
      name: 'Berry Alen',
      lastVisit: '10.5.2020',
    },
    {
      name: 'Vibe',
      lastVisit: '10.4.2020',
    },
    {
      name: 'Dibni',
      lastVisit: '10.5.2020',
    },
  ];
  /**handling animation gesture */

  const panning = useRef(new Animated.Value(height * 0.3)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        panning.setOffset(panning.__getValue());
      },
      onPanResponderMove: (evt, gestureState) => {
        const scroll = panning.__getValue();
        if (scroll > 10 || gestureState.dy > 0)
          panning.setValue(gestureState.dy);
        if (scroll < 0) panning.setOffset(0);
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (!(panning.__getValue() > height * 0.6))
          panning.setOffset(panning.__getValue());
        panning.setValue(0);
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        return true;
      },
    }),
  ).current;

  return (
    <RadialGradient
      style={{width: '100%', height: '100%', zIndex: 0}}
      colors={['#F8F7FF', '#E9E5FF']}
      stops={[0.0, 0.2, 0.75]}
      center={[130, 100]}
      radius={200}>
      <TopNavBar
        // onRightButtonPress={() => {}}
        navigation={navigation}
        style={{
          Container: {
            height: '5%',
            marginTop: 10,
          },
        }}></TopNavBar>
      <Text
        style={{
          fontSize: 32,
          textAlign: 'center',
          color: '#6859A2',
          fontWeight: 'bold',
        }}>
        Patients
      </Text>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFill,
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 35,
          paddingVertical: 10,
          width: '100%',
          height: 'auto',
          transform: [{translateY: panning}],
          zIndex: 10,
          elevation: 2,
        }}>
        <View
          {...panResponder.panHandlers}
          style={{height: 40, width: '100%'}}></View>
        <ScrollView>
          {patients.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PatientDetails');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 40,
                    borderBottomWidth: 1,
                    borderBottomColor: '#AAA4C5',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#9C77BC',
                      }}>
                      1
                    </Text>
                  </View>
                  <View style={{flex: 4, paddingHorizontal: 10}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#6859A2',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#AAA4C5',
                        marginTop: 5,
                      }}>
                      Last Visit: {item.lastVisit}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                    }}>
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={25}
                      color={'#9C77BC'}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Animated.View>
    </RadialGradient>
  );
}
export default Patients;
