import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { GoogleAPI } from "../API/GoogleAPI";
import { ContextPrvd } from "../../Context/ContextPrvd";
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import MapView, {
  PROVIDER_GOOGLE,
  AnimatedRegion,
  Marker,
} from "react-native-maps";
import MapCard from "../../Component/Card/MapCard";
import Geolocation from "./Geolocation";

const LOCATION_TASK_NAME = "LOCATION_TASK_NAME";
let foregroundSubscription = null;

// Define the background task for location tracking
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error(error);
    return;
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

export default function Tracker() {
  // Define position state: {latitude: number, longitude: number}
  const [openSheet, setOpenSheet] = useState(false);
  const snapPoints = ["35%"];
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

  const liveMarker = () => {
    axios
      .get(`https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV/global_map`)
      .then((data) => setMapMarker(data.data));
  };

  const ShowMarker = () => {
    return myMarker.map((response) => (
      <Marker
        icon={{
          url: "../../assets/home/technician.png",
        }}
        coordinate={{
          latitude: response.marker.data.lat,
          longitude: response.marker.data.lng,
        }}
        title={response.technician}
        key={response.id}
      />
    ));
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
    liveMarker();
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

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <Image
            source={require("../../assets/login/fixmelogin.png")}
            style={styles.loading}
          />
          <Text>Please wait...</Text>
        </>
      ) : (
        <MapView
          showsUserLocation
          style={{ alignSelf: "stretch", height: "100%" }}
          region={mapRegion}
          followUserLocation={true}
          zoomEnabled={true}
          scrollEnabled={false}
        >
          <Marker
            coordinate={dragMarker ? dragMarker : mapRegion}
            pinColor="yellow"
            draggable
            onDragEnd={(e) => DragMarkerloc(e.nativeEvent.coordinate)}
          />
          {ShowMarker()}
        </MapView>
      )}
      <BottomSheet
        snapPoints={snapPoints}
        enableHandlePanningGesture={true}
        enablePanDownToClose={true}
        onClose={() => setOpenSheet(false)}
        backgroundStyle={{ backgroundColor: "#5BABE8" }}
      >
        <BottomSheetView>
          {/* <View>
            <MapCard
              GetLocation={startForegroundUpdate}
              mapRegion={mapRegion}
            />
          </View> */}
          {dragMarker ? (
            <View>
              <Geolocation
                latitude={dragMarker.latitude}
                longitude={dragMarker.longitude}
              />
              <TextInput placeholder="Tambahkan Pesan" style={styles.notes}/>
              <TouchableOpacity style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Confirm Location</Text>
              </TouchableOpacity>

            </View>
          ) : (
            <Text style={styles.locator}>
              Hold and Drag The Marker to Your exact Location
            </Text>
          )}
        </BottomSheetView>
      </BottomSheet>
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
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginTop: 15,
  },
  separator: {
    marginVertical: 18,
    marginBottom: 20,
  },
  loading: {
    width: 100,
    height: 80,
  },
  locator: {
    marginTop: 35,
    justifyContent: "center",
    alignSelf: "center",
    color: "#fff",
  },
  notes: {
    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 5,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#396DA8",
    borderRadius: 20,
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
});
