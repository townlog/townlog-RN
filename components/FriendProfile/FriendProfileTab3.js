import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import { acceptFriendRequest } from "../../api/friend.js";

const FriendProfileTab3 = ({ user, getRequestList }) => {
  const AcceptHandler = async () => {
    await acceptFriendRequest(user.id, true);
    Alert.alert(`${user.nickname}님의 친구 요청을 수락했습니다.`);
    await getRequestList();
  };
  const DeclineHandler = async () => {
    await acceptFriendRequest(user.id, false);
    Alert.alert(`${user.nickname}님의 친구 요청을 거절했습니다.`);
    await getRequestList();
  };

  return (
    <View style={styles.container}>
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
            onPress={AcceptHandler}
            style={[styles.button, styles.buttonBody]}
          >
            <Text style={styles.textStyle}>친구 수락</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={DeclineHandler}
            style={[styles.button, styles.buttonBody]}
          >
            <Text style={styles.textStyle}>친구 거절</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 13,
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
export default FriendProfileTab3;
