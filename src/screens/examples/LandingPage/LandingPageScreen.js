/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ToggleButton from '../../../components/molecules/ToggleButton/ToggleButton';
import SearchBarSolid from '../../../components/molecules/SearchBarSolid/SearchBarSolid';
import Filter from '../../../assets/svg/filter2.svg';
import BasicCard from '../../../components/atoms/BasicCard/BasicCard';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Section from '../../../components/molecules/Section/Section';
import AvailDoctorContainerV2 from '../../../components/molecules/AvailDoctorContainer/AvailDoctorContainerV2';
import RadialGradient from 'react-native-radial-gradient';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import AvailDoctorContainer from '../../../components/molecules/AvailDoctorContainer/AvailDoctorContainer';
import CurrentDoctorContainer from '../../../components/molecules/AvailDoctorContainer/CurrentDoctorContainer';

export default function LandingPageScreen(props) {
  const DocCards = ['Family Physicians', 'Pulmonologist', 'Family Physicians'];
  const AllDocs = ['Dropkin Jared', 'Co Ekaterine', 'Martin Chein'];
  const AvailDocs = ['Martin Chein', 'Co Ekaterine', 'Dropkin Jared'];

  const [toggle, setToggle] = useState(false);
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
          style={{
            Container: {
              height: 50,
              marginTop: 0,
            },
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 25,
            marginBottom: 5,
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
              text0="NOW"
              text1="SCHEDULE"
              toggle={toggle}
              style={{paddingVertical: 4, width: 150}}
              onToggle={() => setToggle(!toggle)}
              textStyle={{
                fontSize: 13,
                color: '#007E96',
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
              }}
              btnStyle={{
                width: 80,
              }}
              dotStyle={{backgroundColor: '#FF9B31', height: 25, width: '40%'}}
            />
          </View>
        </View>
        <View
          style={{
            height: 'auto',
            paddingHorizontal: 25,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <SearchBarSolid
            withIcon
            placeholderTextColor={'#44A1B4'}
            icon={<Filter height={24} width={24} color={'#000'} />}
          />
        </View>
        <View
          style={{
            marginTop: 25,
            height: 'auto',
          }}>
          <ScrollView
            horizontal
            style={{zIndex: 99999}}
            contentContainerStyle={{paddingVertical: 8, paddingHorizontal: 25}}>
            {DocCards.map((u, i) => {
              return (
                <BasicCard
                  style={{
                    CardContainer: {
                      elevation: 10,
                      justifyContent: 'space-around',
                      paddingHorizontal: 25,
                      height: 120,
                    },
                  }}>
                  <Fontisto name="doctor" size={28} color={'#FF9B31'} />
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#3873CD',
                      fontWeight: 'bold',
                    }}>
                    {u}
                  </Text>
                </BasicCard>
              );
            })}
          </ScrollView>
        </View>
        <Section
          style={{
            Container: {marginTop: 20, flex: 1},
            Text: {
              letterSpacing: 0.5,
              fontSize: 18,
              color: '#007E96',
              textTransform: 'uppercase',
            },
          }}
          HeaderText={toggle ? 'AVAILABLE  DOCTORS' : 'OUR DOCTORS'}>
          <ScrollView
            style={{
              height: '100%',
            }}>
            {toggle
              ? AllDocs.map((u, i) => <CurrentDoctorContainer name={u} />)
              : AvailDocs.map((u, i) => <AvailDoctorContainerV2 name={u} />)}
          </ScrollView>
        </Section>
      </View>
    </View>
  );
}
