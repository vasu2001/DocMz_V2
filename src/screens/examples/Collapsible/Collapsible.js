import React, {useRef} from 'react';
import {View, ScrollView, Animated} from 'react-native';
import CollapsibleFancyHeader from '../../../components/organisms/CollapsibleFancyHeader/CollapsibleFancyHeader';
import DmzText from '../../../components/atoms/DmzText/DmzText';

function Collapsible() {
  const translateHeader = useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex: 1}}>
      <CollapsibleFancyHeader translateHeader={translateHeader} />
      <ScrollView
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: translateHeader}}},
        ])}
        scrollEventThrottle={16}>
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="something else" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
        <DmzText text="just testing" type={4} normal />
      </ScrollView>
    </View>
  );
}

export default Collapsible;
