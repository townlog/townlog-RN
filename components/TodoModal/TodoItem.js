import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { toggleTodo } from "../../api/todo";

const TodoItem = ({ todo, user, isFriend }) => {
  const { id, quest, finish } = todo;
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(finish);
  }, []);

  const finishHandler = (id) => {
    setCheck(!check);
    toggleTodo(id);
  };
  return (
    <>
      {check ? (
        <View style={styles.finishprofile}>
          <AntDesign
            name="check"
            size={24}
            color="red"
            onPress={finishHandler}
          />
          <ScrollView>
            <Text style={styles.finishtitle}>{quest}</Text>
          </ScrollView>
        </View>
      ) : (
        <View style={styles.profile}>
          <AntDesign
            name="check"
            size={24}
            color="lightgray"
            onPress={finishHandler}
          />
          <ScrollView>
            <Text style={styles.title}>{quest}</Text>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    paddingBottom: 10,
    margin: 10,
  },
  finishtitle: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontSize: 13,
    paddingBottom: 10,
    margin: 10,
  },
  container: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  finishprofile: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderRadius: 20,
    padding: 8,
    marginBottom: 15,
    width: "100%",
    height: "15%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  profile: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    width: "100%",
    height: "15%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  view: {
    flex: 1,
    flexDirection: "row",
  },
  touch: {
    height: "100%",
    width: "100%",
  },
  image: {
    height: "50%",
    width: "100%",
    resizeMode: "contain",
  },
  photoTitle: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default TodoItem;
