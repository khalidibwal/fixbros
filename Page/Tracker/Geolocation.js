import React, { useState } from "react";
import {View, Text, StyleSheet} from "react-native"
import { Card } from "@rneui/themed";
import Geocode from "react-geocode";
import { GoogleAPI } from "../API/GoogleAPI";

export default function Geolocation({latitude,longitude}) {
  const [location, setLocation] = useState("");
  Geocode.setApiKey(GoogleAPI);
  Geocode.setLocationType("ROOFTOP");
  // Get address from latitude & longitude.
  Geocode.fromLatLng(latitude, longitude).then(
    (response) => {
      const address = response.results[0].formatted_address;
      setLocation(address)
    },
    (error) => {
      console.error(error);
    }
  );
  return(
    <Card containerStyle={Styles.latlong}>
        <Text style={Styles.latlong}>{location}</Text>
    </Card>
  )
}

const Styles = StyleSheet.create({
    latlong: {
        borderRadius:10,
        padding:1,
        backgroundColor:'#ccac6c'
    }
})


