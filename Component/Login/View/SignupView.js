import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ContextPrvd } from "../../../Context/ContextPrvd";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import InputLogin from "../InputLogin";
import Button from "../../../Component/Login/Button";
import Googlebtn from "../Googlebtn";
import GoogleAuthTest from "../GoogleAutTest";

export default function SignupView() {
  const navigation = useNavigation();
  const [pass, setPass] = useState("");
  const [validate, setValidate] = useState(false);
  const {
    users,
    setUser,
    names,
    setNames,
    myToken,
    setMyToken,
    phone,
    setPhone,
    email,
    setEmail,
  } = useContext(ContextPrvd);
  const defaultValues = {
    name: names,
    email: users,
    password: pass,
  };

  const handleNames = (data) => {
    setNames(data);
  };

  const handleEmail = (data) => {
    setUser(data);
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
            screen: "homescreen",
            params: { myToken: response.data.authToken },
          });
          setMyToken(response.data.authToken);
        } else if (response.status !== 200) {
          setValidate(true);
        }
      })
      .catch((error) => setValidate(true));
  };
  return (
    <View style={Styles.bottomNavigationView}>
      <Text style={Styles.inputText}>Full Name</Text>
      <InputLogin
        placeholder="Eg. youremail@gmail.com"
        onChangeText={(e) => handleNames(e)}
      />
      <Text style={Styles.inputText}>Email Address</Text>
      <InputLogin
        placeholder="Eg. youremail@gmail.com"
        onChangeText={(e) => handleEmail(e)}
      />
      <Text style={Styles.inputText}>Password</Text>
      <InputLogin placeholder="Password" onChangeText={(e) => handlePass(e)} secureTextEntry={true}/>
      <TouchableOpacity style={Styles.forgetpass}>
        <Text style={Styles.forgetpass}>Forgot Password?</Text>
      </TouchableOpacity>
      <Button text="Create Account" onPress={() => HandleSubmit()} />
      <Googlebtn text="Login With Google" />
      {/* <GoogleAuthTest/> */}
    </View>
  );
}

const Styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    borderTopLeftRadius: 20, // Adjust the radius as needed
    borderTopRightRadius: 20, // Adjust the radius as needed
    overflow: "hidden", // Clip the content to the rounded shape
  },
  forgetpass: {
    color: "#5BABE8",
    alignItems: "center",
  },
  inputText: {
    textAlign: "left",
    marginLeft: 45,
    fontWeight: "400",
    fontSize: 14,
  },
});
