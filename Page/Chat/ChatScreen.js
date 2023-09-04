import React, { useState, useCallback, useEffect, useContext } from "react";
import { ContextPrvd } from "../../Context/ContextPrvd";
import { GiftedChat } from "react-native-gifted-chat";
import axios from "axios";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const { users, setUser, myToken, userId, setUserId } = useContext(ContextPrvd);

  const GetMessage = () => {
    axios
      .get(`https://x8ki-letl-twmt.n7.xano.io/api:8sVdsi3L/chat/{chat_id}`,{
        params:{
          user_id:userId,
          global_id:9
        }
      })
      .then((data) => { 
        const newMessage = data.data.map((message) => ({ _id: message.id, createdAt: message.created_at, text: message.message, user: { _id: message.global_map_id, name: 'da' } }))
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
  }, []);

  const onSend = useCallback((messages = []) => {
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
