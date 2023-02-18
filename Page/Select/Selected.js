import React, {useEffect, useState} from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import DetailCard from "../../Component/Card/DetailCard";
import axios from "axios";

export default function Selected(){
    const [techdata, setTechData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const TechList = () =>{
            setLoading(true)
            axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV:v1/subcategory`)
            .then((resp)=> setTechData(resp.data))
            .then(setLoading(false))
        }
        TechList();
    }, []);

    return(
        <View style={Styles.container}>
            <Image source={require('../../assets/login/fixmelogin.png')} style={Styles.logo}/>
            <Text style={Styles.font}>Please Select One Of The List :</Text>
            <DetailCard techdata={techdata} loading={loading}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    logo:{
        justifyContent:'center',
        alignSelf:'center',
        width:200,
        height:150,
        marginTop:50
    },
    font:{
        textAlign:'center',
        letterSpacing:1,
        top:30,
        color:'#396DA8',
        fontSize:15
    },
})