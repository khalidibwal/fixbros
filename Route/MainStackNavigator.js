import React, {useContext} from "react";
import { StyleSheet, Image, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome,MaterialIcons } from "@expo/vector-icons";
import { ContextPrvd } from "../Context/ContextPrvd";
import Login from "../Page/Auth/Login";
import NewLogin from "../Page/Auth/NewLogin";
import SignUp from "../Page/Auth/SignUp";
import HomeScreen from "../Page/Home/HomeScreen";
import ProfileScreen from "../Page/Profile/ProfileScreen";
import PreviousPage from "../Component/Navigation/PreviousPage";
import { BackButton, HomeButton, ChatButton, ProfileButton } from "../Component/Navigation/Icons";
import Selected from "../Page/Select/Selected";
import Tracker from "../Page/Tracker/Tracker";
import ChatScreen from "../Page/Chat/ChatScreen";
import SignupView from "../Component/Login/View/SignupView";
import GoogleAuthTest from "../Component/Login/GoogleAutTest";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#fff",
          borderRadius: 15,
          bottom: 10,
          left: 8,
          right: 8,
          elevation: 1,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Back"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BackButton />
          ),
        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <HomeButton />
          ),
        }}
      />

      <Tab.Screen
        name="chat"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ChatButton/>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ProfileButton/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function MainStackNavigator() {
  const {myToken} = useContext(ContextPrvd)
  return (
    <NavigationContainer>
      {myToken === null ?<Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={NewLogin}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        </Stack.Navigator>
        :
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen
          name="Selected"
          component={Selected}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tracker"
          component={Tracker}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="chat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>}
    </NavigationContainer>
  );
}

const Styles = StyleSheet.create({});
