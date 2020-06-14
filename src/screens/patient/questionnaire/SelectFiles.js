import React from 'react';
import {View, StyleSheet, PermissionsAndroid} from 'react-native';
import FancyHeader from '../../../components/organisms/FancyHeader/FancyHeader';
import Container from '../../../components/organisms/Container/Container';
import NavBackCustom from '../../../assets/svg/nav_back_custom.svg';
import OverlayGradient from '../../../assets/svg/gradient_curve_lite.svg';
import HeaderCurve_lite from '../../../assets/svg/headerCurve_lite.svg';
import Folder from '../../../assets/svg/folder.svg';
import FolderFile from '../../../assets/svg/folderfile.svg';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

function SelectFiles() {
  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const onPress = async () => {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.log(granted);
    if (granted) {
      ImagePicker.showImagePicker(options, response => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = {uri: response.uri};
          console.log(source);
        }
      });
    } else {
      askPermission();
    }
  };
  const askPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'DocMz needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // ImagePicker();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  // const ImagePicker = () => {};
  return (
    <View style={styles.Container}>
      <FancyHeader
        showOverlayComponent={false}
        LeftComp={<NavBackCustom />}
        headerText="DocMz"
        overlayComponents={
          <>
            <OverlayGradient style={{position: 'absolute', right: 0}} />
            <HeaderCurve_lite style={{position: 'absolute', right: 0}} />
          </>
        }
        style={{
          Container: {height: '25%'},
          ChildContainer: {alignItems: 'center'},
        }}
      />
      <Container style={styles.ContentContainer}>
        <View style={{height: '100%', width: '100%'}}>
          <View style={styles.folderShow}>
            <FolderFile />
            <Folder />
          </View>
          <View style={styles.ImagePickerContainer}>
            <TouchableOpacity
              style={styles.PickImageTouchable}
              onPress={onPress}>
              <SimpleIcon name="picture" />
              <DmzText
                type={2}
                text="Select the documents from the gallery"
                lite
                style={{color: 'grey'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#fff'},
  ContentContainer: {
    height: '80%',
    transform: [{translateY: -50}],
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    padding: 15,
  },
  folderShow: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImagePickerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PickImageTouchable: {
    height: '90%',
    width: '80%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default SelectFiles;
