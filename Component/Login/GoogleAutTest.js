import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { View, Button, StyleSheet } from 'react-native';
import { AuthSession } from 'expo-auth-session';
import { useAuthRequest as useGoogleAuthRequest } from 'expo-auth-session/providers/google';
import { useNavigation } from "@react-navigation/native";

WebBrowser.maybeCompleteAuthSession()
export default function GoogleAuthTest() {
  const navigation = useNavigation();
  const [request, response, promptAsync] = useGoogleAuthRequest(
    {
      androidClientId: '620987370599-lca68bb3alu4pofurjfahr0i1u21qmsu.apps.googleusercontent.com', // Your Google OAuth client ID
      // clientId: '620987370599-pfu5apg1b9us8sbd0ghj590htsvs7cr5.apps.googleusercontent.com',
      // clientSecret: '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',
      scopes: ['openid', 'profile', 'email'],
      redirectUri: 'com.khalid1995.fixme:/oauth2callback'
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
  }, [response]);

  const handleGoogleSignIn = () => {
    promptAsync();
  };

  return (
    <View style={Styles.btn}>
      <Button title="Sign in with Google" onPress={handleGoogleSignIn} />
    </View>
  );
}

const Styles = StyleSheet.create({
  btn:{
    marginTop:50
  }
})