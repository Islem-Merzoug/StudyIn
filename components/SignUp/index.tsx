import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native';
import { View } from '../../components/Themed';
import firebase from '../../firebase/firebase';
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Home');
        } catch (err) {
            setError(err.message);
        }

    }
    return (
        <View>
            <TextInput
                placeholder={"Email"}
                value={email}
                onChangeText={setEmail}

            />
            <TextInput
                placeholder={"Password"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {
                error ?
                    <Text style={{ color: 'red' }}>{error}</Text>
                    : null
            }
            <Button title="SignIn" onPress={() => signIn()} />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>

    )
};

export default SignUp;