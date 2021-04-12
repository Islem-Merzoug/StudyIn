import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem'

import chatRooms from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';
import MainDrawerNavigator from '../navigation/MainDrawerNavigator';
import { List, Divider } from 'react-native-paper';

// import 'firebase/firestore';
import firebase from '../firebase/firebase';


import Loading from '../components/Loading';

export type StateThreads = {
  name: string;
  createdAt: string;
  createdBy: string;
}

export default function ChatsScreen() {
  // return (
  //   <View style={styles.container}>
  //     {/* <ChatListItem chatRoom={chatRooms[0]}/> */}

  //     <FlatList
  //       style={{width: '100%'}}
  //       data={chatRooms}
  //       renderItem={({ item }) =>  <ChatListItem chatRoom={item}/>}
  //       keyExtractor={(item) => item.id}
  //     />
  //     <NewMessageButton/>
      
  //   </View>


  // );



  // const [threads, setThreads] = useState<StateThreads[]>([]);
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  console.ignoredYellowBox = [
    'Setting a timer'
  ]

  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('THREADS')
      .onSnapshot((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            // give defaults
            name: '',
            ...documentSnapshot.data(),
          };
        });

        setThreads(threads);

        if (loading) {
          setLoading(false);
        }
      });

    /**
     * unsubscribe listener
     */
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        data={threads}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
            description='Item description'
            titleNumberOfLines={1}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
            descriptionNumberOfLines={1}
          />
        )}
      />
    </View>
    
    
      );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
});