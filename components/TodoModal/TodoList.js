import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todoItems, user, isFriend } = props;
  return (
    <ScrollView style={styles.container}>
      {todoItems.map((e) => (
        <TodoItem
          key={e.id}
          todo={e}
          user={user}
          isFriend={isFriend}
        ></TodoItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    height: "100%",
    width: "100%",
    padding: 10,
  },
});
export default TodoList;
