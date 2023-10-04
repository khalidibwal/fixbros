import React from "react";
import { Alert } from "react-native";
import * as Location from 'expo-location';
import { Linking } from "react-native";

const showPermissionDeniedDialog = () => {
    Alert.alert(
      'Location Permission Required',
      'To use this feature, we need access to your location. Please enable location access in your device settings.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Permission denied'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Redirect the user to app settings to enable permissions
            Linking.openSettings();
          },
        },
      ],
      { cancelable: false }
    );
  };

  export default showPermissionDeniedDialog()
