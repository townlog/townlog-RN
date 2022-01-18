import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { createTodos } from "../../api/todo";

const CreateTodoModal = (props) => {
  const { open, close, pickdate, getTodoList } = props;

  const [questInput, setQuestInput] = useState("");

  const handleOnChange = (e) => {
    setQuestInput(e);
  };
  const createTodo = () => {
    createTodos(questInput, pickdate);
    getTodoList(pickdate);
    close();
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
            <KeyboardAvoidingView
              behavior="padding"
              style={styles.centeredView}
            >
              <View style={styles.modalView}>
                <View style={styles.modalTop}>
                  <Text style={styles.calendarTitle}>할 일을 입력하세요.</Text>
                </View>
                <TextInput
                  style={styles.inputstyle}
                  onChangeText={handleOnChange}
                ></TextInput>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      setQuestInput("");
                      close();
                    }}
                  >
                    <Text style={styles.textStyle}>close</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={createTodo}
                  >
                    <Text style={styles.textStyle}>등록</Text>
                  </Pressable>
                </View>
              </View>
            </KeyboardAvoidingView>
          </Modal>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 40,
  },

  modalView: {
    flex: 0.3,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    padding: 10,
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
    width: "40%",
    height: "50%",
    borderRadius: 20,
    elevation: 2,
    marginTop: 10,
    marginHorizontal: 10,
    justifyContent: "center",
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
    width: "100%",
    height: "20%",
    paddingBottom: "5%",
    textAlign: "center",
  },
  modalTitle: {
    height: "100%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "lightblue",
  },
  calendarTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: "50%",
    left: "30%",
    color: "lightblue",
  },
  inputstyle: {
    height: "40%",
    width: "80%",
    marginBottom: "5%",
    borderColor: "lightblue",
    borderWidth: 2,
  },
});
export default CreateTodoModal;
