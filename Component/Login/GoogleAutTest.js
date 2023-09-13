import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { AuthSession } from 'expo-auth-session';
import { useAuthRequest as useGoogleAuthRequest } from 'expo-auth-session/providers/google';
// import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';

// const GOOGLE_ANDROID_CLIENT_ID = 'YOUR_ANDROID_CLIENT_ID';
// const GOOGLE_IOS_CLIENT_ID = 'YOUR_IOS_CLIENT_ID';

export default function GoogleAuthTest() {
  const [request, response, promptAsync] = useGoogleAuthRequest(
    {
      clientId: '620987370599-pfu5apg1b9us8sbd0ghj590htsvs7cr5.apps.googleusercontent.com', // Your Google OAuth client ID
      scopes: ['openid', 'profile', 'email'],
      redirectUri: 'com.khalid1995.fixme'
    },
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      // Handle success, e.g., obtain user data
      console.warn('success')
      console.log('Authorization Code:', response.params.code);
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