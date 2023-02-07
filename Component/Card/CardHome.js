import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Card } from "@rneui/themed";


export default function CardHome(props){
    return(
        <Card>
            <View>
                <Image source={props.source} style={Styles.imageSize}/>
            </View>
        </Card>
    )
}

const Styles = StyleSheet.create({
    imageSize:{
        width:90,
        height:90
    }
})

