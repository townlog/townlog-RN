import React, { useState, useEffect, useRef } from "react";
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
import { getMe } from "../../api/user";
import { sendMessageWithCreation } from "../../api/chat";
import MyChatItem from "../../components/ChatModal/MyChatItem";

const ChatScreen = ({ navigation, route }) => {
  const { roomId: tempRoomId, friend } = route.params;
  const [roomId, setRoomId] = useState("");
  const [messages, setMessages] = useState([]);

  const [payload, setPayload] = useState("");
  const socket = useRef(io("http://143.248.229.88:5000"));
  const onChangeHandler = (e) => {
    setPayload(e);
  };

  const buttonClickHandler = async () => {
    // if (!roomId) {
    //   const data = await sendMessageWithCreation({
    //     friendId: friend.id,
    //     payload,
    //   });
    //   setRoomId(data?.roomId);
    // } else {
    Alert.alert(socket.current);
    socket.current.emit("send", { user, roomId, payload });
    // }
  };

  useEffect(() => {
    setRoomId(tempRoomId);
    (async () => {
      const { user } = await getMe();

      if (roomId) {
        socket.current.emit("join", { user, roomId });

        socket.current.on("receive", (e) => {
          setMessages([...messages, e]);
        });
      }
    })();
  }, [roomId, socket.current]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.1,
          margin: 30,
          padding: 20,
        }}
      >
        <ScrollView>
          <Text style={styles.title}>채팅방</Text>
          {messages.map((e) => (
            <MyChatItem text={e.payload}></MyChatItem>
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TextInput
          value={payload}
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
