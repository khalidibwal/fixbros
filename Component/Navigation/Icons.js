import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome, Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

const BackButton = () => {
  return (
    <View>
      <Ionicons name="chevron-back" size={25} color="#396DA8"  />
    </View>
  );
};

const HomeButton = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Entypo name="home" size={25} color="#396DA8" />
      </View>
      <View style={Styles.home}>
        <Text style={Styles.font}>Home</Text>
      </View>
    </View>
  );
};

const ChatButton = () => {
  return (
    <View>
      <MaterialIcons name="chat" size={25} color="#396DA8" style={{left:10}} />
    </View>
  );
};
const ProfileButton = () => {
  return (
    <View>
      <FontAwesome name="user" size={25} color="#396DA8" />
    </View>
  );
};

const Styles = StyleSheet.create({
  font:{
    color:'#396DA8',
    fontSize:15,
    lineHeight:27,
    fontWeight:'bold',
    letterSpacing:1
  },
  home:{
    justifyContent:'center',
    alignSelf:'center',
    left:10
  }
})

export { BackButton, HomeButton, ChatButton, ProfileButton };
