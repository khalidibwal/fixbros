import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ContextPrvd } from "../../Context/ContextPrvd";
import Slider from "../../Component/Home/Slider";
import CardHome from "../../Component/Card/CardHome";
import SearchInput from "../../Component/Home/SearchInput";
import Location from "../../Component/Home/Location";
import Services from "../../Component/Home/Services";
import Geolocation from "../Tracker/Geolocation";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [mySlider, setSlider] = useState([]);
  const navigation = useNavigation();
  const { myToken, userId, setUserId, setNames } = useContext(ContextPrvd);
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
        setNames(res.data.name)
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
        source={require("../../assets/login/fixbros1.png")}
        style={Styles.logo}
      />
      <Location/>
      <SearchInput />
      <View>
        <Slider mySlider={mySlider} />
        {/* <Services/> */}
      </View>

      <View style={Styles.Grid}>
        <CardHome
          source={require("../../assets/home/hammer.png")}
          onPress={() => cardSelected("Selected")}
        />

        <CardHome
          source={require("../../assets/home/pipe.png")}
          onPress={() => cardSelected("Selected")}
        />
        <CardHome source={require("../../assets/home/phone.png")} />
      </View>
      <View style={Styles.Grid}>
        <CardHome
          source={require("../../assets/home/ac.png")}
          onPress={() => cardSelected("Selected")}
        />

        <CardHome
          source={require("../../assets/home/seed.png")}
          onPress={() => cardSelected("Selected")}
        />
        <CardHome source={require("../../assets/home/battery.png")} />
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
    margin: 10,
    top: 50,
  },
});
