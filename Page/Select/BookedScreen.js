import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

import ChooseCard from "../../Component/Card/ChooseCard";
import RoundPro from "../../Component/Profile/RoundPro";
import HomeLocation from "../../Component/Home/HomeLocation";
import { ContextPrvd } from "../../Context/ContextPrvd";

export default function BookedScreen(props) {
  const route = useRoute();
  const { dataId, dataName, dataImages } = route.params || {};
  const [techdata, setTechData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); 
  const { users, setUser, names } = useContext(ContextPrvd);

  useEffect(() => {
    const fetchTechList = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV:v1/subcategory`);
        setTechData(response.data);
      } catch (error) {
        console.error('Error fetching tech data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechList();
  }, []);

  const goBack = () => navigation.goBack();

  return (
      <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.backStyle}>
        <Image source={require("../../assets/navigation/back.png")} />
      </TouchableOpacity>
      <View style={styles.grid2}>
        <RoundPro source={{uri:dataImages}} />
      </View>
      <View style={styles.grid2}>
        <Text style={styles.title}>{dataName}</Text>
      </View>
      <View style={styles.grid2}>
        <HomeLocation />
      </View>
      <View style={styles.grid3}>
        <Text>Keahlian :</Text>
      </View>
      <View style={styles.grid2}>
        <Text>Alat :</Text>
      </View>
      
      <ChooseCard userID={dataId} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backStyle: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
  },
  grid2: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    margin: 10,
    top:20
  },
  grid3: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    margin: 10,
    top:20
  },

  title: {
    color: "#396DA8",
  },
});
