import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Button from "../../Component/Login/Button";
import Googlebtn from "../../Component/Login/Googlebtn";
import { BottomSheet } from "react-native-btr";
import InputLogin from "../../Component/Login/InputLogin";
import LoginView from "../../Component/Login/View/LoginView";

export default function NewLogin() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = React.useState(0);

  const layout = useWindowDimensions();
  const [routes] = React.useState([
    { key: "first", title: "Create Account" },
    { key: "second", title: "Login" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={Styles.indicator}
      style={Styles.tabBar}
      labelStyle={Styles.label}
    />
  );

  const renderScene = SceneMap({
    first: LoginView,
    second: LoginView,
  });

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  return (
    <View style={Styles.container}>
      <Image
        source={require("../../assets/icons/fixmelogo5.png")}
        style={Styles.logo}
      />
      <View>
        <Text style={Styles.welfont}>Welcome</Text>
        <Text style={Styles.subfont}>
          Before enjoying our Maintenance & services Please register first
        </Text>
      </View>
      <View style={Styles.buttonSpace}>
        <Button
          text="Create Account"
          onPress={() => toggleBottomNavigationView()}
        />
        <Button text="Login" />
        <Text style={Styles.termscondition}>
          By logging in or registering, you have agreed to the Terms and
          Conditions and Privacy Policy.
        </Text>
      </View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={Styles.bottomSheetContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          style={Styles.tabView}
          renderTabBar={renderTabBar}
        />
        </View>
        
      </BottomSheet>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: 'white', // Background color of the bottom sheet
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 1,
    paddingTop: 16,
    maxHeight:550
  },
  tabView: {
    flex: 1, // Ensure the TabView takes the available space
    backgroundColor: 'transparent', // Make the TabView transparent
  },
  logo: {
    justifyContent: "center",
    alignSelf: "center",
    width: 250,
    height: 300,
    marginTop: 100,
    resizeMode: "contain",
  },
  welfont: {
    color: "#1F2937",
    textAlign: "center",
    fontSize: 24,
  },
  subfont: {
    color: "#1F2937",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "300",
  },
  buttonSpace: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  termscondition: {
    color: "#1F2937",
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
    fontWeight: "300",
  },
  inputText: {
    textAlign: "left",
  },
  tabBar: {
    backgroundColor: 'white',
  },
  indicator: {
    backgroundColor: '#5BABE8', // Change the indicator color
  },
  label:{
    color:'black'
  }
});
