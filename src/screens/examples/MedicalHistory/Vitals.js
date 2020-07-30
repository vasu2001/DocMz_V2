import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  GREY_BACKGROUND,
  NEW_PRIMARY_BACKGROUND,
  NEW_HEADER_TEXT,
  INPUT_PLACEHOLDER,
  GREY_CARD,
} from '../../../styles/colors';

const PADDING = 10;

const Vitals = ({params}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: PADDING,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={[styles.card, {flex: 1}]}>
          <Text style={styles.cardHeaderText}>Weight</Text>
          <Text style={styles.text1}>69.4 kg</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.text3}>Updated on : 22 May ‘20</Text>
              <Text style={styles.text2}>BMI 26.0</Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icons/back.png')}
                style={{
                  height: 20,
                  width: 20,
                  transform: [{rotateZ: '180deg'}],
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.card, {flex: 1}]}>
          <Text style={styles.cardHeaderText}>Height</Text>
          <Text style={styles.text1}>5 ft, 9 in</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.text2}>(175.26 cm)</Text>
              <Text style={styles.text3}>Recorded on : 22 May ‘20</Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icons/back.png')}
                style={{
                  height: 20,
                  width: 20,
                  transform: [{rotateZ: '180deg'}],
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardHeaderText}>Blood Pressure</Text>

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 3, marginRight: 20}}>
            <View style={{height: 100, backgroundColor: GREY_CARD}} />
            <Text style={styles.text3}>Updated on : 22 May ‘20</Text>
          </View>

          <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={[styles.text1, {padding: 1}]}>110/95</Text>
              <Text style={styles.text2}>Optimal</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: '#efa860',
                    marginRight: 5,
                  }}
                />
                <Text style={[styles.text3, {color: NEW_HEADER_TEXT}]}>
                  SBP
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: '#f8d7b6',
                    marginRight: 5,
                  }}
                />
                <Text style={[styles.text3, {color: NEW_HEADER_TEXT}]}>
                  DBP
                </Text>
              </View>
            </View>

            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/icons/back.png')}
                  style={{
                    height: 20,
                    width: 20,
                    transform: [{rotateZ: '180deg'}],
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardHeaderText}>Heart Rate</Text>

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 3, marginRight: 20}}>
            <View style={{height: 100, backgroundColor: GREY_CARD}} />
            <Text style={styles.text3}>Updated on : 22 May ‘20</Text>
          </View>

          <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={[styles.text1, {padding: 1}]}>65 BPM</Text>
              <Text style={styles.text2}>Normal</Text>
            </View>

            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/icons/back.png')}
                  style={{
                    height: 20,
                    width: 20,
                    transform: [{rotateZ: '180deg'}],
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={[styles.card, {flex: 1}]}>
          <Text style={styles.cardHeaderText}>Temperature</Text>
          <Text style={styles.text1}>101.5 C</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.text3}>Updated on : 22 May ‘20</Text>
              <Text style={styles.text2}>Fever</Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icons/back.png')}
                style={{
                  height: 20,
                  width: 20,
                  transform: [{rotateZ: '180deg'}],
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.card, {flex: 1}]}>
          <Text style={styles.cardHeaderText}>Glucose</Text>
          <Text style={styles.text1}>204 mg/dL</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.text2}>High</Text>
              <Text style={styles.text3}>Recorded on : 22 May ‘20</Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icons/back.png')}
                style={{
                  height: 20,
                  width: 20,
                  transform: [{rotateZ: '180deg'}],
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Vitals;

const styles = StyleSheet.create({
  card: {
    padding: 7,
    margin: PADDING,
    backgroundColor: 'white',
    borderRadius: 13,
    elevation: 2,
    paddingBottom: 10,
  },
  cardHeaderText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 11,
    color: NEW_PRIMARY_BACKGROUND,
    padding: 5,
  },
  text1: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: NEW_HEADER_TEXT,
    padding: 5,
  },
  text2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: NEW_HEADER_TEXT,
    padding: 1,
  },
  text3: {
    fontFamily: 'Montserrat-Regu;ar',
    fontSize: 9,
    color: INPUT_PLACEHOLDER,
    padding: 1,
  },
});
