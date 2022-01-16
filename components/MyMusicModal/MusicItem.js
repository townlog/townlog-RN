import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import music from "../../assets/music.png";
import MusicBodyModal from "./MusicBodyModal";

const MusicItem = ({ musics }) => {
  const { title, body, like } = musics;
  const [musicbodyModalVisible, setmusicbodyModalVisible] = useState(false);

  const openMusicBodyModal = () => {
    setmusicbodyModalVisible(true);
  };

  const closeMusicBodyModal = () => {
    setmusicbodyModalVisible(false);
  };
  // const BookClickHandler = () => {};
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={openMusicBodyModal}>
        <Image style={styles.image} source={music}></Image>
        <Text style={styles.musicTitle}>{title}</Text>
      </TouchableOpacity>
      <MusicBodyModal
        open={musicbodyModalVisible}
        close={closeMusicBodyModal}
        musics={musics}
      ></MusicBodyModal>
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
  musicTitle: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default MusicItem;
