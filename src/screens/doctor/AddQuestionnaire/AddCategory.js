import React from 'react';
import {View, Text} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import AddCategoryIcon from '../../../assets/svg/add_category.svg';
import {ScrollView} from 'react-native-gesture-handler';
import TextInputIcon from '../../../components/atoms/TextInputCustom/TextInputIcon';
function AddCategory() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
        style={{
          flex: 1,
          backgroundColor: 'red',
          paddingHorizontal: 60,
          paddingTop: 25,
        }}>
        <TextInputIcon placeholder={'Enter'}></TextInputIcon>
      </ScrollView>
    </View>
  );
}

export default AddCategory;
