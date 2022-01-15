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
import background from "../../assets/town.png";
import home from "../../assets/home2.png";

const HomeScreen = ({ navigation }) => {
  const HomeClickHandler = () => {
    navigation.navigate("MyRoom");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgroundimage}
      >
        <TouchableOpacity onPress={HomeClickHandler}>
          <Image source={home} resizeMode="cover" style={styles.image} />
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
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  image: {
    height: "60%",
    width: "auto",
    // position: "absolute",
    top: "35%",
    resizeMode: "contain",
  },
});

export default HomeScreen;
