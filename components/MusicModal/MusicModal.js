import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import plus from "../../assets/plus2.png";
import MusicList from "./MusicList";
import { getMyMusics, getFriendMusics } from "../../api/furnitures";
import CreateMusicModal from "./CreateMusicModal";

const MusicModal = (props) => {
  const { open, close, user, isFriend } = props;

  const [createMusicModalVisible, setCreateMusicModalVisible] = useState(false);

  const [musicItems, setMusicItems] = useState([]);

  const getMusicList = async () => {
    if (user === null) {
      const { musics } = await getMyMusics();
      setMusicItems(musics);
    } else {
      const { musics } = await getFriendMusics(user.id);
      setMusicItems(musics);
    }
  };
  useEffect(() => {
    getMusicList();
  }, []);
  const openCreateMusicModal = () => {
    setCreateMusicModalVisible(true);
  };
  const closeCreateMusicModal = () => {
    setCreateMusicModalVisible(false);
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
                  {isFriend ? (
                    <Text style={styles.modalTitle}>
                      {user.nickname}'s Music List
                    </Text>
                  ) : (
                    <>
                      <Text style={styles.modalTitle}>My Music List</Text>
                      <TouchableOpacity
                        style={{
                          width: "10%",
                          height: "50%",
                          position: "absolute",
                          right: "0%",
                        }}
                        onPress={openCreateMusicModal}
                      >
                        <Image source={plus} style={styles.plusimage}></Image>
                      </TouchableOpacity>
                    </>
                  )}

                  <CreateMusicModal
                    open={createMusicModalVisible}
                    close={closeCreateMusicModal}
                    getMusicList={getMusicList}
                  ></CreateMusicModal>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    height: "90%",
                    width: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  <MusicList musicItems={musicItems}></MusicList>
                </View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={close}
                >
                  <Text style={styles.textStyle}>close</Text>
                </Pressable>
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    left: "20%",
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
});

export default MusicModal;
