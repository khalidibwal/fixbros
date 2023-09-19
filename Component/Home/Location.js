import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Entypo } from "@expo/vector-icons"; // You can use other icon libraries as well

export default function Location() {
  return (
    <View style={Styles.container}>
      <View style={Styles.Grid}>
        <Entypo name="location-pin" size={20} color="#5BABE8" style={Styles.pin} />
        <Text style={Styles.locFont}>jakarta selatan</Text>
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
    margin:5
  },
  pin:{
    margin:5
  }
});
