import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { getMyBooks } from "../../api/furnitures";
import BookItem from "./BookItem";

const BookList = (props) => {
  const { bookItems, user, bookModalclose } = props;

  return (
    <View style={styles.container}>
      {bookItems.map((e) => (
        <BookItem
          key={e.id}
          books={e}
          user={user}
          bookModalclose={bookModalclose}
        ></BookItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default BookList;
