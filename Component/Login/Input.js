import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function Input(props) {
  return (
    <>
      <TextInput
        style={Styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(e) => props.handleUser(e)}
      />
    </>
  );
}

const Styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 22,
    width: "80%",
    height: 50,
    marginTop: 10,
    marginBottom: 30,
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "#F5F5F5",
  },
});
