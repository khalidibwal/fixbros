import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { BottomSheet } from "react-native-btr";
import RoundPro from "../Profile/RoundPro";
import Button from "../Login/Button";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function TechList(props) {
  const [ListTech, setListTech] = useState(null);
  const navigate = useNavigation()

  const getGlobalTechList = () => {
    axios
      .get(`https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV/global_map`)
      .then((resp) => setListTech(resp.data));
  };
  

  useEffect(() => {
    getGlobalTechList();
  }, []);

  return (
    <View style={Styles.bottomSheetContainer}>
      <Text style={Styles.MitraStyle}>Pilih Mitra terdekat anda</Text>

      {ListTech != null ? (
        <ScrollView>
          {ListTech.map((response) => {
            return response.user_tech.map((data) => {
              return data.subcategory.map((resp) => (
                <View style={Styles.Grid2} key={resp.id}>
                  <View style={Styles.profileGap}>
                    <RoundPro
                      source={require("../../assets/login/fixbros1.png")}
                    />
                  </View>
                  <View style={Styles.profileGap}>
                    <Text style={Styles.nameStyle}>{data.name}</Text>
                    <Text style={Styles.nameStyle}>{resp.title}</Text>
                  </View>
                  <View style={Styles.profileGap}>
                    <TouchableOpacity style={Styles.appButtonContainer}>
                      <Text style={Styles.selectStyle}>Select</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ));
            });
          })}
        </ScrollView>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const Styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: "white", // Background color of the bottom sheet
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 1,
    paddingTop: 16,
    maxHeight: 550,
  },
  MitraStyle: {
    fontSize: 16,
    textAlign: "left",
    color: "#396DA8",
    alignContent: "center",
    left:10,
  },
  Grid2: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    margin: 10,
  },
  profileGap: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center", // Align items in the center horizontally
    margin: 15,
  },
  appButtonContainer: {
    elevation: 1,
    backgroundColor: "#5BABE8",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  appButtonText: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  selectStyle: {
    fontSize: 12,
    color: "#fff",
  },
  nameStyle:{
    color: "#396DA8",
  }
});
