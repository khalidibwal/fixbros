import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainStackNavigator from "./Route/MainStackNavigator";
import { ContextPrvd } from "./Context/ContextPrvd";

export default function App() {
  const [myToken, setMyToken] = useState(null);
  const [users, setUser] = useState("");
  const [userId, setUserId] = useState(0);
  const [myLocation, setLocation] = useState("")
  const SyncData = {
    myToken, setMyToken,
    users, setUser,
    myLocation, setLocation,
    userId, setUserId
  };
  return (
    <ContextPrvd.Provider value={SyncData}>
      <MainStackNavigator />
    </ContextPrvd.Provider>
  );
}
