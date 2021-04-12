import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Octicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootDrawerParamList, RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import colors from '../constants/Colors';
import { View } from '../components/Themed';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignIn from '../components/SignIn';
import MainDrawerNavigator from './MainDrawerNavigator';
// import ThreeDotsScreen from '../screens/ThreeDotsScreen';
import AuthScreen from '../screens/AuthScreen';
import SplashScreen from '../screens/SplashScreen';
import { IconButton } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
import AddRoomScreen from '../screens/AddRoomScreen';




// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        
      <RootNavigator />
      
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  // const navigation = useNavigation()
  return (
    <Stack.Navigator screenOptions={{ 
        headerStyle: {
          backgroundColor: colors.light.tint,
          shadowOpacity: 0,
          // elevation: 0
        },
        headerTintColor: colors.light.background,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}> 

      <Stack.Screen 
        name="Root"
        component={SplashScreen}
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <Octicons name="search" size={22} color={'black'}/>
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'black'} />
            </View>
          )
        }}
      />

      <Stack.Screen 
        name="MainDrawerNavigator" 
        component={MainDrawerNavigator}  
        options={({ route, navigation }) => ({
          title: 'route.params.name',
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <FontAwesome5 name="video" size={22} color={'black'} />
              <MaterialIcons name="call" size={22} color={'black'} />
              <IconButton icon='message-plus' size={22} color={'black'} onPress={() => navigation.navigate('AddRoom')} />
            </View> 
          )
        })}
      />
      <Stack.Screen name="Contacts" component={ContactsScreen} options={{ title: 'Contacts!' }} />
      <Stack.Screen name="AddRoom" component={AddRoomScreen} options={{ title: 'Add Room!' }} />
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'SignIn!' }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'SignUp!' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}



