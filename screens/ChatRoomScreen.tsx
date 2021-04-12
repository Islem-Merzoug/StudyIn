import * as React from 'react';
import { FlatList, ImageBackground, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useRoute } from '@react-navigation/native'

import ChatRoomData from '../data/Chats'
import ChatMessage from '../components/ChatMassage';
import BG from '../assets/images/BG.png';
import InputBox from '../components/InputBox';

export default function ChatRoomScreen({}) {
  const route = useRoute();
  console.log(route.params)
  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>         
        <FlatList
          data={ChatRoomData.messages}
          renderItem={({item}) =>  <ChatMessage message={item}/>}
          inverted
        />  
        <InputBox/>
    </ImageBackground>


    
  )
}
