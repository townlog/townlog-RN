import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import { getRoomId } from "../../api/chat";

const FriendProfileTab2 = ({ user, close }) => {
  const navigation = useNavigation();

  const RoomPressHandler = () => {
    navigation.getParent().navigate("FriendRoom", { user });
    close();
  };

  const ChatPressHandler = async () => {
    const { roomId } = await getRoomId(user.id);
    navigation.getParent().navigate("Chat", { roomId, friend: user });
    close();
  };

  return (
    <View style={styles.profile}>
      <Text style={styles.title}>
        {user.nickname} 님의 방 "{user.houseName}"
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={RoomPressHandler}
          style={[styles.button, styles.buttonBody]}
        >
          <Text style={styles.textStyle}>방 구경</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ChatPressHandler}
          style={[styles.button, styles.buttonBody]}
        >
          <Text style={styles.textStyle}>채팅</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap-reverse",
  },
  profile: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    width: "90%",
    height: "15%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    margin: 5,
    elevation: 2,
    width: "40%",
    height: "70%",
  },

  buttonBody: {
    backgroundColor: "lightblue",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
  textStyle: {
    paddingTop: 7,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default FriendProfileTab2;
