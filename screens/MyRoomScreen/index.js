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
import photo from "../../assets/photo.jpg";
import book from "../../assets/book.png";
import music from "../../assets/recordplayer.png";
import MyBookModal from "../../components/MyBookModal/MyBookModal";
import MyMusicModal from "../../components/MyMusicModal/MyMusicModal";
import MyStudyModal from "../../components/StudyModal/MyStudyModal";

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

  const [studyModalVisible, setStudyModalVisible] = useState(false);

  const openStudyModal = () => {
    setStudyModalVisible(true);
  };

  const closeStudyModal = () => {
    setStudyModalVisible(false);
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
        <MyBookModal
          open={bookModalVisible}
          close={closeBookModal}
        ></MyBookModal>

        <TouchableOpacity
          onPress={openStudyModal}
          style={styles.studytouchable}
        >
          <MyStudyModal
            open={studyModalVisible}
            close={closeStudyModal}
          ></MyStudyModal>
          <Image source={study} resizeMode="cover" style={styles.furniture} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={openMusicModal}
          style={styles.musictouchable}
        >
          <MyMusicModal
            open={musicModalVisible}
            close={closeMusicModal}
          ></MyMusicModal>
          <Image source={music} resizeMode="cover" style={styles.furniture} />
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
    top: "27%",
    left: "35%",
  },
  studytouchable: {
    flex: 1,
    height: "60%",
    width: "60%",
    position: "absolute",
    top: "50%",
    right: "0%",
  },
  musictouchable: {
    flex: 1,
    height: "40%",
    width: "40%",
    position: "absolute",
    top: "33%",
    left: "0%",
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
    height: "50%",
    width: "100%",
  },
});

export default MyRoomScreen;
