import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import background from "../../assets/room4.png";
import study from "../../assets/study.png";
import book from "../../assets/book.png";
import music from "../../assets/recordplayer.png";
import MyBookModal from "../../components/MyBookModal/MyBookModal";
import MyMusicModal from "../../components/MyMusicModal/MyMusicModal";
import MyPhotoModal from "../../components/MyPhotoModal/MyPhotoModal";

const MyRoomScreen = ({ navigation }) => {
  const [bookModalVisible, setbookModalVisible] = useState(false);

  const openBookModal = () => {
    setbookModalVisible(true);
  };

  const closeBookModal = () => {
    setbookModalVisible(false);
  };

  const [musicModalVisible, setMusicModalVisible] = useState(false);

  const openMusicModal = () => {
    setMusicModalVisible(true);
  };

  const closeMusicModal = () => {
    setMusicModalVisible(false);
  };

  const [photoModalVisible, setPhotoModalVisible] = useState(false);

  const openPhotoModal = () => {
    setPhotoModalVisible(true);
  };

  const closePhotoModal = () => {
    setPhotoModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="contain"
        style={styles.backgroundimage}
      >
        <TouchableOpacity
          onPress={openBookModal}
          activeOpacity={0.5}
          style={styles.booktouchable}
        >
          <Image source={book} resizeMode="cover" style={styles.book} />
        </TouchableOpacity>
        <MyBookModal
          open={bookModalVisible}
          close={closeBookModal}
        ></MyBookModal>
        <TouchableOpacity
          onPress={openMusicModal}
          style={styles.musictouchable}
        >
          <MyMusicModal
            open={musicModalVisible}
            close={closeMusicModal}
          ></MyMusicModal>
          <Image source={music} resizeMode="cover" style={styles.music} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={openPhotoModal}
          style={styles.phototouchable}
        >
          <MyPhotoModal
            open={photoModalVisible}
            close={closePhotoModal}
          ></MyPhotoModal>
          <Image source={music} resizeMode="cover" style={styles.music} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundimage: {
    flex: 1,
    justifyContent: "center",
  },
  booktouchable: {
    flex: 1,
    height: "55%",
    width: "55%",
    position: "absolute",
    top: "15%",
    left: "35%",
  },
  musictouchable: {
    flex: 1,
    height: "40%",
    width: "40%",
    position: "absolute",
    top: "25%",
    left: "0%",
  },
  phototouchable: {
    flex: 1,
    height: "40%",
    width: "40%",
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  book: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  music: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
});

export default MyRoomScreen;
