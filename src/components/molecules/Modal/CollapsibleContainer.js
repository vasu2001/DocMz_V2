import React, {useEffect, useRef} from 'react';
import {Text, View, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {INPUT_PLACEHOLDER} from '../../../styles/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CollapsibleContainer = ({children, height = 100}) => {
  const animatedHeight = new Animated.Value(0);
  const scalarvalue = useRef(0);

  animatedHeight.addListener((height) => (scalarvalue.current = height.value));

  useEffect(() => {
    if (scalarvalue.current === 0) return;
    Animated.timing(animatedHeight, {
      toValue: height,
      duration: 20,
      useNativeDriver: false,
    }).start();
  }, [height]);

  const toggle = () => {
    Animated.timing(animatedHeight, {
      toValue: scalarvalue.current == 0 ? height : 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <TouchableOpacity onPress={toggle}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 14,
              color: INPUT_PLACEHOLDER,
              marginRight: 3,
            }}>
            Add Details
          </Text>

          <Animated.View
            style={{
              transform: [
                {
                  rotateZ: animatedHeight.interpolate({
                    inputRange: [0, height],
                    outputRange: ['0 deg', '180 deg'],
                  }),
                },
              ],
            }}>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={20}
              color={INPUT_PLACEHOLDER}
            />
          </Animated.View>
        </View>
      </TouchableOpacity>
      <Animated.View
        style={{
          alignSelf: 'stretch',
          alignItems: 'center',
          height: animatedHeight,
          overflow: 'hidden',
        }}>
        {children}
      </Animated.View>
    </>
  );
};

export default CollapsibleContainer;
