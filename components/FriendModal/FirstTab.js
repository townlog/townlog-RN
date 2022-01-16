import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SearchUser } from "../../api/friend";
import FriendProfileTab1 from "../FriendProfile/FriendProfileTab1";

const FirstTab = () => {
  const [search, setSearch] = useState(false);

  const [frienduser, setFrienduser] = useState("");
  const [name, setName] = useState("");
  const handleOnChange = (e) => {
    setName(e);
  };
  const onSearchClick = async () => {
    const { status, user } = await SearchUser(name);
    Alert.alert(`response ${(status, user)}`);
    if (status) {
      setSearch(true);
      setFrienduser(user);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placehodler="nickname"
        onChangeText={handleOnChange}
      />
      <TouchableOpacity
        style={[styles.button, styles.buttonSearch]}
        onPress={onSearchClick}
      >
        <Text style={{ textAlign: "center" }}>Search</Text>
      </TouchableOpacity>
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        {search ? (
          <FriendProfileTab1 user={frienduser}></FriendProfileTab1>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
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
    backgroundColor: "lightgray",
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
  },
});

export default FirstTab;
