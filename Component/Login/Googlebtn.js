import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function Googlebtn(props) {
  return (
    <TouchableOpacity style={Styles.appButtonContainer} onPress={props.onPress}>
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