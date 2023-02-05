import React, {useEffect, useState} from "react";
import { View, StyleSheet, Image } from "react-native";
import Slider from "../../Component/Home/Slider";
import axios from "axios";

export default function HomeScreen() {
  const [mySlider, setSlider] = useState([]);

  useEffect(() => {
    const GetImages = () => {
      axios
        .get(`https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV:v1/slide`)
        .then((resp) => setSlider(resp.data));
    };
    GetImages();
  }, []);
  return (
    <View style={Styles.container}>
      <Image
        source={require("../../assets/login/fixmelogin.png")}
        style={Styles.logo}
      />
      <Slider mySlider={mySlider} />
    </View>
  );
}

const Styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff'
    },
    logo:{
        justifyContent:'center',
        alignSelf:'center',
        width:100,
        height:70,
        marginBottom:10,
        marginTop:30
    },
})
