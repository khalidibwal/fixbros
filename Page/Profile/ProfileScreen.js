import React, { useContext } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native"; // Use ScrollView to handle overflow content
import RoundPro from "../../Component/Profile/RoundPro";
import LogButton from "../../Component/Login/LogButton";
import { ContextPrvd } from "../../Context/ContextPrvd";
import { TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  const { users, setUser, names } = useContext(ContextPrvd);
  console.warn(names);
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <Image
        source={require("../../assets/login/fixbros1.png")}
        style={Styles.logo}
      />
      <View style={Styles.Grid2}>
        <RoundPro source={require("../../assets/login/fixbros1.png")} />
        <View style={Styles.profileGap}>
          <Text style={Styles.nameStyle}>{names}</Text>
          <Text style={Styles.ProfileEtc}>Edit Your Profile</Text>
        </View>
      </View>
      <View style={Styles.Grid2}>
        <TouchableOpacity style={Styles.profileIcon}>
          <Image source={require('../../assets/profiles/wallet.png')} />
          <Text style={Styles.profileStyle}>Fix-Wallet</Text>
          <View style={Styles.profileArrowContainer}>
            <Image style={Styles.profileArrow} source={require('../../assets/profiles/click.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={Styles.Grid2}>
        <TouchableOpacity style={Styles.profileIcon}>
          <Image source={require('../../assets/profiles/Account.png')} />
          <Text style={Styles.profileStyle}>Account Setting</Text>
          <View style={Styles.profileArrowContainer}>
            <Image style={Styles.profileArrow} source={require('../../assets/profiles/edit.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={Styles.Grid2}>
        <TouchableOpacity style={Styles.profileIcon}>
          <Image source={require('../../assets/profiles/notif.png')} />
          <Text style={Styles.profileStyle}>Notification</Text>
          <View style={Styles.profileArrowContainer}>
            <Image style={Styles.profileArrow} source={require('../../assets/profiles/click.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={Styles.Grid2}>
        <TouchableOpacity style={Styles.profileIcon}>
          <Image source={require('../../assets/profiles/history.png')} />
          <Text style={Styles.profileStyle}>Transaction History</Text>
          <View style={Styles.profileArrowContainer}>
            <Image style={Styles.profileArrow} source={require('../../assets/profiles/click.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={Styles.Grid2}>
        <TouchableOpacity style={Styles.profileIcon}>
          <Image source={require('../../assets/profiles/rate.png')} />
          <Text style={Styles.profileStyle}>Rate us</Text>
          <View style={Styles.profileArrowContainer}>
            <Image style={Styles.profileArrow} source={require('../../assets/profiles/click.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={Styles.Grid2}>
        <TouchableOpacity style={Styles.profileIcon}>
          <Image source={require('../../assets/profiles/nv.png')} />
          <Text style={Styles.profileStyle}>New Version</Text>
          <View style={Styles.profileArrowContainer}>
            <Image style={Styles.profileArrow} source={require('../../assets/profiles/click.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <LogButton text="logout"/>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  Grid2: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    margin: 10,
  },
  nameStyle: {
    fontSize: 20,
    color: "#888686",
    margin: 15,
    marginVertical: 5, // Add vertical margin to separate the names
  },
  ProfileEtc: {
    fontSize: 10,
    color: "#888686",
    margin: 15,
    marginVertical: 5,
    textTransform: 'capitalize',
  },
  profileGap: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center", // Align items in the center horizontally
  },
  profileStyle: {
    color: '#374151',
    fontSize: 18,
    justifyContent: 'flex-start', // Align text to flex-start
    margin: 10,
  },
  profileIcon: {
    flexDirection: "row", // Make the content inside TouchableOpacity horizontal
    alignItems: "center", // Align items vertically in the center
    justifyContent: 'flex-start', // Align content to flex-start
    margin: 10,
    flex:1
  },
  profileArrowContainer: {
    alignItems: 'flex-end', // Align the image to the right edge
    flex:1
  },
  profileArrow: {
    // No need for justifyContent here
  },
});
