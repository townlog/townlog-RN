import React, { useState } from "react";
import { makeFriendRequest } from "../../api/friend.js";
import { StyleSheet, TouchableOpacity, View } from "react-native-web";

const FriendProfileTab1 = ({ user }) => {
  const FriendPressHandler = async () => {
    await makeFriendRequest(user.id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text>
          {user.nickname} 님의 {user.houseName}
        </Text>
        <View>
          <TouchableOpacity>
            <Text>방 구경</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={FriendPressHandler}>
            <Text>친구 추가</Text>
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
    padding: 30,
    width: "90%",
    height: "90%",
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
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
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
