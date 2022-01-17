import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import camera from "../../assets/camera.png";
import PhotoBodyModal from "./PhotoBodyModal";

const photoItem = ({ photo, user, photoModalclose }) => {
  const { title, body, like } = photo;
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
        <Image style={styles.image} source={camera}></Image>
        <Text style={styles.photoTitle}>{title}</Text>
      </TouchableOpacity>
      <PhotoBodyModal
        open={photobodyModalVisible}
        closePhotoBodyModal={closePhotoBodyModal}
        photoModalclose={photoModalclose}
        photo={photo}
        user={user}
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
