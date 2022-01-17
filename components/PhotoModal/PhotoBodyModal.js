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
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import plus from "../../assets/plus2.png";
import { isLikedPhoto, toggleLikePhoto } from "../../api/furnitures";
import LikeModal from "../LikeModal/LikeModal";

const PhotoBodyModal = (props) => {
  const { open, photo, user, closePhotoBodyModal, photoModalclose } = props;
  const { id, title, body, images, likes } = photo;
  const [heart, setHeart] = useState(false);
  const onHeartClick = () => {
    setHeart(!heart);
    toggleLikePhoto(id);
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
      setHeart(await isLikedPhoto(id));
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
            onRequestClose={closePhotoBodyModal}
          >
            <View style={styles.centeredView}>
              <KeyboardAvoidingView
                behavior={"padding"}
                style={styles.modalView}
              >
                <View style={styles.modalTop}>
                  <Text style={styles.input}>{title}</Text>
                </View>
                <View style={styles.photoView}>
                  <Image
                    source={{ uri: images[0].image }}
                    style={styles.photo}
                  />
                </View>
                <View style={styles.bodyinputView}>
                  <ScrollView style={styles.scroll}>
                    <Text style={styles.bodyinput}>{body}</Text>
                  </ScrollView>
                </View>
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
                      closeBodyModal={closePhotoBodyModal}
                      Modalclose={photoModalclose}
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

                <View style={styles.clickView}>
                  <Pressable style={[styles.button, styles.buttonClose]}>
                    <Text style={styles.textStyle}>좋아요</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={closePhotoBodyModal}
                  >
                    <Text style={styles.textStyle}>close</Text>
                  </Pressable>
                </View>
              </KeyboardAvoidingView>
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
  modalTop: {
    flex: 1,
    width: "100%",
    height: "5%",
    flexDirection: "row",
  },
  input: {
    height: "100%",
    width: "100%",
    position: "absolute",
    left: "0%",
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
  },

  camera: {
    width: "10%",
    height: "100%",
    position: "absolute",
    right: "3%",
  },
  photoView: {
    flex: 10,
    padding: 10,
    height: "100%",
    width: "100%",

    margin: 20,
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 2,
    borderColor: "lightblue",
  },
  photo: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "contain",
  },
  bodyinputView: {
    flex: 5,
    height: "100%",
    width: "100%",
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: "lightblue",
  },
  scroll: {
    height: "100%",
    width: "100%",
    alignContent: "center",
  },

  bodyinput: {
    height: "100%",
    width: "100%",
    textAlign: "center",
    alignContent: "center",
  },
  clickView: {
    flex: 2,
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: "50%",
    width: "40%",
    margin: 10,
  },

  buttonClose: {
    backgroundColor: "lightblue",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  modalTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    top: "2%",
    color: "lightblue",
  },
});

export default PhotoBodyModal;
