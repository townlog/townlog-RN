import React, { useState } from "react";
import { createPhoto } from "../../api/furnitures";
import * as MediaLibrary from "expo-media-library";
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
  TextInput,
} from "react-native";
import plus from "../../assets/plus2.png";

const CreatePhotoModal = (props) => {
  const { open, close, getMyPhotoList } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selected, setSelected] = useState();
  const [allPhotos, setAllPhotos] = useState();
  const changeSelected = (photo) => {
    setSelected(photo);
  };

  const titleHandler = (e) => {
    setTitle(e);
  };
  const BodyHandler = (e) => {
    setBody(e);
  };

  const onCreateClick = async () => {
    await createPhoto({ title, body });
    getMyPhotoList();
    close();
  };
  const getPhoto = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    const { assets } = await MediaLibrary.getAssetsAsync({
      mediaType: ["photo"],
    });
    const [firstPhoto] = assets;
    setSelected(firstPhoto);
    setAllPhotos(assets);
    Alert.alert(assets[0]);
  };
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
                  <TextInput
                    style={styles.input}
                    onChangeText={titleHandler}
                    placeholder="title"
                    placeholderTextColor="gray"
                  ></TextInput>
                  <TouchableOpacity
                    style={{
                      width: "10%",
                      height: "50%",
                      position: "absolute",
                      right: "0%",
                    }}
                    onPress={getPhoto}
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
                  <TextInput
                    onChangeText={BodyHandler}
                    style={styles.bodyinput}
                    placeholder="body"
                    placeholderTextColor="gray"
                  ></TextInput>
                </ScrollView>
                <View style={styles.click}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onCreateClick}
                  >
                    <Text style={styles.textStyle}>글 쓰기</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={close}
                  >
                    <Text style={styles.textStyle}>close</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  click: {
    flex: 0.5,
    justifyContent: "center",
    flexDirection: "row",
  },
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
    height: "50%",
    width: "40%",
    margin: 10,
  },

  buttonClose: {
    backgroundColor: "lightblue",
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
  input: {
    position: "absolute",

    height: "300%",
    width: "70%",
    margin: 7,
    borderWidth: 1,
    padding: 10,
    borderColor: "lightgray",
    textAlign: "center",
    alignContent: "center",
    padding: 10,
  },
  bodyinput: {
    height: "700%",
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgray",
    top: "3%",
    textAlign: "center",
    alignContent: "center",
  },
});

export default CreatePhotoModal;
