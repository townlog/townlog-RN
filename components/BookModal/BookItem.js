import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import book from "../../assets/book4.png";
import BookBodyModal from "./BookBodyModal";

const BookItem = ({ books, user, bookModalclose }) => {
  const { title, body, like } = books;
  const [bookbodyModalVisible, setbookbodyModalVisible] = useState(false);

  const openBookBodyModal = () => {
    setbookbodyModalVisible(true);
  };

  const closeBookBodyModal = () => {
    setbookbodyModalVisible(false);
  };
  // const BookClickHandler = () => {};
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={openBookBodyModal}>
        <Image style={styles.image} source={book}></Image>
        <Text style={styles.bookTitle}>{title}</Text>
      </TouchableOpacity>
      <BookBodyModal
        open={bookbodyModalVisible}
        closeBookBodyModal={closeBookBodyModal}
        bookModalclose={bookModalclose}
        books={books}
        user={user}
      ></BookBodyModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "25%",
    width: "25%",
    resizeMode: "contain",
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
  bookTitle: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default BookItem;
