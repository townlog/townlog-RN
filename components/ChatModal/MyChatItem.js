import React, { useState } from "react";
import { makeFriendRequest } from "../../api/friend.js";
import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MyChatItem = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.chat}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  chat: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    height: "100%",
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
  },
  text: {
    fontSize: 10,
    color: "black",
  },
});
export default MyChatItem;
