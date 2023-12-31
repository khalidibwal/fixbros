import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import DetailCard from "../../Component/Card/DetailCard";
import { BackButton } from "../../Component/Navigation/Icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

export default function Selected(props) {
  const [techdata, setTechData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); // Get the navigation object

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

      <Image
        source={require("../../assets/login/selectedils.png")}
        style={Styles.logo}
      />
      <DetailCard techdata={techdata} loading={loading} />
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
  backStyle: { // Ensure the TouchableOpacity takes up all available space
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
  },
});
