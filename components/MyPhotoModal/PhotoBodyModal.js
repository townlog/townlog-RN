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
import plus from "../../assets/plus2.png";
import { isLikedPhoto, toggleLikePhoto } from "../../api/furnitures";

const PhotoBodyModal = (props) => {
  const [heart, setHeart] = useState(false);
  const { open, close, photos } = props;
  const { id, title, body } = photos;

  const onHeartClick = () => {
    setHeart(!heart);
    toggleLikePhoto(id);
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
            onRequestClose={close}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalTop}>
                  <Text style={styles.modalTitle}>{title}</Text>
                  <TouchableOpacity
                    style={{
                      width: "10%",
                      height: "50%",
                      position: "absolute",
                      right: "0%",
                    }}
                  >
                    <Image source={plus} style={styles.plusimage}></Image>
                  </TouchableOpacity>
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
                {heart ? (
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
    backgroundColor: "#2196F3",
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

export default PhotoBodyModal;
