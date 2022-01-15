import React from "react";
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

const MyRoomScreen = (navigation) => {
  const BookPressHandler = () => {
    Alert.alert("this is book");
  };
  const MusicPressHandler = () => {
    Alert.alert("this is music");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="contain"
        style={styles.backgroundimage}
      >
        <TouchableOpacity
          onPress={BookPressHandler}
          activeOpacity={0.5}
          style={styles.booktouchable}
        >
          <Image source={book} resizeMode="cover" style={styles.book} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={MusicPressHandler}
          style={styles.musictouchable}
        >
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
    // flexDirection: "row",
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
