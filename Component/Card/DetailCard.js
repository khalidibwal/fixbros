import React from "react";
import { Card } from "@rneui/themed";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

export default function DetailCard(props) {
  return (
    <View>
      <Card containerStyle={Styles.container}>
        {props.loading ? (
            <>
            <ActivityIndicator size="large" style={Styles.loading} />
            <Text style={Styles.loadingTxt}>Loading...</Text>
          </>
        ) : (     
          props.techdata.map((data) => (
            <TouchableOpacity style={Styles.appButtonContainer}>
              <Text style={Styles.appButtonText}>{data.name}</Text>
              <Text style={Styles.subButtonText}>{data.title}</Text>
            </TouchableOpacity>
          ))
        )}
      </Card>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#5BABE8",
    flexDirection: "row",
    height: 700,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 0,
    top: 60,
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
  }
});
