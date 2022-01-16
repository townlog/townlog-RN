import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { getMyBooks } from "../../api/furnitures";
import BookItem from "./BookItem";

const BookList = () => {
  const [BookList, setBookList] = useState([]);
  const getMyBookList = async () => {
    const { books } = await getMyBooks();
    setBookList(books);
  };
  useEffect(() => {
    getMyBookList();
  }, []);
  return (
    <View style={styles.container}>
      {BookList.map((e) => (
        <BookItem books={e}></BookItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginTop: 50,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default BookList;
