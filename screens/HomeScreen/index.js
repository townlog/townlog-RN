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
import background from "../../assets/town.png";
import home from "../../assets/home2.png";
import friendicon from "../../assets/friendicon2.png";
import FriendModal from "../../components/FriendModal/FriendModal";

const HomeScreen = ({ navigation }) => {
  const [FriendModalVisible, setFriendModalVisible] = useState(false);

  const openFriendModal = () => {
    setFriendModalVisible(true);
  };

  const closeFriendModal = () => {
    setFriendModalVisible(false);
  };

  const HomeClickHandler = () => {
    navigation.navigate("MyRoom");
  };

  const FriendClickHandler = () => {
    Alert.alert("Friend");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgroundimage}
      >
        <TouchableOpacity
          style={styles.homeiconstyle}
          onPress={HomeClickHandler}
        >
          <Image source={home} resizeMode="cover" style={styles.home} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.friendiconstyle}
          onPress={openFriendModal}
        >
          <Image source={friendicon} resizeMode="cover" style={styles.friend} />
        </TouchableOpacity>
        <FriendModal
          open={FriendModalVisible}
          close={setFriendModalVisible}
        ></FriendModal>
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
  homeiconstyle: {
    flex: 1,
    height: "45%",
    width: "80%",
    top: "40%",
    position: "absolute",
  },
  friendiconstyle: {
    flex: 1,
    height: "10%",
    width: "20%",
    position: "absolute",
    top: "5%",
    right: "0%",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  home: {
    height: "100%",
    width: "100%",

    resizeMode: "contain",
  },
  friend: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});

export default HomeScreen;
