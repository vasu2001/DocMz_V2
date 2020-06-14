



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import FancyHeader from '../../../components/organisms/FancyHeader/FancyHeader';
import Container from '../../../components/organisms/Container/Container';
import SMbutton from '../../../components/atoms/SMbutton/SMbutton';
import OverlayGradient from '../../../assets/svg/gradient_curve_lite.svg';
import HeaderCurve_lite from '../../../assets/svg/headerCurve_lite.svg';
import NavBackCustom from '../../../assets/svg/nav_back_custom.svg';
import { PRIMARY_BORDER_COLOR } from '../../../styles/colors'
import { useSelector, useDispatch } from 'react-redux';
import { GetFamilyMember } from '../../../redux/action/patientAccountAction';
import { StackActions, NavigationActions } from 'react-navigation'


const WaitingRoom = ({ navigation }) => {
      const dispatch = useDispatch()

      // useEffect(() => {
      //       dispatch(GetFamilyMember('5eb31e07e078c64910b9d29e'))
      //       // familyMember.length > 0 && familyMember.map( itm => setDetails({ ...details, visitFor: itm.relationship}))
      //       console.log(familyMember)
      // }, [])

      const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'pageNavigation' })],
      });

      return (
            <View style={styles.Container}>
                  <FancyHeader
                        navigation={navigation}
                        showOverlayComponent={false}
                        LeftComp={<NavBackCustom />}
                        headerText="DocMz"
                        overlayComponents={
                              <>
                                    <OverlayGradient style={{ position: 'absolute', right: 0 }} />
                                    <HeaderCurve_lite style={{ position: 'absolute', right: 0 }} />
                              </>
                        }
                        navigation={navigation}
                        style={{
                              Container: { height: '25%' },
                              ChildContainer: { alignItems: 'center' },
                        }}
                  />
                  <Container
                        style={{
                              height: '82%',
                              transform: [{ translateY: -50 }],
                              zIndex: 999,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#fafafa',

                        }}>
                        <ScrollView style={{ width: '90%', paddingTop: 40 }}>
                              <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 30 }}>
                                    <Image source={require('../../../assets/png/Frame.png')} style={{ height: 300, width: 200 }} />
                                    <Text>First available medical doctor</Text>
                                    <Text>Estimated waiting time: 22 minutes</Text>
                              </View>
                              <SMbutton
                                    name="GO TO HOME"
                                    active={0}
                                    style={{
                                          height: 40,
                                          width: '60%',
                                          alignSelf: 'center',
                                          marginTop: 20,
                                    }}
                                    onClick={() => navigation.dispatch(resetAction)}
                              />
                        </ScrollView>
                  </Container>
            </View>
      );
};

const styles = StyleSheet.create({
      Container: { flex: 1, backgroundColor: '#fff' },
      input: {
            marginVertical: 20,
            backgroundColor: '#fafafa',
            elevation: 2,
            borderRadius: 38,
            height: 38,
            paddingHorizontal: 30,
      },
});

export default WaitingRoom;
