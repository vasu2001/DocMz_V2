import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import FancyHeader from '../../../components/organisms/FancyHeader/FancyHeader';
import Container from '../../../components/organisms/Container/Container';
import DmzSeachbar from '../../../components/molecules/DmzSeachbar/DmzSearchbar';
import ProfilePic from '../../../components/atoms/ProfilePic/ProfilePic';
import Message from '../../../components/molecules/Message/Message';

function Chats() {
  return (
    <View style={MessagesScreenStyles.Container}>
      <FancyHeader
        style={{
          Container: {height: '25%'},
        }}
      />
      <Container
        style={{
          height: '80%',
          transform: [{translateY: -50}],
          zIndex: 999,
        }}>
        <ScrollView style={{marginTop: 8}}>
          <DmzSeachbar placeholder="search" />
          <Message
            Profile={
              <ProfilePic
                sourceurl={require('../../../assets/jpg/person1.jpg')}
                style={{
                  Container: {
                    height: 60,
                    width: 60,
                    borderRadius: 60,
                  },
                  Image: {borderRadius: 60},
                }}
              />
            }
            Name="Bell Campbell"
            Time="10:00 am"
            Message="Thank you Doctor"
            MessageCount={2}
          />
          <Message
            Profile={
              <ProfilePic
                sourceurl={require('../../../assets/jpg/person1.jpg')}
                style={{
                  Container: {
                    height: 60,
                    width: 60,
                    borderRadius: 60,
                  },
                  Image: {borderRadius: 60},
                }}
              />
            }
            Name="Bell Campbell"
            Time="10:00 am"
            Message="Thank you Doctor"
            MessageCount={2}
          />
          <Message
            Profile={
              <ProfilePic
                sourceurl={require('../../../assets/jpg/person1.jpg')}
                style={{
                  Container: {
                    height: 60,
                    width: 60,
                    borderRadius: 60,
                  },
                  Image: {borderRadius: 60},
                }}
              />
            }
            Name="Bell Campbell"
            Time="10:00 am"
            Message="Thank you Doctor"
            MessageCount={2}
          />
        </ScrollView>
      </Container>
    </View>
  );
}

const MessagesScreenStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Chats;
