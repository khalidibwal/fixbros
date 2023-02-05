import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Input from "../../Component/Login/Input";
import Button from "../../Component/Login/Button";
import TechButton from "../../Component/Login/TechButton";

export default function Login(){
    return(
        <View style={Styles.container}>
            <Image source={require('../../assets/login/fixmelogin.png')} style={Styles.logo}/>
            <Text style={Styles.font}>Login Your Account</Text>
            <Input secureTextEntry={false} placeholder='Email'/>
            <Input secureTextEntry={true} placeholder='password'/>
            <Text style={Styles.font}>Forgot Password</Text>
            <Button text='Login'/>
            <TechButton text='Customer SignUp'/>
            <Text style={Styles.techFont}>For Technician enrollment</Text>
            <TechButton text='Technician SignUp'/>
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
        left:50,
        letterSpacing:1
    },
    techFont:{
        left:50,
        letterSpacing:1,
        marginTop:50
    }
})