import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native';
import { View } from '../../components/Themed';
import firebase from '../../firebase/firebase';
import { useNavigation } from '@react-navigation/native';


const Auth = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Tap to Sign In</Text>

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text>Sign In with google</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text>Sign In with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
                <Text>Sign In with Email</Text>
            </TouchableOpacity>
        </View>

    )
};

export default Auth;