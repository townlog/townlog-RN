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
import photo from "../../assets/photo.jpg";
import music from "../../assets/recordplayer.png";
import BookModal from "../../components/BookModal/BookModal";
import MusicModal from "../../components/MusicModal/MusicModal";
import MyPhotoModal from "../../components/MyPhotoModal/MyPhotoModal";

const FriendRoomScreen = ({ navigation, route }) => {
  const { user } = route.params;

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
          <Image source={book} resizeMode="cover" style={styles.furniture} />
        </TouchableOpacity>
        <BookModal
          open={bookModalVisible}
          close={closeBookModal}
          user={user}
          isFriend={true}
        ></BookModal>
        <TouchableOpacity
          onPress={openMusicModal}
          style={styles.musictouchable}
        >
          <MusicModal
            open={musicModalVisible}
            close={closeMusicModal}
            user={user}
            isFriend={true}
          ></MusicModal>
          <Image source={music} resizeMode="cover" style={styles.furniture} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={openPhotoModal}
          style={styles.phototouchable}
        >
          <MyPhotoModal
            open={photoModalVisible}
            close={closePhotoModal}
          ></MyPhotoModal>
          <Image source={photo} resizeMode="cover" style={styles.furniture} />
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
    height: "30%",
    width: "55%",
    position: "absolute",
    top: "27%",
    left: "35%",
  },
  musictouchable: {
    flex: 1,
    height: "20%",
    width: "40%",
    position: "absolute",
    top: "33%",
    left: "0%",
  },
  phototouchable: {
    flex: 1,
    height: "12.5%",
    width: "25%",
    position: "absolute",
    top: "20%",
    left: "5%",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  furniture: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
});

export default FriendRoomScreen;
