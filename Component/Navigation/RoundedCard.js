import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

 const RoundedCard = ({ title, content, cardWidth  }) => {
    return (
        <View style={[styles.container,{ width: cardWidth }]}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
    );
  };

  const { height } = Dimensions.get('window'); // Get the screen height

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      width: '100%',

    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 16,
      marginBottom: 50,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    content: {
      fontSize: 16,
    },
  });
  

  export default RoundedCard;