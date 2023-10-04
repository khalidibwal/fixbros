import React from "react";
import { Card } from "@rneui/themed";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

export default function SMCard(props) {
  return (
    <View style={Styles.container}>
      <Card containerStyle={Styles.card}>
        <Text style={Styles.cFirmStyle}>Confirm Your Location</Text>
        <TextInput style={Styles.input} />
        <TouchableOpacity style={Styles.appButtonContainer} onPress={props.onPress}>
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
    borderTopRightRadius:10, // Remove border radius
    backgroundColor: '#5BABE8',
    height:200
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
  },
  cFirmStyle: {
    left: 15,
    color: '#fff',
  },
  appButtonContainer: {
    elevation: 1,
    backgroundColor: "#396DA8",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 59,
    marginTop:25,
    width: "95%",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom:10
  },
  appButtonText: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
