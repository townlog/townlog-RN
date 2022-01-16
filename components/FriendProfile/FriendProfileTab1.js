import React, { useState } from "react";
import { makeFriendRequest } from "../../api/friend.js";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const FriendProfileTab1 = ({ user }) => {
  const FriendPressHandler = async () => {
    await makeFriendRequest(user.id);
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
          <TouchableOpacity style={[styles.button, styles.buttonBody]}>
            <Text style={styles.textStyle}>방 구경</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={FriendPressHandler}
            style={[styles.button, styles.buttonBody]}
          >
            <Text style={styles.textStyle}>친구 추가</Text>
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
export default FriendProfileTab1;
