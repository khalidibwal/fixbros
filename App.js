import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainStackNavigator from "./Route/MainStackNavigator";
import { ContextPrvd } from "./Context/ContextPrvd";

export default function App() {
  const [myToken, setMyToken] = useState("");
  const [users, setUser] = useState("");
  const SyncData = {
    myToken, setMyToken,
    users, setUser
  };
  return (
    <ContextPrvd.Provider value={SyncData}>
      <MainStackNavigator />
    </ContextPrvd.Provider>
  );
}
