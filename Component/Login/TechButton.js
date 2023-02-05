import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function TechButton(props){
    return(
        <TouchableOpacity style={Styles.appButtonContainer} onPress={props.onPress}>
            <View>
              <Text style={Styles.appButtonText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#396DA8",
        borderRadius: 22,
        paddingVertical: 15,
        paddingHorizontal: 100,
        marginTop:25,
        width: "80%",
        justifyContent: "center",
        alignSelf: "center",
      },
      appButtonText: {
        fontSize: 13,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
      },
})