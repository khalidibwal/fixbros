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


export default function ChooseCard(props) {
  const navigation = useNavigation();
  return (
    <View>
      <Card containerStyle={Styles.container}>
        <View style={Styles.marTop}>
            <TouchableOpacity style={Styles.appButtonContainer} onPress={()=> navigation.navigate('chat',{
              IdUser : props.userID
            })}>
              <Text style={Styles.appButtonText}>Panggil Sekarang</Text>
            </TouchableOpacity>
        </View>
        <View style={Styles.marTop}>
            <TouchableOpacity style={Styles.appButtonContainer} onPress={()=> navigation.navigate('Tracker')}>
              <Text style={Styles.appButtonText}>Booking / Jadwalkan</Text>
            </TouchableOpacity>
        </View>
        <View style={Styles.marTop}>
            <TouchableOpacity style={Styles.appButtonCancel} onPress={()=> navigation.goBack()}>
              <Text style={Styles.appButtonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection:'row',
    backgroundColor: "#5BABE8",
    height: 350,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    top:200
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
  appButtonCancel: {
    elevation: 5,
    backgroundColor: "#BEC5D1",
    borderRadius: 10,
    paddingVertical: 7,
    marginTop: 30,
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
