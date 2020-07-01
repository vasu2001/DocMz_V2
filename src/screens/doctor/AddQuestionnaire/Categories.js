import React from 'react';
import {View, Text} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import {FlatList} from 'react-native-gesture-handler';
import Vitals from '../../../assets/svg/vitals.svg';
import DmzButton from '../../../components/atoms/SwitchButton/SwitchButton';
import Icon from 'react-native-vector-icons/FontAwesome';
function AddCategory() {
  const Categories = ['Medications', 'Vitals', 'Surgeries', 'Custom'];
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
          borderBottomLeftRadius: 80,
          borderBottomRightRadius: 80,
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
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#6859A1'}}>
          Categories
        </Text>
      </View>

      <FlatList
        style={{marginTop: '18%', flex: 1}}
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={1}
        snapToAlignment={'center'}
        snapToOffsets={[120]}
        horizontal
        data={Categories}
        keyExtractor={(item) => item}
        renderItem={({item}) => {
          // just for now
          if (item === 'Vitals') {
            return <Vitals height={120} />;
          }
          return (
            <View
              style={{
                backgroundColor: '#E9E5FF',
                height: 120,
                paddingHorizontal: 80,
                borderRadius: 50,
                marginRight: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{item}</Text>
            </View>
          );
        }}
      />
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 80,
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#6859A1'}}>
          VITALS
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: '#6859A1',
            textAlign: 'center',
          }}>
          Each criteria can be edited and modified.
        </Text>
        <DmzButton
          text={'View'}
          style={{
            Container: {
              backgroundColor: '#9C77BC',
              borderRadius: 30,
              width: '70%',
              marginTop: 40,
            },
            Text: {
              color: '#fff',
              fontSize: 18,
            },
          }}></DmzButton>
        <DmzButton
          text={'ADD CATEGORY'}
          iconPosition={'right'}
          icon={<Icon name="plus" size={20} color={'#fff'} />}
          style={{
            Container: {
              backgroundColor: '#AAA4C5',
              borderRadius: 30,
              width: '100%',
              marginTop: 25,
            },
            Text: {
              color: '#fff',
              fontSize: 18,
            },
          }}></DmzButton>
      </View>
    </View>
  );
}

export default AddCategory;
