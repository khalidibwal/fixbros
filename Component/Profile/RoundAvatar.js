import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const RoundAvatar = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={props.source}
        style={styles.image}
      >
        {/* You can add additional content or text on top of the image here */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30, // Adjust the width of the rounded container
    height: 30, // Adjust the height of the rounded container
    borderRadius: 100, // Half of the width or height to make it circular
    overflow: 'hidden', // Clip the content to fit within the rounded shape
  },
  image: {
    flex: 1, // Make the image fill the entire container
    resizeMode: 'cover', // Adjust the resizeMode as needed (cover, contain, stretch, etc.)
  },
});

export default RoundAvatar;
