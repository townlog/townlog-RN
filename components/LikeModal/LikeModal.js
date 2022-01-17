import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import LikeUserProfile from "./LikeUserProfile";
const LikeModal = (props) => {
  const { open, likes, closeLikeModal, closeBodyModal, Modalclose } = props;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {open ? (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={closeLikeModal}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalTop}>
                  <Text style={styles.modalTitle}>Like List</Text>
                </View>
                <View
                  style={{
                    flex: 10,
                    height: "100%",
                    width: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  <ScrollView style={{ width: "100%", height: "100%" }}>
                    {likes.map((e) => (
                      <LikeUserProfile
                        user={e}
                        closeLikeModal={closeLikeModal}
                        closeBodyModal={closeBodyModal}
                        Modalclose={Modalclose}
                      />
                    ))}
                  </ScrollView>
                </View>
                <View style={{ flex: 1 }}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={closeLikeModal}
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
    width: "100%",
    position: "absolute",
    left: "0%",
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
  },

  camera: {
    width: "10%",
    height: "100%",
    position: "absolute",
    right: "3%",
  },
  photoView: {
    flex: 10,
    padding: 10,
    height: "100%",
    width: "100%",

    margin: 20,
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 2,
    borderColor: "lightblue",
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
    borderWidth: 2,
    borderColor: "lightblue",
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
    fontFamily: "sinbifont",
  },
});

export default LikeModal;
