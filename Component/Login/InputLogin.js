import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function InputLogin(props){
    return(<TextInput
        style={Styles.input}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(e) => props.handleUser(e)}
      />);
}

const Styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: "80%",
        height: 40,
        marginTop: 10,
        marginBottom: 30,
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center",
        backgroundColor: "white",
      },
})