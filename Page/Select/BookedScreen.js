import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import ChooseCard from "../../Component/Card/ChooseCard";
import { BackButton } from "../../Component/Navigation/Icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import RoundPro from "../../Component/Profile/RoundPro";
import { ContextPrvd } from "../../Context/ContextPrvd";
import axios from "axios";

export default function BookedScreen(props) {
  const [techdata, setTechData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); // Get the navigation object
  const { users, setUser, names } = useContext(ContextPrvd);

  const goBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    const TechList = () => {
      setLoading(true);
      axios
        .get(`https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV:v1/subcategory`)
        .then((resp) => setTechData(resp.data))
        .then(setLoading(false));
    };
    TechList();
  }, []);

  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={() => goBack()} style={Styles.backStyle}>
        <Image source={require('../../assets/navigation/back.png')}/>
      </TouchableOpacity>
        <View style={Styles.Grid2}>
        <RoundPro source={require('../../assets/profiles/team.jpeg')}/>
        </View>
        <View style={Styles.Grid2}>
        <Text style={Styles.Title}>{names}</Text>
        </View>

      <ChooseCard />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    justifyContent: "center",
    alignSelf: "center",
    resizeMode: "stretch",
    top: 80,
  },
  Title:{
    color:'#396DA8'
  },
  backStyle: { // Ensure the TouchableOpacity takes up all available space
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
  },
  Grid2: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    margin: 10,
    top:50
  },
});
