import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card } from "@rneui/themed";


export default function CardHome(props){
    return(
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
        <Card containerStyle={Styles.card}>
            <View style={Styles.imageSize}>
                <Image source={props.source}/>
                <Text style={Styles.font}>{props.title}</Text>
            </View>
        </Card>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    imageSize:{
        width:90,
        height:90,
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    font:{
        textAlign:'center',
        color:'#5BABE8',
        fontWeight:'bold'
    }
})

