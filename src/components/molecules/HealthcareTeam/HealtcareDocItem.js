import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {
  INPUT_PLACEHOLDER,
  NEW_PRIMARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
} from '../../../styles/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const HealtcareDocItem = ({data}) => (
  <View
    style={{
      backgroundColor: 'white',
      paddingHorizontal: 20,
      borderRadius: 13,
      marginVertical: 10,
      elevation: 2,
      flexDirection: 'row',
      paddingVertical: 15,
      height: 90,
      alignItems: 'center',
    }}>
    <View style={{justifyContent: 'center'}}>
      <Image
        source={require('../../../assets/jpg/person2.jpg')}
        style={{height: 40, width: 40, borderRadius: 20, marginRight: 15}}
      />
    </View>
    <View style={{flex: 1}}>
      <Text
        style={{
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 17,
          paddingVertical: 2,
          marginRight: 10,
        }}>
        {'Dr. ' + data.name}
      </Text>

      <Text
        style={{
          fontFamily: 'Montserrat-Regular',
          fontSize: 12,
          paddingVertical: 2,
          //   color: NEW_PRIMARY_BACKGROUND,
        }}>
        {data.speciality}
      </Text>

      {data.inviteAccept ? (
        typeof data.referBy === 'string' ? (
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
              fontSize: 10,
              color: INPUT_PLACEHOLDER,
            }}>{`Referred by ${data.referBy}`}</Text>
        ) : null
      ) : (
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            fontSize: 10,
            color: '#ef786e',
          }}>
          Waiting to accept invitation
        </Text>
      )}
    </View>

    {data.inviteAccept && (
      <View style={{justifyContent: 'center'}}>
        <TouchableOpacity>
          <Entypo name="chat" size={20} color={INPUT_PLACEHOLDER} />
        </TouchableOpacity>
      </View>
    )}
  </View>
);

export default HealtcareDocItem;
