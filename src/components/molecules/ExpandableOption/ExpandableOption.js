import React, {useRef, useState} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Text,
  Easing,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DmzText from '../../atoms/DmzText/DmzText';
import {
  BIG_ICON_SIZE,
  LITE_ICON_SIZE,
  SMALL_ICON_SIZE,
  MEDIUM_ICON_SIZE,
} from '../../../styles/size';
import {MAIN_ICON, SECONDARY_ICON} from '../../../styles/colors';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {Colors} from '../../../styles/index';

/**
 *
 * @param {icon name from 'MaterialCommunityIcons'} param0
 * * @param {name of the option} param1
 * * * @param { click event handle method } param2
 * * * * @param { font size of the option text } param3
 * * * * * @param { active option = true } param4
 */

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const ExpandableOption = props => {
  const [showContent, setShowContent] = useState(false);
  const onClick = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowContent(!showContent);
  };
  const {
    icon = 'book',
    name = 'no option',
    goto = () => {
      console.log('no callback!!');
    },
    fontSize = 3,
    active = false,
    navigateTo,
    activeItemKey,
    isNested,
    nestedRoutes,
    navigation,
  } = props;

  console.log('.....................');
  // console.log(props);
  return (
    <View style={styles.Wrapper}>
      <TouchableOpacity
        style={[
          styles.flex,
          styles.container,
          styles.AlignCenter,
          !active ? {opacity: 0.5} : {opacity: 1},
        ]}
        onPress={isNested ? onClick : goto}
        disabled={!active}>
        <DmzText
          text={name}
          type={fontSize}
          normal
          gap_small
          style={{
            color: showContent && isNested ? Colors.header_grad_two : '#222',
          }}
        />
        <MaterialIcon
          name={icon}
          size={MEDIUM_ICON_SIZE}
          style={styles.icon}
          color={
            showContent && isNested ? Colors.header_grad_two : SECONDARY_ICON
          }
        />
      </TouchableOpacity>
      {showContent && (
        <View style={styles.nestedContainer}>
          {nestedRoutes &&
            nestedRoutes.map((row, index) => {
              return (
                <TouchableOpacity
                  key={`${row.navigateTo}${index}`}
                  onPress={() => navigation.navigate(row.navigateTo)}
                  style={styles.nestedOption}>
                  <Text style={{color: '#555'}}>{row.name}</Text>
                  <MaterialIcon name="chevron-right" size={20} />
                </TouchableOpacity>
              );
            })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  AlignCenter: {alignItems: 'center'},
  Wrapper: {backgroundColor: '#fafafa', overflow: 'hidden'},
  container: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nestedContainer: {
    width: '80%',
    marginLeft: 50,
  },
  nestedOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.19,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#ccc',
  },
  icon: {
    marginRight: 5,
  },
});

export default ExpandableOption;
