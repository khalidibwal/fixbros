import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Input from "../../Component/Login/Input";
// import PassInput from "../../Component/Login/PassInput";
import Button from "../../Component/Login/Button";
import TechButton from "../../Component/Login/TechButton";
import { ContextPrvd } from "../../Context/ContextPrvd";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import HomeScreen from "../Home/HomeScreen";

export default function SignUp() {
  const navigation = useNavigation();
  const [pass, setPass] = useState("");
  const [validate, setValidate] = useState(false)
  const {
     users, setUser,
     myToken, setMyToken,
     phone, setPhone,
     email, setEmail 
    } = useContext(ContextPrvd);
  const defaultValues = {
    name: users,
    email: email,
    password: pass,
    phone:phone
  };
  const handleUser = (data) => {
    setUser(data);
  };
  const handleEmail = (data) => {
    const lowercaseText = data.toLowerCase();
    setEmail(lowercaseText);
  };
  const handlePhone = (data) => {
    setPhone(data);
  };
  const handlePass = (data) => {
    setPass(data);
  };
  const HandleSubmit = () => {
    axios
      .post(
        `https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV/auth/signup`,
        defaultValues,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          // console.warn(response.data)
          navigation.navigate("Home", {
            screen: 'homescreen',
            params : {myToken: response.data.authToken},
          });
          setMyToken(response.data.authToken)
        }
        else if(response.status !== 200){
            setValidate(true)
        }
      })
      .catch((error) => setValidate(true));
  };
  return (
    <View style={Styles.container}>
      <Image
        source={require("../../assets/login/fixmelogin.png")}
        style={Styles.logo}
      />
      <Text style={Styles.font}>Sign Up Here</Text>
      <Input
        secureTextEntry={false}
        placeholder="Fullname"
        handleUser={(e) => handleUser(e)}
      />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        handleUser={(e) => handleEmail(e)}
      />
      <Input
        secureTextEntry={true}
        placeholder="Password"
        handleUser={(e) => handlePass(e)}
      />
      <Input
        placeholder="Phone Number"
        keyboardType="numeric"
        handleUser={(e) => handlePhone(e)}
      />
      {validate ? <Text style={Styles.validation}>Please Fill all the blank</Text> : <></>}
      <TouchableOpacity style={Styles.appButtonContainer} onPress={()=> HandleSubmit()}>
            <View>
              <Text style={Styles.appButtonText}>Sign Up</Text>
            </View>
        </TouchableOpacity>
      <TechButton text="Customer SignUp" />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    justifyContent: "center",
    alignSelf: "center",
    width: 200,
    height: 150,
    marginTop: 50,
  },
  font: {
    left: 30,
    letterSpacing: 1,
  },
  techFont: {
    left: 50,
    letterSpacing: 1,
    marginTop: 50,
  },
  appButtonContainer: {
    elevation: 1,
    backgroundColor: "#5BABE8",
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
  validation:{
    color:'red',
    textAlign:'center',
    letterSpacing: 1,
    marginBottom:10
  }
});
