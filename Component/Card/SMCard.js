import React, {useState} from "react";
import { Card } from "@rneui/themed";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { myGmaps } from "../../Page/API/Gmaps";

export default function SMCard(props) {
  const YOUR_GOOGLE_PLACES_API_KEY = myGmaps;
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  return (
    <View style={Styles.container}>
      <Card containerStyle={Styles.card}>
        <Text style={Styles.cFirmStyle}>Confirm Your Location</Text>
      
        <GooglePlacesAutocomplete
          fetchDetails={true}
          styles={{
            container: {
              zIndex: 999,
              position: "absolute",
              top: 50,
              left: 10,
              width: "95%",
              maxHeight: 200,
              borderColor: "#ccc",
              borderWidth: 1,
              backgroundColor: "white",
              borderRadius: 10,
            },
          }}
          placeholder="Search for a location"
          onPress={(data, details = null) => {
            console.log('detail baru',details.formatted_address)
            if (details) {
              props.handleLocationSelection({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
            }
          }}
          query={{
            key: YOUR_GOOGLE_PLACES_API_KEY, // Replace with your API key
            language: "en",
            components: "country:id",
          }}
        />
        <TouchableOpacity
          style={Styles.appButtonContainer}
          onPress={props.onPress}
        >
          <View>
            <Text style={Styles.appButtonText}>{props.text}</Text>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end", // Align card to the bottom
    alignItems: "center", // Center card horizontally
  },
  card: {
    width: "100%", // Make the card wide
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10, // Remove border radius
    backgroundColor: "#5BABE8",
    height: 200,
  },
  input: {
    marginTop: 10,
    borderColor: "gray",
    width: "95%",
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    height: 50,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  cFirmStyle: {
    left: 15,
    color: "#fff",
    marginTop:15
  },
  appButtonContainer: {
    elevation: 1,
    backgroundColor: "#396DA8",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 59,
    marginTop: 70,
    width: "95%",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  appButtonText: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
