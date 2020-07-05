import React, {useEffect, useState, useRef} from 'react';
import {View, Text} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import AddCategoryIcon from '../../../assets/svg/add_category.svg';
import {ScrollView} from 'react-native-gesture-handler';
import TextInputIcon from '../../../components/atoms/TextInputCustom/TextInputIcon';
import EditIcon from '../../../assets/svg/edit_vector.svg';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import {Picker} from '@react-native-community/picker';
import AnimInput from '../../../components/molecules/AnimInput/AnimInput';
import {useSelector} from 'react-redux';
import ViewPager from '@react-native-community/viewpager';
function AddCategory({
  isRoot,
  setParentId,
  nextpage,
  handles: {
    handleCategoryInput,
    handleTitleInput,
    handleSpecialityInput,
    // onPressReset,
  },
  optionProp: {options, setOptions, removeOption, addOption},
  onSubmit,
}) {
  const [optionType, setOptionType] = useState('radio');
  const [subQuestionBool, setSubQuestionBool] = useState('no');
  const pagerRef = useRef();
  const {data} = useSelector((state) => state.AuthReducer);
  const {isLoading, questionDetails, questionnaireAdded} = useSelector(
    (state) => state.questionnaireReducer,
  );

  useEffect(() => {
    handleSpecialityInput(data.specialty);
  }, []);
  useEffect(() => {
    console.log(questionDetails);
    console.log(questionnaireAdded);
  }, [questionDetails]);
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingBottom: 10}}>
      <ViewPager
        ref={pagerRef}
        style={{flex: 1}}
        initialPage={0}
        scrollEnabled={false}>
        <View key={'0'}>
          <View
            style={{
              width: '100%',
              height: '40%',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              borderBottomLeftRadius: 180,
              borderBottomRightRadius: 180,
              transform: [
                {
                  scaleX: 1.5,
                },
              ],
              overflow: 'hidden',
            }}>
            <RadialGradient
              style={{width: '100%', height: '100%', zIndex: 0}}
              colors={['#F8F7FF', '#E9E5FF']}
              stops={[0.0, 0.2, 0.75]}
              center={[130, 100]}
              radius={200}></RadialGradient>
          </View>
          <TopNavBar
            onLeftButtonPress={() => {}}
            // onRightButtonPress={() => {}}
            style={{
              Container: {
                height: '5%',
                marginTop: 15,
              },
            }}
          />
          <View
            style={{
              height: '12%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#6859A1'}}>
              Add Category
            </Text>
          </View>
          <AddCategoryIcon style={{marginLeft: 'auto', marginRight: 'auto'}} />
          <ScrollView
            contentContainerStyle={{paddingBottom: 25}}
            style={{
              flex: 1,
              paddingHorizontal: 60,
              paddingVertical: 25,
            }}>
            <TextInputIcon
              inputHandler={handleCategoryInput}
              style={{
                flex: 1,
                borderBottomWidth: 2,
                borderBottomColor: '#AAA4C5',
              }}
              placeholderTextColor={'#AAA4C5'}
              placeholder={'Name of the Category'}>
              <EditIcon />
            </TextInputIcon>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 20,
                marginTop: 20,
              }}>
              <Text style={{color: '#AAA4C5', fontSize: 16}}>
                Question Type
              </Text>
              <View
                style={{
                  width: '40%',
                  backgroundColor: '#AAA4C5',
                  borderRadius: 12,
                  paddingVertical: 10,
                }}>
                <Picker
                  style={{height: 25, width: '100%', color: '#fafafa'}}
                  mode="dropdown"
                  selectedValue={optionType}
                  onValueChange={(itemValue, itemIndex) => {
                    setOptions([]);
                    setOptionType(itemValue);
                  }}>
                  <Picker.Item label="Radio" value="radio" />
                  <Picker.Item label="Text" value="text" />
                </Picker>
              </View>
            </View>
            {optionType === 'radio' &&
              options.map((item) => (
                <Option
                  key={item._id}
                  item={item}
                  options={options}
                  setOptions={setOptions}
                  onPressRemove={removeOption}
                  optionType={optionType}
                />
              ))}
            {optionType === 'radio' && (
              <View style={{marginTop: 20}}>
                <DmzButton
                  onPress={addOption}
                  text="+"
                  style={{
                    Container: {
                      borderRadius: 20,
                      height: 'auto',
                      width: 25,
                      elevation: 0,
                      marginBottom: 10,
                      alignSelf: 'flex-end',
                    },
                    Text: {
                      fontSize: 32,
                      color: '#9C77BC',
                      fontWeight: '500',
                    },
                  }}
                />
              </View>
            )}
            <TextInputIcon
              inputHandler={handleTitleInput}
              style={{
                flex: 1,
                borderBottomWidth: 2,
                borderBottomColor: '#AAA4C5',
              }}
              placeholderTextColor={'#AAA4C5'}
              placeholder={'Type your question'}>
              <EditIcon />
            </TextInputIcon>
            <DmzButton
              isLoading={isLoading}
              onPress={onSubmit}
              text={'Submit'}
              style={{
                Container: {
                  backgroundColor: '#9C77BC',
                  alignSelf: 'center',
                  borderRadius: 30,
                  width: '50%',
                  marginTop: 40,
                },
                Text: {
                  color: '#fff',
                  fontSize: 16,
                },
              }}></DmzButton>
            {questionnaireAdded && (
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 20,
                  marginTop: 20,
                }}>
                <Text style={{color: '#AAA4C5', fontSize: 16}}>
                  Any Sub Questions?
                </Text>
                <View
                  style={{
                    width: '40%',
                    backgroundColor: '#AAA4C5',
                    borderRadius: 12,
                    paddingVertical: 10,
                  }}>
                  <Picker
                    style={{height: 25, width: '100%', color: '#fafafa'}}
                    mode="dropdown"
                    selectedValue={subQuestionBool}
                    onValueChange={(itemValue, itemIndex) => {
                      setSubQuestionBool(itemValue);
                      if (itemValue === 'yes') {
                        nextpage(3);
                      }
                    }}>
                    <Picker.Item label="Yes" value="yes" />
                    <Picker.Item label="No" value="no" />
                  </Picker>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
        <View key={'1'}>
          <View
            style={{
              width: '100%',
              height: '40%',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              borderBottomLeftRadius: 180,
              borderBottomRightRadius: 180,
              transform: [
                {
                  scaleX: 1.5,
                },
              ],
              overflow: 'hidden',
            }}>
            <RadialGradient
              style={{width: '100%', height: '100%', zIndex: 0}}
              colors={['#F8F7FF', '#E9E5FF']}
              stops={[0.0, 0.2, 0.75]}
              center={[130, 100]}
              radius={200}></RadialGradient>
          </View>
          <TopNavBar
            onLeftButtonPress={() => {}}
            // onRightButtonPress={() => {}}
            style={{
              Container: {
                height: '5%',
                marginTop: 15,
              },
            }}
          />
          <View
            style={{
              height: '12%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#6859A1'}}>
              Add Category
            </Text>
          </View>
          <AddCategoryIcon style={{marginLeft: 'auto', marginRight: 'auto'}} />
          <ScrollView
            contentContainerStyle={{paddingBottom: 25}}
            style={{
              flex: 1,
              paddingHorizontal: 60,
              paddingVertical: 25,
            }}>
            <TextInputIcon
              inputHandler={handleCategoryInput}
              style={{
                flex: 1,
                borderBottomWidth: 2,
                borderBottomColor: '#AAA4C5',
              }}
              placeholderTextColor={'#AAA4C5'}
              placeholder={'Name of the Category'}>
              <EditIcon />
            </TextInputIcon>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 20,
                marginTop: 20,
              }}>
              <Text style={{color: '#AAA4C5', fontSize: 16}}>
                Question Type
              </Text>
              <View
                style={{
                  width: '40%',
                  backgroundColor: '#AAA4C5',
                  borderRadius: 12,
                  paddingVertical: 10,
                }}>
                <Picker
                  style={{height: 25, width: '100%', color: '#fafafa'}}
                  mode="dropdown"
                  selectedValue={optionType}
                  onValueChange={(itemValue, itemIndex) => {
                    setOptions([]);
                    setOptionType(itemValue);
                  }}>
                  <Picker.Item label="Radio" value="radio" />
                  <Picker.Item label="Text" value="text" />
                </Picker>
              </View>
            </View>
            {optionType === 'radio' &&
              options.map((item) => (
                <Option
                  key={item._id}
                  item={item}
                  options={options}
                  setOptions={setOptions}
                  onPressRemove={removeOption}
                  optionType={optionType}
                />
              ))}
            {optionType === 'radio' && (
              <View style={{marginTop: 20}}>
                <DmzButton
                  onPress={addOption}
                  text="+"
                  style={{
                    Container: {
                      borderRadius: 20,
                      height: 'auto',
                      width: 25,
                      elevation: 0,
                      marginBottom: 10,
                      alignSelf: 'flex-end',
                    },
                    Text: {
                      fontSize: 32,
                      color: '#9C77BC',
                      fontWeight: '500',
                    },
                  }}
                />
              </View>
            )}
            <TextInputIcon
              inputHandler={handleTitleInput}
              style={{
                flex: 1,
                borderBottomWidth: 2,
                borderBottomColor: '#AAA4C5',
              }}
              placeholderTextColor={'#AAA4C5'}
              placeholder={'Type your question'}>
              <EditIcon />
            </TextInputIcon>
            <DmzButton
              isLoading={isLoading}
              onPress={onSubmit}
              text={'Submit'}
              style={{
                Container: {
                  backgroundColor: '#9C77BC',
                  alignSelf: 'center',
                  borderRadius: 30,
                  width: '50%',
                  marginTop: 40,
                },
                Text: {
                  color: '#fff',
                  fontSize: 16,
                },
              }}></DmzButton>
            {questionnaireAdded && (
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 20,
                  marginTop: 20,
                }}>
                <Text style={{color: '#AAA4C5', fontSize: 16}}>
                  Any Sub Questions?
                </Text>
                <View
                  style={{
                    width: '40%',
                    backgroundColor: '#AAA4C5',
                    borderRadius: 12,
                    paddingVertical: 10,
                  }}>
                  <Picker
                    style={{height: 25, width: '100%', color: '#fafafa'}}
                    mode="dropdown"
                    selectedValue={subQuestionBool}
                    onValueChange={(itemValue, itemIndex) => {
                      setSubQuestionBool(itemValue);
                      if (itemValue === 'yes') {
                        nextpage(3);
                      }
                    }}>
                    <Picker.Item label="Yes" value="yes" />
                    <Picker.Item label="No" value="no" />
                  </Picker>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </ViewPager>
    </View>
  );
}

export default AddCategory;

const Option = ({item, onPressRemove, options, setOptions, optionType}) => {
  const handleInput = (text) => {
    let optionTemp = options.filter((i) => i._id !== item._id);
    optionTemp = [
      ...optionTemp,
      {
        _id: item._id,
        optionType: optionType,
        text: text,
        linkedQuestion: [],
      },
    ];
    setOptions(optionTemp);
  };
  const onPressRemoveButton = () => {
    onPressRemove(item._id);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        overflow: 'hidden',
      }}>
      <TextInputIcon
        hasIcon
        iconName="close"
        iconColor={'#EA508F'}
        iconPos="right"
        textStyle={{width: '80%'}}
        onPress={onPressRemoveButton}
        size={24}
        inputHandler={handleInput}
        value={item.text}
        style={{
          flex: 1,
        }}
        placeholderTextColor={'#9C77BC'}
        placeholder={'Option'}></TextInputIcon>
    </View>
  );
};
