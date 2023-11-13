import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { Entypo } from "@expo/vector-icons"; // You can use other icon libraries as well
import RoundAvatar from "../Profile/RoundAvatar";
import * as Location from "expo-location";
import axios from "axios";

const GOOGLE_GEOCODING_API_KEY = "AIzaSyDLiMP9afPBMY6vSPafP3AULs-3sJKkKoM";

export default function HomeLocation() {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState("");
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      // Use the latitude and longitude to fetch the city information using Google's Geocoding API
      if (location !== null) {
        // console.warn(location)
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${GOOGLE_GEOCODING_API_KEY}`
          );

          if (response.data.results.length > 0) {
            // console.log(response)
            const addressComponents =
              response.data.results[0].address_components;
            const cityComponent = addressComponents.find((component) =>
              component.types.includes("locality")
            );
            let myAddress = response.data.results[0].formatted_address;
            const addressParts = myAddress.split(",");
            const streetAddress = addressParts[0].trim(); // "Jl. Kenanga V No.20"
            const neighborhood = addressParts[1].trim(); // "Ragajaya"
            setCity(neighborhood);

            if (cityComponent) {
              setCity(neighborhood);
            } else {
              setCity(neighborhood);
            }
          }
        } catch (error) {
          console.error("Error fetching city information:", error);
        }
      }
    })();
  }, [location]);
  return (
    <View style={Styles.container}>
      <View style={Styles.Grid}>
        <Entypo
          name="location-pin"
          size={30}
          color="#5BABE8"
          style={Styles.pin}
        />

        {location !== null ? (
          <Text style={Styles.locFont}>{city}</Text>
        ) : (
          <ActivityIndicator />
        )}
        <View style={Styles.pin}>
          <RoundAvatar source={require("../../assets/profiles/team.jpeg")} />
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  Grid: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  locFont: {
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    textTransform: "capitalize",
    margin: 5,
  },
  pin: {
    margin: 5,
  },
});
