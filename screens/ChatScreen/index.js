import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

import io from "socket.io-client";
import MyChatItem from "../../components/ChatModal/MyChatItem";

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  const [userInput, setUserInput] = useState("");

  const onChangeHandler = (e) => {
    setUserInput(e);
  };

  const buttonClickHandler = () => {
    setUserInput("");
    const e = { message: userInput };
    setMessages([...messages, e]);
  };

  useEffect(() => {
    const socket = io("http://143.248.229.80:5000");

    socket.emit("join", { user: { id: 1 }, roomId: 1 });

    socket.on("receive", (e) => {
      setMessages([...messages, e]);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 3,
          margin: 30,
          padding: 20,
        }}
      >
        <ScrollView>
          <Text style={styles.title}>채팅방</Text>
          {messages.map((e) => (
            <MyChatItem text={e.message}></MyChatItem>
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TextInput
          value={userInput}
          placeholderTextColor="lightgray"
          style={styles.input}
          onChangeText={onChangeHandler}
        />
        <TouchableOpacity
          style={[styles.button, styles.buttonSearch]}
          onPress={buttonClickHandler}
        >
          <Text style={{ textAlign: "center" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    margin: 15,
    padding: 10,
    textAlign: "center",
  },
  button: {
    margin: 7,
    padding: 10,
    elevation: 2,
    borderRadius: 20,
    height: 40,
    width: "20%",
    top: "3%",
  },

  buttonSearch: {
    backgroundColor: "lightgray",
    top: "3%",
  },
  input: {
    height: 40,
    width: "70%",
    margin: 7,
    borderWidth: 1,
    padding: 10,
    borderColor: "lightgray",
    top: "3%",
  },
});

export default ChatScreen;
