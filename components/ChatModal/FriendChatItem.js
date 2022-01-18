import React, { useState } from "react";
import { makeFriendRequest } from "../../api/friend.js";
import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FriendChatItem = ({ text, friend }) => {
  return (
    <View style={styles.container}>
      <View style={styles.chat}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Text style={{ fontWeight: "bold" }}>{friend.nickname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginVertical: 20,
  },
  chat: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    position: "absolute",
    left: "0%",
    width: "90%",
    height: "auto",
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
  },
  text: {
    fontSize: 12,
    color: "black",
  },
});
export default FriendChatItem;
