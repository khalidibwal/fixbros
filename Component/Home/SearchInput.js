import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // You can use other icon libraries as well

export default function SearchInput() {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="#888" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#888"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    paddingHorizontal: 10,
    margin:30,
    height:50
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
