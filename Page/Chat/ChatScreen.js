import React, { useState, useCallback, useEffect, useContext } from "react";
import { ContextPrvd } from "../../Context/ContextPrvd";
import { GiftedChat } from "react-native-gifted-chat";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const { users, setUser, myToken, userId, setUserId } = useContext(ContextPrvd);
  const route = useRoute();
  const Technician = route.params.data;

  const GetMessage = () => {
    axios
      .get(`https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV/messagetbl`,{
        params:{
          user_digantilagi_id:userId,
          user_tech_id:Technician
        }
      })
      .then((data) => { 
        const newMessage = data.data.map((message) => ({ _id: message.id, createdAt: message.created_at, text: message.message, user: { _id: message.global_map_id, name: userId !== Technician  ? users : 'Technician' } }))
        if(userId != 0){
          setMessages(newMessage)
        }
        else{
          console.warn("No Token Detected")
        }     
      })
      .catch((eror) => console.warn(eror));
  };

  useEffect(() => {
    GetMessage();
    console.warn(userId)
  }, []);

  const onSend = useCallback((messages = []) => {
    const random_num = Math.floor(Math.random() * 1000000);
    axios
      .post(`https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV/messagetbl`, {
        user_digantilagi_id: userId,
        user_tech_id: Technician,
        message: messages[0].text,
        message_id : random_num // Assuming you're sending the first message in the array
        // Include any other data you need to send
      })
      .then((response) => {
        // Handle the success response
        console.log("Message sent successfully:", response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error("Error sending message:", error);
      });
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: userId,
      }}
    />
  );
}
