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
} from "react-native";
import { SearchUser } from "../../api/friend";
import FriendProfileTab1 from "../FriendProfile/FriendProfileTab1";

const FirstTab = () => {
  const [search, setSearch] = useState(false);

  const [frienduser, setFrienduser] = useState("");
  const [name, setName] = useState("");
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const onSearchClick = async () => {
    const { status, user } = await SearchUser(name);
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
        onChange={handleOnChange}
      />
      <TouchableOpacity
        style={[styles.button, styles.buttonSearch]}
        onPress={onSearchClick}
      >
        <Text style={{ textAlign: "center" }}>Search</Text>
      </TouchableOpacity>
      <View style={{ height: "100%", width: "100%" }}>
        {search ? (
          <View style={{ height: "100%", width: "100%" }}>
            <FriendProfileTab1 user={frienduser}></FriendProfileTab1>
          </View>
        ) : (
          <Text>none</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    margin: 10,
    padding: 10,
    elevation: 2,
    borderRadius: 20,
    height: 40,
    width: "20%",
    right: "2%",
  },

  buttonSearch: {
    backgroundColor: "lightgray",
  },
  input: {
    height: 40,
    width: "70%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "lightgray",
  },
});

export default FirstTab;
