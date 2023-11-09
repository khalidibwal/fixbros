import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useAuthRequest as useGoogleAuthRequest } from 'expo-auth-session/providers/google';
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();
export default function Googlebtn(props) {
  const navigation = useNavigation()

  const [request, response, promptAsync] = useGoogleAuthRequest(
    {
      androidClientId: '620987370599-lca68bb3alu4pofurjfahr0i1u21qmsu.apps.googleusercontent.com', // Your Google OAuth client ID
      scopes: ['openid', 'profile', 'email'],
      redirectUri: 'com.khalid1995.fixme:/oauth2redirect/google'
    },
  );

  React.useEffect(() => {
    
    console.warn(response)
    if (response?.type === 'success') {
      // Handle success, e.g., obtain user data
      console.warn('success')
      console.warn('Authorization Code:', response.params.code);
      navigation.navigate('SignUp')
    } else if (response?.type === 'error') {
      console.warn('failed')
      // Handle error
      console.error('Authorization Error:');
    }
  }, [response,navigation]);

  const handleGoogleSignIn = () => {
    promptAsync();
  };
  return (
    <TouchableOpacity style={Styles.appButtonContainer} onPress={()=> handleGoogleSignIn()}>
      <Image
        source={require("../../assets/login/ic_google.png")}
        style={Styles.image}
      />
      <Text style={Styles.appButtonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 3,
    backgroundColor: "#F4F4F4",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 25,
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  appButtonText: {
    fontSize: 13,
    color: "black",
    fontWeight: "bold",
    alignItems: "center",
  },
  image: {
    width: 20, // Adjust the width of the image as needed
    height: 20, // Adjust the height of the image as needed
    marginRight: 15, // Adjust the spacing between image and text
    alignItems: "center",
  },
});