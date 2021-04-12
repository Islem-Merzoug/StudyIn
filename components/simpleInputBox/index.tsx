import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import styles from "./style"

export type SimpleInputBoxProps = {
    label: any;
    value: any;
    onChangeText: any;
}


const SimpleInputBox = ( props: SimpleInputBoxProps ) => {
    useEffect(() => {
        console.log(props.label);
        console.log(props.value);
        console.log(props.onChangeText);
      }, []);

    const [roomName, setRoomName] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <TextInput
                    placeholder={props.label}
                    style={styles.textInput}
                    multiline
                    value={roomName}
                    onChangeText={(text: any) => setRoomName(text)}
                />
            </View>
        </View>
    )
}

export default SimpleInputBox;