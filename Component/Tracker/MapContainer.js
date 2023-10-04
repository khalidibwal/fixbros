import React, {useState} from "react";
import * as Location from 'expo-location'; // Import Expo Location

const CurrentLocation = (location,setLocation) =>{
    
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Location permission denied');
          return;
        }
  
        let currentLocations = await Location.getCurrentPositionAsync({});
        setLocation(currentLocations);
    }, []);   
}

export default {
    CurrentLocation
}