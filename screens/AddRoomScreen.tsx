import React, { useState } from 'react';
import { View, StyleSheet, Platform, TextInput,Button } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
// import FormInput from '../components/FormInput';
// import FormButton from '../components/FormButton';
import { useNavigation, useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import SimpleInputBox from '../components/simpleInputBox';
import firebase from '../firebase/firebase';


import Loading from '../components/Loading';
import moment from 'moment';


export default function AddRoomScreen() {
    const navigation = useNavigation()
    const [roomName, setRoomName] = useState('');
    // ... Firestore query will come here later
    const { colors } = useTheme();

    const handleButtonPress = (roomName: any) => {
      if (roomName.length > 0 ) {
        console.log(roomName);
        
        firebase.firestore()
          .collection('THREADS')
          .add({
            name: roomName,
            createdAt: moment().format('YYYY-MM-DD hh:mm:ss a'),
            createdBy: 'userID'
          })
          .then(() => {
            navigation.navigate('MainDrawerNavigator')
          })
      }
    }

  
    return (
      <View style={styles.rootContainer}>
        <View style={styles.closeButtonContainer}>
          <IconButton
            icon='close-circle'
            size={25}
            color='#05375a'
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.innerContainer}>
          <Title style={styles.title}>Create a new chat room</Title>
          <TextInput
            // label='Room Name'
            value={roomName}
            onChangeText={(text) => setRoomName(text)}
            clearButtonMode='while-editing'
          />
          
          {/* <SimpleInputBox 
            label={'Type the name of your new room'}
            value={roomName}
            onChangeText={(text: string) => setRoomName(text)}
          /> */}
          
          <Button
            title='Create'
            // value='contained'
            // style={styles.buttonLabel}
            onPress={() => {
              handleButtonPress(roomName);
              console.log("-----------------------------------------------");
              console.log(roomName);
              
            } }
            // disabled={roomName.length === 0}
          />
        </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
    closeButtonContainer: {
      position: 'absolute',
      top: 30,
      right: 0,
      zIndex: 1,
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
    },
    buttonLabel: {
      fontSize: 22,
    },
  });