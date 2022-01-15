import React, { useState } from "react";
import { StyleSheet,TouchableOpacity, View } from "react-native-web";

const FriendProfileTab2 = ({ user }) => {
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
export default FriendProfileTab2;
