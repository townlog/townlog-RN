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
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { isLikedBook, toggleLikeBook } from "../../api/furnitures";
import LikeModal from "../LikeModal/LikeModal";

const BookBodyModal = (props) => {
  const [heart, setHeart] = useState(false);
  const { open, books, user, closeBookBodyModal, bookModalclose } = props;
  const { id, title, body, likes } = books;

  const onHeartClick = () => {
    setHeart(!heart);
    toggleLikeBook(id);
  };

  const [LikeModalVisible, setLikeModalVisible] = useState(false);

  const openLikeModal = () => {
    setLikeModalVisible(true);
  };

  const closeLikeModal = () => {
    setLikeModalVisible(false);
  };

  useEffect(() => {
    (async () => {
      setHeart(await isLikedBook(id));
    })();
  }, []);

  return (
    <View>
      {open ? (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={closeBookBodyModal}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalTop}>
                  <Text style={styles.modalTitle}>{title}</Text>
                </View>
                <ScrollView
                  style={{
                    flex: 1,
                    height: "100%",
                    width: "100%",
                    alignContent: "center",
                    padding: 20,
                    margin: 30,
                  }}
                >
                  <Text> {body} </Text>
                </ScrollView>
                {user === null ? (
                  <>
                    <AntDesign
                      onPress={openLikeModal}
                      name="heart"
                      size={24}
                      color="red"
                    />
                    <LikeModal
                      open={LikeModalVisible}
                      closeLikeModal={closeLikeModal}
                      closeBodyModal={closeBookBodyModal}
                      Modalclose={bookModalclose}
                      likes={likes}
                    ></LikeModal>
                  </>
                ) : heart ? (
                  <AntDesign
                    onPress={onHeartClick}
                    name="heart"
                    size={24}
                    color="red"
                  />
                ) : (
                  <AntDesign
                    onPress={onHeartClick}
                    name="hearto"
                    size={24}
                    color="black"
                  />
                )}

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={closeBookBodyModal}
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
    flex: 0.4,
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
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
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

export default BookBodyModal;
