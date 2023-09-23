import React from "react";
import { Card } from "@rneui/themed";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RoundedCard from "../Navigation/RoundedCard";

export default function DetailCard(props) {
  const navigation = useNavigation();
  return (
    <View>
      <Card containerStyle={Styles.container}>
        <Text style={Styles.catTXT}>Pilih Kebutuhan Anda Berdasarkan</Text>
        <Text style={Styles.catTXT}>Kategori Berikut : </Text>
        {props.loading ? (
            <>
            <ActivityIndicator size="large" style={Styles.loading} />
            <Text style={Styles.loadingTxt}>Please Wait...</Text>
          </>
        ) : (     
          props.techdata.map((data) => (
            <View style={Styles.marTop}>
            <TouchableOpacity style={Styles.appButtonContainer} onPress={()=> navigation.navigate('Tracker')}>
              <Text style={Styles.appButtonText}>{data.name}</Text>
            </TouchableOpacity>
            </View>
          ))
        )}
       
      {/* <RoundedCard cardWidth={Styles.container.width}/> */}
      </Card>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#5BABE8",
    flexDirection: "row",
    height: 500,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 0,
    top: 100,
    borderRadius: 20,
  },
  subCard: {
    borderRadius: 10,
    backgroundColor: "#396DA8",
    justifyContent: "center",
    alignSelf: "center",
    height: 50,
    width: 400,
  },
  fontCard: {
    textAlign: "center",
    color: "#fff",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#396DA8",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
    paddingHorizontal: 80,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "capitalize",
  },
  subButtonText: {
    color: "#fff",
    fontSize: 12,
    alignSelf: "center",
  },
  loading: {
    justifyContent: "center",
    alignSelf: "center",
  },
  loadingTxt:{
    color:'#fff'
  },
  catTXT:{
    color: "#fff",
    fontSize: 16,
    alignSelf: "center",
  },
  marTop:{
    marginTop:15
  }
});
