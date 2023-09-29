import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Linking } from "react-native";
import {encode} from 'base-64'
import axios from "axios";

const PaymentScreen = () => {
  const [paymentStatus, setPaymentStatus] = useState("");
  const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString());

  const apiUrl = "https://app.sandbox.midtrans.com/snap/v1/transactions";
  const username = "SB-Mid-server-0QSqUhncY11kMTVqcky7qa-q";
  const password = "";

  const requestData = {
    "transaction_details": {
      "order_id": `ORDER-110-${Date.now()}`,
      "gross_amount": 1000
    },
    "credit_card": {
      "secure": true
    }
  };

  const authHeader = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${encode(`${username}:${password}`)}`, // Encode username and password in base64
    },
  };
  const initiatePayment = async () => {
       
      axios
        .post(apiUrl, requestData, authHeader)
        .then((response) => {
          // Handle the API response here
          console.warn(response.data);
          Linking.openURL(response.data.redirect_url);
        })
        .catch((error) => {
          // Handle any errors here
          console.error(error.response.data); // Log the response data
          alert("please try again later")
        });
  
}




  return (
    <View>
      <View style={Styles.back}>
        <Text>{paymentStatus}</Text>
        <Button title="Initiate Payment" onPress={initiatePayment} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  back: {
    marginTop: 30,
  },
});

export default PaymentScreen;
