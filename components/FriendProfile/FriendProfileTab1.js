import React, { useState } from "react";
import { makeFriendRequest } from "../../api/friend.js";
import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FriendProfileTab1 = (props) => {
  const navigation = useNavigation();
  const { user, close, accept } = props;
  const [pressed, setPressed] = useState(false);

  const FriendPressHandler = async () => {
    setPressed(true);
    const { status } = await makeFriendRequest(user.id);
    if (status) {
      Alert.alert("친구 요청이 완료되었습니다.");
      return;
    } else {
      Alert.alert("이미 친구입니다.");
    }
  };
  const RoomPressHandler = () => {
    close();
    navigation.getParent().navigate("FriendRoom", { user });
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
          <>
            <TouchableOpacity
              onPress={RoomPressHandler}
              style={[styles.button, styles.buttonBody]}
            >
              <Text style={styles.textStyle}>방 구경</Text>
            </TouchableOpacity>
            {accept && !pressed ? (
              <>
                <TouchableOpacity
                  onPress={FriendPressHandler}
                  style={[styles.button, styles.acceptbuttonBody]}
                >
                  <Text style={styles.textStyle}>친구 추가</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={[styles.button, styles.declinebuttonBody]}
                  activeOpacity={1}
                >
                  <Text style={styles.textStyle}>친구 추가</Text>
                </TouchableOpacity>
              </>
            )}
          </>
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
    height: "80%",
  },
  buttonBody: {
    backgroundColor: "lightblue",
  },
  acceptbuttonBody: {
    backgroundColor: "lightblue",
  },
  declinebuttonBody: {
    backgroundColor: "lightgray",
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
