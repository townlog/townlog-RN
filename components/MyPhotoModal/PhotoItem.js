import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import music from "../../assets/music.png";
import PhotoBodyModal from "./PhotoBodyModal";

const photoItem = ({ photos }) => {
  const { title, body, like } = photos;
  const [photobodyModalVisible, setphotobodyModalVisible] = useState(false);

  const openPhotoBodyModal = () => {
    setphotobodyModalVisible(true);
  };

  const closePhotoBodyModal = () => {
    setphotobodyModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={openPhotoBodyModal}>
        <Image style={styles.image} source={music}></Image>
        <Text style={styles.photoTitle}>{title}</Text>
      </TouchableOpacity>
      <PhotoBodyModal
        open={photobodyModalVisible}
        close={closePhotoBodyModal}
        photos={photos}
      ></PhotoBodyModal>
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
  photoTitle: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default photoItem;
