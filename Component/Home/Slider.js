import React, {useEffect} from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";

export default function Slider(props){
    useEffect(() => {
       console.warn(props)
    }, []);
    return(
    <ScrollView horizontal={true}>
        {props.mySlider.map((resp)=>{
            return(
                <Image source={{uri:resp.image.url}} style={Styles.slider} />
            )
        })}
      </ScrollView>
    )
}

const Styles = StyleSheet.create({
    slider:{
        width: 400,
        height: 350,
        resizeMode: "stretch",
        marginTop:10
      }
})