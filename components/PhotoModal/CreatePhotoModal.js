import React, { useState } from "react";
import { createPhoto } from "../../api/furnitures";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

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
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import plus from "../../assets/plus2.png";

const CreatePhotoModal = (props) => {
  const { open, close, getPhotoList } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [image, setImage] = useState(null);

  const titleHandler = (e) => {
    setTitle(e);
  };
  const BodyHandler = (e) => {
    setBody(e);
  };

  const onCreateClick = async () => {
    Alert.alert(image);
    await createPhoto({ title, body, files: image ? [image] : [] });
    getPhotoList();
    close();
  };

  const onCloseClick = async () => {
    close();
    setImage(null);
  };

  const getPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
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
              <KeyboardAvoidingView
                behavior={"padding"}
                style={styles.modalView}
              >
                <View style={styles.modalTop}>
                  <TextInput
                    style={styles.input}
                    onChangeText={titleHandler}
                    placeholder="title"
                    placeholderTextColor="gray"
                  ></TextInput>
                  <TouchableOpacity style={styles.camera} onPress={getPhoto}>
                    <Image source={plus} style={styles.plusimage}></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.photoView}>
                  {image && (
                    <Image source={{ uri: image }} style={styles.photo} />
                  )}
                </View>
                <View style={styles.bodyinputView}>
                  <ScrollView style={styles.scroll}>
                    <TextInput
                      onChangeText={BodyHandler}
                      style={styles.bodyinput}
                      placeholder="body"
                      placeholderTextColor="gray"
                      multiline={true}
                      blurOnSubmit={true}
                    ></TextInput>
                  </ScrollView>
                </View>
                <View style={styles.clickView}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onCreateClick}
                  >
                    <Text style={styles.textStyle}>글 쓰기</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onCloseClick}
                  >
                    <Text style={styles.textStyle}>close</Text>
                  </Pressable>
                </View>
              </KeyboardAvoidingView>
            </View>
          </Modal>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex: 0.9,
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
  modalTop: {
    flex: 1,
    width: "100%",
    height: "5%",
    flexDirection: "row",
  },
  input: {
    height: "100%",
    width: "80%",
    position: "absolute",
    left: "0%",
    borderWidth: 1,
    borderColor: "lightgray",
    textAlign: "center",
  },

  camera: {
    width: "10%",
    height: "100%",
    position: "absolute",
    right: "3%",
  },

  plusimage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    tintColor: "lightblue",
  },
  photoView: {
    flex: 10,
    height: "100%",
    width: "100%",

    margin: 20,
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  photo: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "contain",
  },
  bodyinputView: {
    flex: 5,
    height: "100%",
    width: "100%",
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  scroll: {
    height: "100%",
    width: "100%",
    alignContent: "center",
  },

  bodyinput: {
    height: "100%",
    width: "100%",
    textAlign: "center",
    alignContent: "center",
  },
  clickView: {
    flex: 2,
    justifyContent: "center",
    flexDirection: "row",
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

  modalTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    top: "2%",
    color: "lightblue",
  },
});

export default CreatePhotoModal;
