import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignOutScreen from '../screens/SignOutScreen';
import MainTabNavigator from './MainTabNavigator';
import firebase from 'firebase';
import Loading from '../components/Loading/index'
import { 
  View, 
  Text
} from 'react-native';

// const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Drawer = createDrawerNavigator();
import { useNavigation } from '@react-navigation/native';

export default function MainDrawerNavigator() {
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);
  
  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return (
      <Drawer.Navigator initialRouteName="Home">

        <Drawer.Screen name="Home"   component={MainTabNavigator} />
        <Drawer.Screen name="SignIn" component={SignInScreen} />
        <Drawer.Screen name="SignUp" component={SignUpScreen} />
        <Drawer.Screen name="SignOut" component={SignOutScreen} />
      
      </Drawer.Navigator>
    )
  } else {
    return (
      <SignInScreen/>
    )
   
  }

  // return (
  //   <View>
  //   {user ? 
  //     <Drawer.Navigator initialRouteName="Home">

  //       <Drawer.Screen name="Home"   component={MainTabNavigator} />
  //       <Drawer.Screen name="SignIn" component={SignInScreen} />
  //       <Drawer.Screen name="SignUp" component={SignUpScreen} />
        
  //     </Drawer.Navigator> : <SignInScreen/>
  //   }
  //   </View>
  //   // <SignInScreen/>
  // );
}