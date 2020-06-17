import React, {createRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ViewPager from '@react-native-community/viewpager';
import SignupSplash from './SignupSplash';
import SignUpStep1Screen from './SignUpStep1Screen';
import SignUpStep2Screen from './SignUpStep2Screen';
import SignUpStep3Screen from './SignUpStep3Screen';
// import Svg from 'react-native-svg';

function DmzSignupV2() {
  const pagerRef = createRef();
  const nextpage = (page) => {
    pagerRef.current.setPage(page);
  };
  const [credential, setCredential] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    registration_number: '',
    specialty: '',
    phone: '',
    city: '',
    country: '',
  });
  const handleSubmit = () => {
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    console.log(credential);
  };
  return (
    <ViewPager
      ref={pagerRef}
      style={styles.viewPager}
      initialPage={0}
      scrollEnabled={false}>
      <View key="0">
        <SignupSplash />
      </View>
      <View key="1">
        <SignUpStep1Screen
          credential={credential}
          setCredential={setCredential}
          onPress={() => nextpage(1)}
        />
      </View>
      <View key="2">
        <SignUpStep2Screen
          credential={credential}
          setCredential={setCredential}
          onPress={() => nextpage(2)}
        />
      </View>
      <View key="3">
        <SignUpStep3Screen
          credential={credential}
          setCredential={setCredential}
          onPress={handleSubmit}
        />
      </View>
    </ViewPager>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});

export default DmzSignupV2;
