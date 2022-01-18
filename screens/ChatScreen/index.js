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
  KeyboardAvoidingView,
} from "react-native";

import io from "socket.io-client";
import { getMe } from "../../api/user";
import { seeRoom, sendMessageWithCreation } from "../../api/chat";
import MyChatItem from "../../components/ChatModal/MyChatItem";
import FriendChatItem from "../../components/ChatModal/FriendChatItem";

const ChatScreen = ({ navigation, route }) => {
  const { roomId: tempRoomId, friend } = route.params;
  const [roomId, setRoomId] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});

  const [payload, setPayload] = useState("");
  const socket = useRef(io("http://54.180.116.252"));
  const onChangeHandler = (e) => {
    setPayload(e);
  };

  const buttonClickHandler = async () => {
    if (!roomId) {
      const data = await sendMessageWithCreation({
        friendId: friend.id,
        payload,
      });
      setRoomId(data?.roomId);
    } else {
      socket.current.emit("send", { user, roomId, payload });
      setMessages([...messages, { user, roomId, payload }]);
      setPayload("");
    }
  };

  useEffect(() => {
    setRoomId(tempRoomId);
    (async () => {
      const { user: tempUser } = await getMe();
      setUser(tempUser);

      if (roomId) {
        const {
          room: { messages },
        } = await seeRoom(roomId);
        setMessages(messages);

        socket.current.emit("join", { user: tempUser, roomId });

        socket.current.on("receive", (e) => {
          setMessages((msg) => msg.concat(e));
        });
      }
    })();
  }, [roomId, socket.current]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 7,
          margin: 10,
          padding: 10,
          justifyContent: "center",
        }}
      >
        <Text style={styles.title}>{friend.nickname}님과의 대화</Text>
        <ScrollView
          style={{ flex: 1, padding: 10, width: "100%", height: "100%" }}
        >
          {messages.map((e) => (
            // <MyChatItem text={e.payload}></MyChatItem>
            <>
              {e.user.id === user.id ? (
                <MyChatItem text={e.payload}></MyChatItem>
              ) : (
                <FriendChatItem
                  text={e.payload}
                  friend={friend}
                ></FriendChatItem>
              )}
            </>
          ))}
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}
      >
        <TextInput
          value={payload}
          placeholder="채팅을 입력하세요."
          placeholderTextColor="lightgray"
          style={styles.input}
          onChangeText={onChangeHandler}
        />
        <TouchableOpacity
          style={[styles.button, styles.buttonSearch]}
          onPress={buttonClickHandler}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    padding: 10,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    color: "lightblue",
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
    backgroundColor: "lightblue",
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
    backgroundColor: "white",
  },
});

export default ChatScreen;
