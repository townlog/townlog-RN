import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { acceptFriendRequest } from "../../api/friend.js";

const FriendProfileTab3 = ({ user }) => {
  const AcceptHandler = async () => {
    await acceptFriendRequest(user.id, true);
  };
  const DeclineHandler = async () => {
    await acceptFriendRequest(user.id, false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text>
          {user.nickname} 님의 {user.houseName}
        </Text>
        <View>
          <TouchableOpacity onPress={AcceptHandler}>
            <Text>친구 수락</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={DeclineHandler}>
            <Text>친구 거절</Text>
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
});
export default FriendProfileTab3;
