import React, {useEffect, Children} from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Text,
  Animated,
  Dimensions,
} from 'react-native';
import {NEW_PRIMARY_LIGHT_BG} from '../../../styles/colors';

const SPEED = 1;

const BottomModal = ({visible, onCancel, contentHeight = 0, children}) => {
  const animate = new Animated.Value(-contentHeight);

  useEffect(() => {
    if (visible) {
      Animated.timing(animate, {
        toValue: 0,
        duration: Math.floor(contentHeight / SPEED),
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  const close = () => {
    Animated.timing(animate, {
      toValue: -contentHeight,
      duration: Math.floor(contentHeight / SPEED),
      useNativeDriver: false,
    }).start(() => onCancel());
  };

  return (
    <Modal transparent visible={visible}>
      <TouchableWithoutFeedback onPress={close}>
        <View style={{flex: 1}}>
          <Animated.View
            style={{
              position: 'absolute',
              bottom: animate,
              padding: 30,
              backgroundColor: NEW_PRIMARY_LIGHT_BG,
              width: '100%',
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
              overflow: 'hidden',
            }}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={{alignItems: 'center'}}>{children}</View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BottomModal;
