import React, {useState, useContext} from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Card } from "@rneui/themed";
import Input from "../Tracker/Input";
import TechButton from "../Login/TechButton";
import { ContextPrvd } from "../../Context/ContextPrvd";
import { GoogleAPI } from "../../Page/API/GoogleAPI";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
export default function MapCard({GetLocation, mapRegion}) {
  const {latitude, longitude} = useState([])
  const {myLocation, setLocation} = useContext(ContextPrvd)
  console.warn(mapRegion)
  return (
    // <Card containerStyle={Styles.container}>
    //     <Input placeholder='Type in Your Locations' />
    //     <TouchableOpacity style={Styles.appButtonContainer}>
    //       <Text style={Styles.appButtonText}>Confirm Location</Text>
    //     </TouchableOpacity>
    // </Card>
    <View style={Styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Type a place"
        fetchDetails={true}
        query={{ key: GoogleAPI,  components: 'country:id' }}
        onPress={(data, details)=> GetLocation(details?.geometry?.location)}
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
        listEmptyComponent={() => (
          <View style={{flex: 1}}>
            <Text>No results were found</Text>
          </View>
        )}
      />
      <Text></Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#5BABE8",
    flexDirection: "row",
    height: 300,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    bottom: 0,
    top: "70%",
    borderRadius: 20,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#396DA8",
    borderRadius: 20,
    paddingVertical: 10,
    marginTop: 20,
    paddingHorizontal: 80,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "capitalize",
  },
});
