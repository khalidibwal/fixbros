import React, { useState, useEffect, useContext, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { ContextPrvd } from '../../Context/ContextPrvd';
import { useRoute } from "@react-navigation/native";
import axios from 'axios';
import Pubnub from 'pubnub';
import BidCard from '../../Component/Card/BidCard';

const ClientScreen = () => {
  const [messages, setMessages] = useState([]);
  const { users, userId } = useContext(ContextPrvd);
  const route = useRoute();
  const Technician = route.params.data;

  const pubnub = new Pubnub({
    publishKey: "pub-c-fb353d26-bd3b-4311-92a4-5ce0da1910dd",
    subscribeKey: "sub-c-78628a77-e9f1-4328-90fe-4facae07b943",
    uuid: "sec-c-NTNjYWRjMjQtNzNlOS00ZWQ0LWFiYzgtYjc0ZDhjYmNkZDEy",
    userId: userId
  });

  const fetchMessages = () => {
    axios
      .get(`https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV/messagetbl`, {
        params: {
          user_digantilagi_id: userId,
          user_tech_id: Technician
        }
      })
      .then((data) => {
        const newMessage = data.data.map((message) => ({
          _id: `${message.id}_${message.created_at}`,
          createdAt: message.created_at,
          text: message.message,
          user: { _id: message.user_digantilagi_id, name: userId !== Technician ? users : 'Technician' }
        }));
        setMessages(newMessage);
      })
      .catch((error) => console.warn(error));
  };

  useEffect(() => {
    fetchMessages();
    pubnub.subscribe({
      channels: ['my_chat_channel'],
    });

    pubnub.addListener({
      message: (message) => {
        fetchMessages();
      },
    });

    return () => {
      pubnub.unsubscribeAll();
    };
  }, [userId, Technician]);

  const onSend = useCallback((newMessages = []) => {
    const random_num = Math.floor(Math.random() * 1000000);
    axios
      .post(`https://x8ki-letl-twmt.n7.xano.io/api:kguvDcNV/messagetbl`, {
        user_digantilagi_id: userId,
        user_tech_id: Technician,
        message: newMessages[0].text,
        message_id: random_num
      })
      .then((response) => {
        console.log("Message sent successfully:", response.data);
        // Fetch messages after sending a new message to update the chat
        fetchMessages();
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });

    pubnub.publish({
      channel: 'my_chat_channel',
      message: newMessages[0],
    });
  });

  const CustomInputToolbar = (props) => {
    <BidCard title="send" onPress={(message)=> onSend(message)}/>
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: userId,
      }}
    />
  );
};

export default ClientScreen;
