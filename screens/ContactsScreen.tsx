import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import users from '../data/Users';
import NewMessageButton from '../components/NewMessageButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import ContactListItem from '../components/ContactListItem';

export default function ContactsScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const onPress = () => {
    navigation.navigate('Contacts');
  }
  return (        
  
  <View style={styles.container}>

          <FlatList
            style={{width: '100%'}}
            data={users}
            renderItem={({ item }) =>  <ContactListItem user={item}/>}
            keyExtractor={(item) => item.id}
          />
          <NewMessageButton/>
          
  </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
