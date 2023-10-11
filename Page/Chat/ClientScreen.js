import React, { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';

export default function ClientScreen() {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    const newMessage = {
      text: inputMessage,
      sender: 'Client',
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ alignSelf: item.sender === 'Client' ? 'flex-end' : 'flex-start' }}>
            <View style={{ backgroundColor: item.sender === 'Client' ? 'blue' : 'green', padding: 10, borderRadius: 10, margin: 5 }}>
              <Text style={{ color: 'white' }}>{item.text}</Text>
            </View>
          </View>
        )}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10 }}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
}
