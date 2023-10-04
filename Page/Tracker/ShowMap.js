import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { GoogleAPI } from "../API/GoogleAPI";
import MapView, { Marker, Callout } from "react-native-maps";
import MapCard from "../../Component/Card/MapCard";
import Geolocation from "./Geolocation";
import { Card } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Input from "../../Component/Tracker/Input";
import PermissionDenied from "../../Component/Tracker/PermissionDenied";
import { BottomSheet } from "react-native-btr";
import SMCard from "../../Component/Card/SMCard";
// import Input from "../../Component/Login/Input";

const LOCATION_TASK_NAME = "LOCATION_TASK_NAME";
let foregroundSubscription = null;

// Define the background task for location tracking
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error(error);
    PermissionDenied();
  }
  if (data) {
    // Extract location coordinates from data
    const { locations } = data;
    const location = locations[0];
    if (location) {
      console.log("Location in background", location.coords);
    }
  }
});

export default function ShowMap() {
  // Define position state: {latitude: number, longitude: number}
  const navigation = useNavigation();

  let latlng = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  };
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState(null);
  const [mapRegion, setmapRegion] = useState(null);
  const [myMarker, setMapMarker] = useState([]);
  const [dragMarker, setDragMarker] = useState(null);
  const [description, setDescription] = useState("");

  const ShowMarker = () => {
    return myMarker.map((response) => {
      return response.user_tech.map((data) => (
        <Marker
          icon={{
            url: "../../assets/home/technician.png",
          }}
          coordinate={{
            latitude: data.marker.data.lat,
            longitude: data.marker.data.lng,
          }}
          title={data.name}
          key={data.id}
        />
      ));
    });
  };

  // Request permissions right after starting the app
  useEffect(() => {
    setLoading(true);
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync();
      if (foreground.granted)
        await Location.requestBackgroundPermissionsAsync();
    };
    requestPermissions();
    startForegroundUpdate();
  }, []);

  // Start location tracking in foreground
  const startForegroundUpdate = async (data, desc) => {
    // Check if foreground permission is granted
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      console.log("location tracking denied");
      return;
    }
    // Make sure that foreground location tracking is not running
    foregroundSubscription?.remove();
    // Start watching position in real-time
    foregroundSubscription = await Location.watchPositionAsync(
      {
        // For better logs, we set the accuracy to the most sensitive option
        accuracy: Location.Accuracy.BestForNavigation,
      },
      (location) => {
        if (data === undefined) {
          setLoading(false);
          setPosition(location.coords);
          let latlng = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0041,
            longitudeDelta: 0.0021,
          };
          setmapRegion(latlng);
          stopForegroundUpdate();
        } else {
          const latlng = {
            latitude: data.lat,
            longitude: data.lng,
            latitudeDelta: 0.0041,
            longitudeDelta: 0.0021,
          };
          setLoading(false);
          setDescription(desc);
          setmapRegion(latlng);
          setDragMarker(latlng);
          stopForegroundUpdate();
        }
      }
    );
  };

  // Stop location tracking in foreground
  const stopForegroundUpdate = () => {
    foregroundSubscription?.remove();
    setPosition(null);
  };

  const DragMarkerloc = (e) => {
    if (e === null) {
      setmapRegion(e);
    } else {
      setDragMarker(e);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <Image
            source={require("../../assets/icons/fixmelogo5.png")}
            style={styles.loading}
          />
          <Text>Please wait...</Text>
        </>
      ) : (
        <>
          <MapView
            showsUserLocation
            style={{ alignSelf: "stretch", height: "100%" }}
            region={mapRegion}
            followUserLocation={true}
            zoomEnabled={true}
          >
            <Marker
              coordinate={dragMarker ? dragMarker : mapRegion}
              title="Me"
              pinColor="yellow"
              draggable
              onDragEnd={(e) => DragMarkerloc(e.nativeEvent.coordinate)}
            ></Marker>
            {ShowMarker()}
          </MapView>
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <Image
              source={require("../../assets/navigation/back.png")}
              style={styles.backStyle}
            />
          </TouchableOpacity>
          <SMCard text='Confirim Location'/>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    width: 100,
    height: 80,
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
  },
  backStyle: {
    width: 20,
    height: 20,
  },
  input: {
    marginTop: 10,
    borderColor: "gray",
    width: "95%",
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#fff",
  },
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: "white", // Background color of the bottom sheet
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 1,
    paddingTop: 16,
    maxHeight: 550,
  },
});
