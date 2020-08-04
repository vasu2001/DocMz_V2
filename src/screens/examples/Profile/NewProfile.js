import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import {NEW_PRIMARY_COLOR, GREY_OUTLINE} from '../../../styles/colors';
import {useSelector} from 'react-redux';
import {Host} from '../../../utils/connection';
import ProfilePicModal from '../../../components/molecules/Modal/ProfilePicModal';
import UpdateProfileModal from '../../../components/molecules/Modal/UpdateProfileModal';

const NewProfile = ({navigation}) => {
  const {data} = useSelector((state) => state.AuthReducer);
  const [photoModal, setPhotoModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  return (
    <>
      <ProfilePicModal
        visible={photoModal}
        onCancel={() => setPhotoModal(false)}
        uploadPhoto={(temp) => {}}
        removePhoto={(temp) => {}}
      />
      <UpdateProfileModal
        visible={profileModal}
        onCancel={() => setProfileModal(false)}
      />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TopNavBar
          headerText="My Profile"
          {...{navigation}}
          style={{Container: {marginTop: 5, marginBottom: 10}}}
        />

        <ScrollView style={{flex: 1}}>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 15,
              alignSelf: 'center',
            }}>
            <TouchableOpacity onPress={() => setPhotoModal(true)}>
              <Image
                source={
                  data?.picture && data?.picture[0]
                    ? {uri: Host + data.picture[0].replace('public', '')}
                    : require('../../../assets/jpg/person3.jpg')
                }
                style={{height: 120, width: 120, borderRadius: 60, margin: 15}}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => setProfileModal(true)}>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 20,
                }}>
                {(data.firstName ?? '') + ' ' + (data.lastName ?? '')}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  width: 170,
                  alignItems: 'center',
                  paddingVertical: 5,
                }}>
                <View
                  style={{
                    padding: 1,
                    alignItems: 'center',
                    borderColor: NEW_PRIMARY_COLOR,
                    borderRightWidth: 1.5,
                    flex: 1,
                  }}>
                  <Text style={styles.smallText}>27 yrs</Text>
                </View>

                <View
                  style={{
                    padding: 1,
                    alignItems: 'center',
                    borderColor: NEW_PRIMARY_COLOR,
                    borderLeftWidth: 1.5,
                    flex: 1,
                  }}>
                  <Text style={styles.smallText}>Male</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginHorizontal: 30, marginVertical: 15}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MedicalHistory', {})}>
              <View style={styles.listRow}>
                <Image
                  source={require('../../../assets/icons/profile/history.png')}
                  style={{height: 25, width: 50, marginHorizontal: 10}}
                  resizeMode="contain"
                />
                <Text style={[styles.smallText, {flex: 1}]}>
                  Medical History
                </Text>
                <Image
                  source={require('../../../assets/icons/back.png')}
                  style={styles.rowRightIcon}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('FamilyMember', {})}>
              <View style={styles.listRow}>
                <Image
                  source={require('../../../assets/icons/profile/family.png')}
                  style={{height: 25, width: 50, marginHorizontal: 10}}
                  resizeMode="contain"
                />
                <Text style={[styles.smallText, {flex: 1}]}>My Family</Text>
                <Image
                  source={require('../../../assets/icons/back.png')}
                  style={styles.rowRightIcon}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('HealthcareTeam', {})}>
              <View style={styles.listRow}>
                <Image
                  source={require('../../../assets/icons/profile/healthcare.png')}
                  style={{height: 25, width: 50, marginHorizontal: 10}}
                  resizeMode="contain"
                />
                <Text style={[styles.smallText, {flex: 1}]}>
                  My Healthcare Team
                </Text>
                <Image
                  source={require('../../../assets/icons/back.png')}
                  style={styles.rowRightIcon}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.listRow}>
                <Image
                  source={require('../../../assets/icons/profile/referals.png')}
                  style={{height: 30, width: 50, marginHorizontal: 10}}
                  resizeMode="contain"
                />
                <Text style={[styles.smallText, {flex: 1}]}>Referrals</Text>
                <Image
                  source={require('../../../assets/icons/back.png')}
                  style={styles.rowRightIcon}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.listRow}>
                <Image
                  source={require('../../../assets/icons/profile/coupons.png')}
                  style={{height: 20, width: 50, marginHorizontal: 10}}
                  resizeMode="contain"
                />
                <Text style={[styles.smallText, {flex: 1}]}>My Coupons</Text>
                <Image
                  source={require('../../../assets/icons/back.png')}
                  style={styles.rowRightIcon}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginVertical: 20,
            }}>
            <Text style={[styles.smallText, {marginRight: 10}]}>Link with</Text>

            <Image
              source={require('../../../assets/icons/profile/google.png')}
              style={{height: 25, width: 25, marginHorizontal: 10}}
              resizeMode="contain"
            />

            <Image
              source={require('../../../assets/icons/profile/facebook.png')}
              style={{height: 25, width: 25, marginHorizontal: 10}}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default NewProfile;

const styles = StyleSheet.create({
  smallText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  listRow: {
    flexDirection: 'row',
    // paddingVertical: 15,
    borderColor: GREY_OUTLINE,
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 60,
  },
  rowRightIcon: {
    height: 15,
    width: 20,
    transform: [{rotateZ: '180deg'}],
  },
});
