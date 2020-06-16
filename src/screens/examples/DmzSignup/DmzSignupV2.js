import React, {createRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ViewPager from '@react-native-community/viewpager';
import SignUpStep1Screen from './SignUpStep1Screen';
import SignUpStep2Screen from './SignUpStep2Screen';
import SignUpStep3Screen from './SignUpStep3Screen';
// import Svg from 'react-native-svg';

function DmzSignupV2() {
  const pagerRef = createRef();
  const nextpage = (page) => {
    pagerRef.current.setPage(page);
  };
  return (
    <ViewPager
      ref={pagerRef}
      style={styles.viewPager}
      initialPage={0}
      scrollEnabled={false}>
      <View key="1">
        <SignUpStep1Screen onPress={() => nextpage(1)} />
      </View>
      <View key="2">
        <SignUpStep2Screen onPress={() => nextpage(2)} />
      </View>
      <View key="2">
        <SignUpStep3Screen />
      </View>
    </ViewPager>
  );
}

export default DmzSignupV2;

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
