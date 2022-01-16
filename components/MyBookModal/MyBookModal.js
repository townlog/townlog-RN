import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import BookList from "./MyBookList";
import plus from "../../assets/plus2.png";
import CreateBookModal from "./CreateBookModal";
import { getMyBooks } from "../../api/furnitures";

const MyBookModal = (props) => {
  const { open, close } = props;

  const [createBookModalVisible, setCreateBookModalVisible] = useState(false);
  const [bookItems, setBookItems] = useState([]);
  const getMyBookList = async () => {
    const { books } = await getMyBooks();
    setBookItems(books);
  };

  useEffect(() => {
    getMyBookList();
  }, []);

  const openCreateBookModal = () => {
    setCreateBookModalVisible(true);
  };
  const closeCreateBookModal = () => {
    setCreateBookModalVisible(false);
  };

  return (
    <View>
      {open ? (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={close}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalTop}>
                  <Text style={styles.modalTitle}>My Book List</Text>
                  <TouchableOpacity
                    style={{
                      width: "10%",
                      height: "50%",
                      position: "absolute",
                      right: "0%",
                    }}
                    onPress={openCreateBookModal}
                  >
                    <Image source={plus} style={styles.plusimage}></Image>
                  </TouchableOpacity>
                  <CreateBookModal
                    open={createBookModalVisible}
                    close={closeCreateBookModal}
                    getMyBookList={getMyBookList}
                  ></CreateBookModal>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    height: "90%",
                    width: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  <BookList bookItems={bookItems}></BookList>
                </View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={close}
                >
                  <Text style={styles.textStyle}>close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    flex: 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    height: "90%",
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
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "lightblue",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTop: {
    flex: 0.1,
    width: "100%",
    height: "10%",
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    left: "20%",
    top: "2%",
    color: "lightblue",
  },
  plusimage: {
    height: "100%",
    width: "100%",
    right: "5%",
    resizeMode: "contain",
    tintColor: "lightblue",
  },
});

export default MyBookModal;
