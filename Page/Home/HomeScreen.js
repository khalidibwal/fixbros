import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { ContextPrvd } from "../../Context/ContextPrvd";
import Slider from "../../Component/Home/Slider";
import CardHome from "../../Component/Card/CardHome";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [mySlider, setSlider] = useState([]);
  const navigation = useNavigation();
  const { myToken, userId, setUserId } = useContext(ContextPrvd);
  const cardSelected = (selected) => {
    navigation.navigate(selected);
  };
  const UserAuth = () => {
    axios
      .get(`https://x8ki-letl-twmt.n7.xano.io/api:8sVdsi3L/auth/me`, {
        headers: {
          Authorization: "Bearer " + myToken,
        },
      })
      .then((res) => {
        console.warn(res.data);
        setUserId(res.data.id);
      });
  };
  useEffect(() => {
    UserAuth();
    const GetImages = () => {
      axios
        .get(`https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV:v1/slide`)
        .then((resp) => setSlider(resp.data));
    };
    GetImages();
  }, []);
  return (
    <View style={Styles.container}>
      <Image
        source={require("../../assets/login/fixmelogin.png")}
        style={Styles.logo}
      />
      <Slider mySlider={mySlider} />
      <View style={Styles.Grid}>
        <View>
          <CardHome
            source={require("../../assets/home/tires.png")}
            title="Auto Mechanics"
            onPress={() => cardSelected("Selected")}
          />
        </View>
        <View>
          <CardHome
            source={require("../../assets/home/plumbing.png")}
            title="Plumbing Services"
            onPress={() => cardSelected("Selected")}
          />
        </View>
        <View>
          <CardHome
            source={require("../../assets/home/electronic.png")}
            title="Electronic Services"
          />
        </View>
      </View>
      <View style={Styles.Grid}>
        <View>
          <CardHome
            source={require("../../assets/home/shoes.png")}
            title="Taylor & Shoes"
          />
        </View>
        <View>
          <CardHome
            source={require("../../assets/home/ac.png")}
            title="AC Services"
          />
        </View>
        <View>
          <CardHome
            source={require("../../assets/home/electronic2.png")}
            title="Electrical Services"
          />
        </View>
      </View>
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
    width: 100,
    height: 70,
    marginBottom: 10,
    marginTop: 30,
  },
  Grid: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 80,
  },
});
