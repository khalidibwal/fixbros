import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Input from "../../Component/Login/Input";
// import PassInput from "../../Component/Login/PassInput";
import Button from "../../Component/Login/Button";
import TechButton from "../../Component/Login/TechButton";
import { ContextPrvd } from "../../Context/ContextPrvd";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Login() {
  const navigation = useNavigation();
  const [pass, setPass] = useState("");
  const { users, setUser } = useContext(ContextPrvd);
  const defaultValues = {
    email: users,
    password: pass,
  };
  const handleUser = (data) => {
    setUser(data);
  };
  const handlePass = (data) => {
    setPass(data);
  };
  const HandleSubmit = () => {
    axios
      .post(
        `https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV/auth/login`,
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
            myToken: response.data.authToken,
          });
        }
        else if(response.status !== 200){
            alert('Please Fill The Username Or Password')
        }
      })
      .catch((error) => alert(error));
  };
  return (
    <View style={Styles.container}>
      <Image
        source={require("../../assets/login/fixmelogin.png")}
        style={Styles.logo}
      />
      <Text style={Styles.font}>Login Your Account</Text>
      <Input
        secureTextEntry={false}
        placeholder="Email"
        handleUser={(e) => handleUser(e)}
      />
      <Input
        secureTextEntry={true}
        placeholder="Password"
        handleUser={(e) => handlePass(e)}
      />
      <Text style={Styles.font}>Forgot Password</Text>
      <TouchableOpacity style={Styles.appButtonContainer} onPress={()=> HandleSubmit()}>
            <View>
              <Text style={Styles.appButtonText}>Login</Text>
            </View>
        </TouchableOpacity>
      <TechButton text="Customer SignUp" />
      <Text style={Styles.techFont}>For Technician enrollment</Text>
      <TechButton text="Technician SignUp" />
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
    left: 50,
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
});
