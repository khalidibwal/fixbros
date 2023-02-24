import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function Input(props){
    return(
        <>
            <TextInput style={Styles.input} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry}/>
        </>
    )
}

const Styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: "100%",
        height: 50,
        marginTop: 10,
        marginBottom:20,
        textAlign: "center",
        backgroundColor: "#F5F5F5",
      },    
})